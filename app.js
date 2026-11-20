// Guardianes del Espinal — navegación de fichas individuales.
const list = document.getElementById('plant-list');
const search = document.getElementById('search');
const category = document.getElementById('category');
const controls = document.querySelector('.controls');
const intro = document.querySelector('.intro');

const esc = (value = '') => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const byId = id => plants.find(p => p.id === id);

// Fotografías verificadas y publicadas en la raíz del repositorio.
const plantPhotos = {
  'algarrobo-blanco': 'Neltuma_alba.jpg'
};

const photoMarkup = (p, detail = false) => {
  const src = plantPhotos[p.id];
  if (src) {
    return `<img class="${detail ? 'detail-photo-image' : 'photo-image'}" src="${src}" alt="${esc(p.common)} (${esc(p.scientific)})" loading="lazy">`;
  }
  return detail
    ? `<div class="detail-photo"><span aria-hidden="true">✿</span><div><strong>Fotografía botánica de ${esc(p.common)}</strong><small>Imagen pendiente de verificación de identidad, procedencia y licencia</small></div></div>`
    : `<div class="photo" aria-label="Espacio reservado para fotografía botánica de ${esc(p.common)}"><span class="photo-leaf" aria-hidden="true">✿</span><strong>Fotografía de ${esc(p.common)}</strong><small>Imagen botánica pendiente de curaduría</small></div>`;
};

function plantCard(p) {
  const article = document.createElement('article');
  article.className = 'plant-card';
  article.innerHTML = `
    ${photoMarkup(p)}
    <div class="content">
      <span class="tag">${esc(p.type)}</span>
      <h3>${esc(p.common)}</h3>
      <p class="scientific">${esc(p.scientific)}</p>
      <p>${esc(p.region)}</p>
      <a class="button-link" href="#${encodeURIComponent(p.id)}">Explorar ficha <span aria-hidden="true">→</span></a>
    </div>`;
  return article;
}

function renderList() {
  document.body.classList.remove('detail-open');
  controls.hidden = false;
  intro.hidden = false;
  const q = search.value.trim().toLocaleLowerCase('es');
  const c = category.value;
  const filtered = plants.filter(p =>
    (c === 'todas' || p.type === c) &&
    [p.common, p.scientific, p.region].join(' ').toLocaleLowerCase('es').includes(q)
  );
  list.className = 'plant-grid';
  list.innerHTML = '';
  if (!filtered.length) {
    list.innerHTML = '<p class="empty">No encontramos especies con esa búsqueda. Probá con otro nombre o categoría.</p>';
    return;
  }
  filtered.forEach(p => list.appendChild(plantCard(p)));
}

function sourceLinks(p) {
  if (!p.sources || !p.sources.length) return '<p>Fuentes específicas pendientes de incorporación.</p>';
  return `<ul class="source-list">${p.sources.map(s => `<li><a href="${esc(s[1])}" target="_blank" rel="noopener noreferrer">${esc(s[0])}</a></li>`).join('')}</ul>`;
}

function renderDetail(p) {
  document.body.classList.add('detail-open');
  controls.hidden = true;
  intro.hidden = true;
  list.className = 'plant-detail';
  list.innerHTML = `
    <a class="back-link" href="#">← Volver al herbario</a>
    <header class="detail-heading">
      <span class="tag">${esc(p.type)} · Flora de Córdoba</span>
      <h2>${esc(p.common)}</h2>
      <p class="detail-scientific">${esc(p.scientific)}</p>
      <p class="detail-region">${esc(p.region)}</p>
    </header>
    ${photoMarkup(p, true)}
    <section class="detail-section">
      <p class="section-kicker">01 · Conocer la especie</p><h3>Parte científica</h3>
      <div class="facts-grid">
        <article class="fact"><h4>Descripción botánica</h4><p>${esc(p.description)}</p></article>
        <article class="fact"><h4>Flores</h4><p>${esc(p.flower)}</p></article>
        <article class="fact"><h4>Frutos y semillas</h4><p>${esc(p.fruit)}</p></article>
        <article class="fact"><h4>Hábitat y distribución</h4><p>${esc(p.region)}</p></article>
        <article class="fact"><h4>Importancia ecológica</h4><p>${esc(p.ecology)}</p></article>
        <article class="fact pending"><h4>Familia botánica y estado de conservación</h4><p>Datos pendientes de completar con fuentes taxonómicas y evaluaciones de conservación específicas.</p></article>
      </div>
    </section>
    <section class="detail-section lore-section">
      <p class="section-kicker">02 · Vínculo con las comunidades</p><h3>Usos y saberes</h3>
      <div class="fact"><h4>Usos tradicionales registrados</h4><p>${esc(p.uses)}</p></div>
      <div class="fact"><h4>Historia y memoria local</h4><p>${esc(p.culture)}</p></div>
      <p class="notice"><strong>Importante:</strong> los usos medicinales se presentan como prácticas o saberes tradicionales, no como recomendaciones de tratamiento ni como prueba de eficacia o seguridad. No consumas ni manipules plantas silvestres sin identificación experta y orientación profesional.</p>
    </section>
    <section class="did-you-know"><h3>🌿 ¿Sabías que...?</h3><p>${esc(p.didYouKnow)}</p></section>
    <section class="learning-challenge"><h3>🔎 Para aprender y explorar</h3>
      <div class="challenge-columns"><article><h4>Primaria · Observar</h4><p>${esc(p.challengePrimary)}</p></article><article><h4>Secundaria · Investigar</h4><p>${esc(p.challengeSecondary)}</p></article></div>
    </section>
    <section class="detail-section sources"><h3>Fuentes para ampliar</h3>${sourceLinks(p)}<p class="editorial-note">La ficha está en desarrollo. Los campos marcados como pendientes se completarán cuando se incorporen referencias específicas y verificables.</p></section>
    <a class="back-link bottom-back" href="#">← Volver al herbario</a>`;
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function routeFromHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id) { renderList(); return; }
  const plant = byId(id);
  if (plant) renderDetail(plant);
  else renderList();
}

search.addEventListener('input', renderList);
category.addEventListener('change', renderList);
window.addEventListener('hashchange', routeFromHash);
routeFromHash();
