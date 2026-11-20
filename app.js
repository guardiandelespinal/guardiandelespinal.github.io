const list = document.getElementById('plant-list');
const search = document.getElementById('search');
const category = document.getElementById('category');

function card(p) {
  const el = document.createElement('article');
  el.className = 'plant-card';
  el.innerHTML = `
    <div class="photo" role="img" aria-label="Espacio reservado para fotografía botánica de ${p.common}">
      Fotografía de ${p.common}<br><small>Imagen botánica pendiente de curaduría</small>
    </div>
    <div class="content">
      <span class="tag">${p.type}</span>
      <h3>${p.common}</h3>
      <p class="scientific">${p.scientific}</p>
      <p>${p.region}</p>
      <button type="button" aria-expanded="false">Ver ficha completa</button>
      <div class="details">
        <h4>Descripción</h4><p>${p.description}</p>
        <h4>Flor</h4><p>${p.flower}</p>
        <h4>Fruto</h4><p>${p.fruit}</p>
        <h4>Usos y saberes tradicionales</h4><p>${p.uses}</p>
        <h4>Historia y memoria local</h4><p>${p.culture}</p>
        <h4>Importancia ecológica</h4><p>${p.ecology}</p>
        <section class="did-you-know"><h4>🌿 ¿Sabías que...?</h4><p>${p.didYouKnow}</p></section>
        <section class="learning-challenge">
          <h4>🔎 Para observar — Primaria</h4><p>${p.challengePrimary}</p>
          <h4>🧭 Para investigar — Secundaria</h4><p>${p.challengeSecondary}</p>
        </section>
        <h4>Fuentes para ampliar</h4>
        <p class="sources">${p.sources.map(s => `<a href="${s[1]}" target="_blank" rel="noopener noreferrer">${s[0]}</a>`).join('<br>')}</p>
        <p class="notice">Ficha educativa en desarrollo. Los usos medicinales se describen como prácticas tradicionales documentadas; no son recomendaciones de tratamiento ni prueban eficacia o seguridad. No consumas partes de plantas silvestres sin identificación experta y orientación profesional.</p>
      </div>
    </div>`;
  const btn = el.querySelector('button');
  const details = el.querySelector('.details');
  btn.addEventListener('click', () => {
    details.classList.toggle('open');
    const opened = details.classList.contains('open');
    btn.setAttribute('aria-expanded', String(opened));
    btn.textContent = opened ? 'Cerrar ficha' : 'Ver ficha completa';
  });
  return el;
}

function render() {
  const q = search.value.trim().toLocaleLowerCase('es');
  const c = category.value;
  const filtered = plants.filter(p =>
    (c === 'todas' || p.type === c) &&
    [p.common, p.scientific, p.region].join(' ').toLocaleLowerCase('es').includes(q)
  );
  list.innerHTML = '';
  if (!filtered.length) {
    list.innerHTML = '<p class="empty">No encontramos especies con esa búsqueda.</p>';
    return;
  }
  filtered.forEach(p => list.appendChild(card(p)));
}
search.addEventListener('input', render);
category.addEventListener('change', render);
render();
