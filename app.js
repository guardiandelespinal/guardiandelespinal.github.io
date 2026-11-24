// Guardianes del Espinal — navegación de fichas individuales.
const list = document.getElementById('plant-list');
const search = document.getElementById('search');
const category = document.getElementById('category');
const controls = document.querySelector('.controls');
const intro = document.querySelector('.intro');

const esc = (value = '') => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const byId = id => plants.find(p => p.id === id);

// Fotografías publicadas en la raíz del repositorio.
const plantPhotos = {
  'algarrobo-blanco': 'Neltuma_alba.jpg',
  'espinillo': 'espinillo-arbol.jpg',
 'chanar': 'chanar-arbol.jpg',
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

// Contenido específico de las fichas rápidas.
const quickDetails = {
  'algarrobo-blanco': {
    hero: 'algarrobo-arbol.jpg',
    heroAlt: 'Árbol de algarrobo blanco',
    photos: [
      {
        image: 'algarrobo-hojas.jpg',
        alt: 'Hojas del algarrobo blanco',
        title: 'Hojas',
        description: 'Compuestas y bipinnadas, con pequeñas hojuelas.'
      },
      {
        image: 'algarrobo-flores.jpg',
        alt: 'Flores del algarrobo blanco',
        title: 'Flores',
        description: 'Pequeñas, amarillentas y agrupadas en espigas.'
      },
      {
        image: 'algarrobo-frutos.jpg',
        alt: 'Frutos del algarrobo blanco',
        title: 'Frutos',
        description: 'Vainas alargadas con semillas y pulpa dulce.'
      },
      {
        image: 'algarrobo-corteza.jpg',
        alt: 'Corteza del algarrobo blanco',
        title: 'Tronco y corteza',
        description: 'Corteza parda. Las ramas pueden presentar espinas.'
      }
    ],
    extra: {
      image: 'algarrobo-rama.jpg',
      alt: 'Rama de algarrobo blanco',
      title: 'Observá también sus ramas',
      description: 'La forma de las ramas y la presencia de espinas ayudan a reconocerlo.'
    },
    didYouKnow: 'Los frutos del algarrobo se utilizan tradicionalmente para elaborar harina, arrope y otras preparaciones alimenticias.'
  },

  'espinillo': {
    hero: 'espinillo-arbol.jpg',
    heroAlt: 'Árbol de espinillo',
    photos: [
      {
        image: 'espinillo-hojas.jpg',
        alt: 'Hojas del espinillo',
        title: 'Hojas',
        description: 'Hojas compuestas y bipinnadas, formadas por muchas hojitas pequeñas.'
      },
      {
        image: 'espinillo-flores.jpg',
        alt: 'Flores del espinillo',
        title: 'Flores',
        description: 'Amarillo-doradas, perfumadas y agrupadas en cabezuelas redondeadas.'
      },
      {
        image: 'espinillo-frutos.jpg',
        alt: 'Frutos del espinillo',
        title: 'Frutos',
        description: 'Legumbres gruesas y duras, de color castaño oscuro a negro al madurar.'
      },
      {
        image: 'espinillo-ramas.jpg',
        alt: 'Ramas y espinas del espinillo',
        title: 'Tronco y ramas',
        description: 'Ramas con espinas claras, rectas y agudas.'
      }
    ],
    didYouKnow: 'Las flores pequeñas se agrupan en cabezuelas que forman esferas amarillas y perfumadas, muy características durante la floración.'
  },
  'chanar': {
    hero: 'chanar-arbol.jpg',
    heroAlt: 'Árbol de chañar',

    photos: [
      {
        image: 'chanar-hojas.jpg',
        alt: 'Hojas del chañar',
        title: 'Hojas',
        description: 'Hojas compuestas, formadas por pequeñas hojuelas dispuestas a ambos lados de un eje.'
      },
      {
        image: 'chanar-flores.jpg',
        alt: 'Flores del chañar',
        title: 'Flores',
        description: 'Flores amarillas o anaranjadas, agrupadas sobre las ramas.'
      },
      {
        image: 'chanar-frutos.jpg',
        alt: 'Frutos del chañar',
        title: 'Frutos',
        description: 'Frutos carnosos, de tonalidad amarilla a anaranjada cuando maduran.'
      },
      {
        image: 'chanar-tronco.jpg',
        alt: 'Tronco y corteza del chañar',
        title: 'Tronco y corteza',
        description: 'Corteza característica que se desprende en láminas y deja ver sectores verdosos.'
      }
    ],

    didYouKnow: 'El fruto del chañar tiene una larga tradición de aprovechamiento alimentario. En distintas regiones se utiliza para preparar arrope y dulces.'
  }
};

function renderQuickDetail(p) {
  const q = quickDetails[p.id];

  // Si no hay una ficha rápida preparada, se muestra la ficha completa.
  if (!q) {
    renderDetail(p);
    return;
  }

  document.body.classList.add('detail-open');
  controls.hidden = true;
  intro.hidden = true;
  list.className = 'plant-detail';

  const photosHTML = q.photos.map(photo => `
    <article class="fact">
      <img src="${photo.image}" alt="${esc(photo.alt)}" loading="lazy">
      <h4>${esc(photo.title)}</h4>
      <p>${esc(photo.description)}</p>
    </article>
  `).join('');

  const extraHTML = q.extra ? `
    <article class="fact">
      <img src="${q.extra.image}" alt="${esc(q.extra.alt)}" loading="lazy">
      <h4>${esc(q.extra.title)}</h4>
      <p>${esc(q.extra.description)}</p>
    </article>
  ` : '';

  list.innerHTML = `
    <a class="back-link" href="#">← Volver al herbario</a>

    <header class="detail-heading">
      <span class="tag">Conocé nuestra flora</span>
      <h2>${esc(p.common)}</h2>
      <p class="detail-scientific">${esc(p.scientific)}</p>
    </header>

    <img class="detail-photo-image"
      src="${q.hero}"
      alt="${esc(q.heroAlt)}"
      loading="lazy">

    <section class="detail-section">
      <h3>Aprendé a reconocerlo</h3>
      <div class="quick-photo-grid">
        ${photosHTML}
      </div>
      ${extraHTML}
    </section>

    <section class="did-you-know">
      <h3>🌿 ¿Sabías que...?</h3>
      <p>${esc(q.didYouKnow)}</p>
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
        <li>Frutos: Milena Calvi — <a href="https://commons.wikimedia.org/wiki/File:Neltuma_alba_(Griseb.)_C.E.Hughes_%26_G.P.LewIS_-_Fruto_(foto_2).jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>.</li>
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
  if (!id) {
    renderList();
    return;
  }

  const plant = byId(id);

  if (!plant) {
    renderList();
    return;
  }

  if (quickDetails[plant.id]) {
    renderQuickDetail(plant);
  } else {
    renderDetail(plant);
  }
}

search.addEventListener('input', renderList);
category.addEventListener('change', renderList);
window.addEventListener('hashchange', routeFromHash);
routeFromHash();
