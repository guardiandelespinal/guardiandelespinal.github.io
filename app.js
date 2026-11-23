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
  'algarrobo-blanco': 'Neltuma_alba.jpg',
  'espinillo': 'Espinillo_Vachellia_caven.jpg',
  'chanar': 'Chañar_Geoffroea_decorticans.jpg.jpg',
  'mistol': 'Mistol_Sarcomphalus_mistol.jpg',
  'molle': 'Molle_Lithraea_molleoides.jpg',
  'peperina': 'Peperina_Minthostachys_verticillata.jpg',
  'tabaquillo': 'Polylepis_Australis.jpg'
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

function renderQuickDetail(p) {
  document.body.classList.add('detail-open');
  controls.hidden = true;
  intro.hidden = true;
  list.className = 'plant-detail';

  list.innerHTML = `
    <a class="back-link" href="#">← Volver al herbario</a>

    <header class="detail-heading">
      <span class="tag">Conocé nuestra flora</span>
      <h2>${esc(p.common)}</h2>
      <p class="detail-scientific">${esc(p.scientific)}</p>
    </header>

    <img class="detail-photo-image"
      src="algarrobo-arbol.jpg"
      alt="Árbol de algarrobo blanco">

    <section class="detail-section">
      <h3>Aprendé a reconocerlo</h3>
      <div class="quick-photo-grid">
        <article class="fact">
          <img src="algarrobo-hojas.jpg" alt="Hojas del algarrobo blanco">
          <h4>Hojas</h4>
          <p>Compuestas y bipinnadas, con pequeñas hojuelas.</p>
        </article>

        <article class="fact">
          <img src="algarrobo-flores.jpg" alt="Flores del algarrobo blanco">
          <h4>Flores</h4>
          <p>Pequeñas, amarillentas y agrupadas en espigas.</p>
        </article>

        <article class="fact">
          <img src="algarrobo-frutos.jpg" alt="Frutos del algarrobo blanco">
          <h4>Frutos</h4>
          <p>Vainas alargadas con semillas y pulpa dulce.</p>
        </article>

        <article class="fact">
          <img src="algarrobo-corteza.jpg" alt="Corteza del algarrobo blanco">
          <h4>Tronco y corteza</h4>
          <p>Corteza parda. Las ramas pueden presentar espinas.</p>
        </article>
      </div>

      <article class="fact">
        <img src="algarrobo-rama.jpg" alt="Rama de algarrobo blanco">
        <h4>Observá también sus ramas</h4>
        <p>La forma de las ramas y la presencia de espinas ayudan a reconocerlo.</p>
      </article>
    </section>

    <section class="did-you-know">
      <h3>🌿 ¿Sabías que...?</h3>
      <p>Los frutos del algarrobo se utilizan tradicionalmente para elaborar harina, arrope y otras preparaciones alimenticias.</p>
    </section>

    <button class="button-link" id="show-full-detail" type="button">
      Conocé más sobre esta especie →
    </button>

    <p class="editorial-note">
      Fotografías: consultar los créditos y licencias en la ficha completa.
    </p>
  `;

  document.getElementById('show-full-detail')
    .addEventListener('click', () => renderDetail(p));

  window.scrollTo({top: 0, behavior: 'smooth'});
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
  ${p.id === 'algarrobo-blanco' ? `
    <section class="detail-section">
      <h3>Créditos fotográficos</h3>
      <ul class="source-list">
        <li>Árbol (porte): Milena Calvi — <a href="https://commons.wikimedia.org/wiki/File:Neltuma_alba_(Griseb.)_C.E.Hughes_%26_G.P.Lewis_-_Porte.jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>.</li>
        <li>Hojas: Milena Calvi — <a href="https://commons.wikimedia.org/wiki/File:Neltuma_alba_(Griseb.)_C.E.Hughes_%26_G.P.Lewis_-_Hoja.jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>.</li>
        <li>Flores: Milena Calvi — <a href="https://commons.wikimedia.org/wiki/File:Neltuma_alba_(Griseb.)_C.E.Hughes_%26_G.P.Lewis_-_Flor.jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>.</li>
        <li>Frutos: Milena Calvi — <a href="https://commons.wikimedia.org/wiki/File:Neltuma_alba_(Griseb.)_C.E.Hughes_%26_G.P.Lewis_-_Fruto_(foto_2).jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>.</li>
        <li>Corteza: Milena Calvi — <a href="https://commons.wikimedia.org/wiki/File:Neltuma_alba_(Griseb.)_C.E.Hughes_%26_G.P.Lewis_-_Corteza.jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>.</li>
        <li>Rama: Rebeca Quetglas — <a href="https://commons.wikimedia.org/wiki/File:Neltuma_alba.jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>.</li>
      </ul>
      <p class="editorial-note">
        Fotografías de Milena Calvi: licencia CC BY-SA 4.0.
        Fotografía de Rebeca Quetglas: licencia CC0 1.0.
      </p>
      <p class="editorial-note">
        <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">Consultar CC BY-SA 4.0</a> ·
        <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener noreferrer">Consultar CC0 1.0</a>.
      </p>
    </section>
    ` : ''}
    <a class="back-link bottom-back" href="#">← Volver al herbario</a>`;
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function routeFromHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id) { renderList(); return; }
  const plant = byId(id);
  if (plant && plant.id === 'algarrobo-blanco') {
  renderQuickDetail(plant);
} else if (plant) {
  renderDetail(plant);
} else {
  renderList();
}
  }

search.addEventListener('input', renderList);
category.addEventListener('change', renderList);
window.addEventListener('hashchange', routeFromHash);
routeFromHash();
