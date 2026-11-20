// Herbario educativo Guardianes del Espinal.
// Contenido inicial ampliado. Las fotografías se incorporarán cuando se verifique
// su identificación botánica, procedencia y licencia de uso.
const plants = [
  {
    id: 'algarrobo-blanco', common: 'Algarrobo blanco', scientific: 'Neltuma alba (sin. Prosopis alba)', type: 'Árbol',
    region: 'Nativo de Córdoba; presente en ambientes del Parque Chaqueño y otras regiones del centro y norte argentino.',
    description: 'Árbol de copa amplia, con hojas compuestas bipinnadas y ramas que pueden presentar espinas. Su tamaño y aspecto varían según las condiciones del ambiente.',
    flower: 'Flores pequeñas amarillentas, agrupadas en espigas cilíndricas que suelen verse péndulas.',
    fruit: 'Vainas alargadas, algo curvas o casi rectas, amarillentas al madurar; contienen semillas rodeadas por pulpa.',
    uses: 'Las vainas se muelen para obtener harina usada en preparaciones como patay; también se registran bebidas y arropes tradicionales. La madera tuvo usos como combustible, construcción y mueblería.',
    culture: 'Los frutos del algarrobo forman parte de la memoria alimentaria de comunidades del centro y norte argentino. Las recetas y prácticas se transmiten entre generaciones y pueden variar entre localidades.',
    ecology: 'Sus flores ofrecen recursos a insectos; las vainas alimentan animales y personas. Como leguminosa, participa de procesos ecológicos vinculados al nitrógeno del suelo.',
    didYouKnow: 'El nombre científico actual utilizado por el Sistema de Información de Biodiversidad es Neltuma alba. En bibliografía y recetas antiguas todavía es muy común encontrar el nombre Prosopis alba.',
    challengePrimary: 'Observá las hojas: ¿ves que cada hoja está dividida en muchas hojitas pequeñas? Dibujá una hoja completa y contá sus divisiones.',
    challengeSecondary: 'Compará una vaina madura con una semilla. ¿Qué estructuras protegen la semilla y cómo podría dispersarse en el ambiente?',
    sources: [
      ['Sistema de Información de Biodiversidad – Neltuma alba', 'https://sib.gob.ar/especies/neltuma-alba'],
      ['IDACOR-CONICET – Plantas ancestrales y saberes locales', 'https://idacor.conicet.gov.ar/plantas-locales/'],
      ['Guía florística – Universidad Nacional del Nordeste', 'https://www.agr.unne.edu.ar/images/Documentos/Varios/Unitecbio_GuiaFloral_Digital_2.pdf']
    ]
  },
  {
    id: 'espinillo', common: 'Espinillo', scientific: 'Vachellia caven (sin. Acacia caven)', type: 'Árbol',
    region: 'Especie autóctona presente en Córdoba y característica de espinillares y sectores del Espinal.',
    description: 'Arbolito o arbusto espinoso, generalmente de pocos metros de altura. Tiene hojas compuestas y ramas con espinas claras, rectas y agudas.',
    flower: 'Flores amarillo-doradas y perfumadas, agrupadas en cabezuelas redondeadas.',
    fruit: 'Legumbre gruesa y dura, de color castaño oscuro a negro cuando madura.',
    uses: 'Se valora como recurso melífero y por su presencia en sistemas rurales. La madera y los frutos han tenido distintos aprovechamientos locales; los usos específicos deben documentarse para cada comunidad.',
    culture: 'También se lo conoce en distintas regiones como aromo o churqui. Los nombres populares cambian de una zona a otra, por eso es importante acompañarlos siempre con el nombre científico.',
    ecology: 'Sus flores atraen insectos polinizadores. Sus ramas espinosas pueden ofrecer refugio a pequeños animales y aves.',
    didYouKnow: 'Aunque sus flores son pequeñas, al reunirse en cabezuelas forman las esferas amarillas y perfumadas que hacen reconocible al espinillo durante su floración.',
    challengePrimary: 'Sin tocar las espinas, observá una rama: ¿cuántas espinas encontrás en un tramo corto? ¿De qué color son las flores?',
    challengeSecondary: '¿Qué ventajas y desventajas puede tener para una planta desarrollar espinas? Proponé una hipótesis y buscá evidencias observando el ejemplar.',
    sources: [
      ['Sistema de Información de Biodiversidad – Vachellia caven', 'https://sib.gob.ar/especies/vachellia-caven?tab=info-general'],
      ['INTA – Ficha de especie nativa: Espinillo', 'https://repositorio.inta.gob.ar/bitstream/20.500.12123/12688/2/INTA_CRBsAsNorte_EEASanPedro_Gutierrez_R-et-al_Ficha_nativa_Espinillo.pdf']
    ]
  },
  {
    id: 'chanar', common: 'Chañar', scientific: 'Geoffroea decorticans', type: 'Árbol',
    region: 'Nativo de Córdoba; aparece en ambientes del Espinal, el Chaco y zonas áridas o semiáridas.',
    description: 'Árbol pequeño o mediano, a menudo espinoso y caducifolio. Su corteza puede desprenderse en placas y sus raíces pueden emitir nuevos brotes, formando grupos o chañarales.',
    flower: 'Flores amarillas a anaranjadas, agrupadas en racimos; la floración ocurre en primavera según la región.',
    fruit: 'Fruto carnoso, globoso, amarillento al madurar, con pulpa dulce y pastosa y un carozo duro.',
    uses: 'El fruto es comestible y se utiliza tradicionalmente para preparar dulces y arrope. También se registran usos medicinales populares, que deben presentarse como saberes tradicionales y no como tratamientos probados.',
    culture: 'El arrope de chañar forma parte de la cocina tradicional de distintas comunidades del centro y norte argentino. Las recetas familiares pueden variar en cocción y consistencia.',
    ecology: 'Puede formar chañarales mediante brotes de raíces. Sus flores y frutos ofrecen recursos para insectos y fauna.',
    didYouKnow: 'Un chañar puede contribuir a formar un grupo de árboles conectados por sus raíces: de allí que en algunos paisajes aparezcan conjuntos llamados chañarales.',
    challengePrimary: 'Buscá señales de la corteza: ¿se ve lisa, agrietada o desprendida en placas? Dibujá cómo está organizada.',
    challengeSecondary: '¿Cómo puede el rebrote desde las raíces ayudar a que el chañar forme grupos? Diferenciá reproducción por semillas y propagación vegetativa.',
    sources: [
      ['Sistema de Información de Biodiversidad – Geoffroea decorticans', 'https://sib.gob.ar/especies/geoffroea-decorticans'],
      ['IDACOR-CONICET – Plantas ancestrales y saberes locales', 'https://idacor.conicet.gov.ar/plantas-locales/'],
      ['CONICET – Trayectorias de uso de vegetales silvestres comestibles en Córdoba', 'https://sedici.unlp.edu.ar/handle/10915/201087']
    ]
  },
  {
    id: 'mistol', common: 'Mistol', scientific: 'Sarcomphalus mistol (sin. Ziziphus mistol)', type: 'Árbol',
    region: 'Árbol nativo del Chaco; presente en el norte y oeste de Córdoba, especialmente en ambientes chaqueños.',
    description: 'Árbol de copa globosa y compacta, con ramas zigzagueantes que pueden presentar espinas. Sus hojas son simples y muestran tres nervaduras longitudinales notorias.',
    flower: 'Flores pequeñas, verde amarillentas y suavemente perfumadas.',
    fruit: 'Fruto carnoso tipo drupa, globoso y rojizo al madurar, con pulpa dulce y pastosa y un carozo duro.',
    uses: 'Los frutos se consumen y se utilizan en preparaciones tradicionales como arrope y bolanchao. También se han registrado usos medicinales populares en estudios etnobotánicos; no constituyen indicaciones médicas.',
    culture: 'El mistol integra la memoria alimentaria de comunidades del monte chaqueño. Investigaciones etnobotánicas e históricas documentan su consumo y preparaciones con sus frutos en Córdoba.',
    ecology: 'Sus frutos constituyen alimento para fauna silvestre. Forma parte del estrato arbóreo de los bosques chaqueños.',
    didYouKnow: 'El bolanchao es una preparación tradicional en la que se aprovecha el fruto del mistol, a menudo combinado con harina de algarroba.',
    challengePrimary: 'Observá las hojas: ¿podés distinguir las tres nervaduras principales? Dibujá una hoja y marcá las líneas que ves.',
    challengeSecondary: 'Investigá cómo se relacionan los frutos carnosos con la dispersión de semillas por animales. ¿Qué animales podrían alimentarse de ellos?',
    sources: [
      ['Sistema de Información de Biodiversidad – Sarcomphalus mistol', 'https://sib.gob.ar/especies/sarcomphalus-mistol'],
      ['CONICET – Trayectorias de uso de vegetales silvestres comestibles en Córdoba', 'https://sedici.unlp.edu.ar/handle/10915/201087'],
      ['IDACOR-CONICET – Plantas ancestrales y saberes locales', 'https://idacor.conicet.gov.ar/plantas-locales/']
    ]
  },
  {
    id: 'molle', common: 'Molle de beber', scientific: 'Lithraea molleoides', type: 'Árbol',
    region: 'Nativo de ambientes serranos y bosques del centro de Argentina, incluido Córdoba.',
    description: 'Árbol o arbolito de follaje persistente, con hojas simples y copa variable.',
    flower: 'Flores pequeñas reunidas en inflorescencias.', fruit: 'Fruto pequeño y carnoso, que cambia de color al madurar.',
    uses: 'Se registran aprovechamientos tradicionales regionales. Algunas especies de la familia Anacardiaceae pueden provocar reacciones cutáneas; no manipular ni consumir sin identificación experta.',
    culture: 'Forma parte de los saberes sobre plantas del monte serrano. Los relatos y recetas deben documentarse indicando localidad y fuente.',
    ecology: 'Integra el bosque serrano y aporta estructura y recursos para la fauna.',
    didYouKnow: 'El nombre común “molle” puede aplicarse a distintas especies; el nombre científico ayuda a evitar confusiones entre plantas diferentes.',
    challengePrimary: 'Observá la forma y disposición de las hojas sin arrancarlas. ¿Son simples o están divididas?',
    challengeSecondary: '¿Por qué la identificación precisa de una especie es especialmente importante cuando se registran usos tradicionales?',
    sources: [['Flora de la provincia de Córdoba – referencia bibliográfica para completar', 'https://editorial.unc.edu.ar/']]
  },
  {
    id: 'peperina', common: 'Peperina', scientific: 'Minthostachys verticillata', type: 'Arbusto',
    region: 'Nativa de ambientes serranos de Córdoba; su presencia y abundancia dependen del estado de conservación del ambiente.',
    description: 'Planta aromática de porte arbustivo, con hojas opuestas y tallos ramificados.',
    flower: 'Flores pequeñas agrupadas alrededor de los tallos, en conjuntos que parecen anillos.', fruit: 'Fruto seco pequeño que se divide en unidades llamadas núculas.',
    uses: 'Sus hojas aromáticas se usan tradicionalmente en infusiones y como saborizante. Evitar arrancar plantas silvestres; preferir material cultivado y respetar las normas locales.',
    culture: 'Es una de las plantas aromáticas más asociadas a la identidad serrana cordobesa y a las prácticas familiares de infusiones.',
    ecology: 'Sus flores pueden ofrecer recursos a insectos polinizadores. La recolección intensa puede afectar poblaciones naturales.',
    didYouKnow: 'El aroma intenso de la peperina se percibe al frotar suavemente una hoja, pero para cuidar la planta es mejor observarla sin arrancar partes.',
    challengePrimary: 'Observá cómo se ubican las hojas en el tallo. ¿Aparecen enfrentadas o alternadas?',
    challengeSecondary: '¿Qué impacto puede tener la recolección de plantas completas sobre una población silvestre? Proponé una forma de aprovechamiento sustentable.',
    sources: [['IDACOR-CONICET – Plantas ancestrales y saberes locales', 'https://idacor.conicet.gov.ar/plantas-locales/']]
  },
  {
    id: 'tabaquillo', common: 'Tabaquillo', scientific: 'Polylepis australis', type: 'Árbol',
    region: 'Árbol nativo de sectores de altura de las Sierras Grandes y Comechingones.',
    description: 'Árbol de montaña, de corteza delgada que se desprende en láminas, adaptado a ambientes fríos y ventosos.',
    flower: 'Flores pequeñas y poco vistosas, agrupadas en inflorescencias.', fruit: 'Fruto seco pequeño.',
    uses: 'Su principal valor para este herbario es ecológico y de conservación. No extraer corteza, ramas ni ejemplares.',
    culture: 'Es una especie emblemática de los bosques de altura cordobeses. Las memorias locales pueden sumarse indicando quién las relata y de qué localidad provienen.',
    ecology: 'Los bosques de tabaquillo contribuyen a proteger suelos, regular el agua y ofrecer hábitat a numerosas especies.',
    didYouKnow: 'La corteza en láminas es uno de los rasgos que permite reconocer al tabaquillo en los bosques de altura.',
    challengePrimary: 'Observá la corteza sin desprenderla. ¿Qué aspecto tienen sus láminas?',
    challengeSecondary: 'Explicá cómo un bosque de altura puede influir en la infiltración del agua y la protección del suelo.',
    sources: [['Flora de la provincia de Córdoba – referencia bibliográfica para completar', 'https://editorial.unc.edu.ar/']]
  },
  {
    id: 'tala', common: 'Tala', scientific: 'Celtis ehrenbergiana', type: 'Árbol',
    region: 'Nativo de ambientes del Espinal, Chaco y bosques serranos bajos de Córdoba.',
    description: 'Árbol de copa irregular y ramas que pueden presentar espinas. Sus hojas tienen nervaduras bien marcadas.',
    flower: 'Flores pequeñas y poco llamativas.', fruit: 'Frutos carnosos pequeños, que toman tonos anaranjados o rojizos al madurar.',
    uses: 'Se registran aprovechamientos locales de frutos y madera. La información de cada práctica debe vincularse con fuentes o testimonios identificados.',
    culture: 'El nombre tala aparece en topónimos y nombres de paisajes de distintas regiones argentinas.',
    ecology: 'Sus frutos pueden ser consumidos por aves y otros animales; sus ramas ofrecen refugio.',
    didYouKnow: 'Los frutos pequeños y carnosos del tala son un recurso alimenticio para animales del monte.',
    challengePrimary: 'Buscá un fruto maduro caído y describí su tamaño, color y textura sin probarlo.',
    challengeSecondary: '¿Qué relación puede existir entre la presencia de frutos carnosos y la diversidad de aves en un bosque?',
    sources: [['Flora de la provincia de Córdoba – referencia bibliográfica para completar', 'https://editorial.unc.edu.ar/']]
  },
  {
    id: 'pasionaria', common: 'Pasionaria / mburucuyá', scientific: 'Passiflora caerulea', type: 'Enredadera',
    region: 'Nativa de ambientes de gran parte del centro y este provincial, especialmente bordes de bosques y sitios con soporte para trepar.',
    description: 'Enredadera con zarcillos que le permiten sujetarse a otras plantas o estructuras. Sus hojas suelen estar profundamente divididas en lóbulos.',
    flower: 'Flores vistosas, blancas y violáceas, con una corona de filamentos.',
    fruit: 'Fruto ovalado anaranjado al madurar. No consumir frutos silvestres sin identificación segura.',
    uses: 'IDACOR registra el uso tradicional del fruto como alimento y de infusiones en prácticas locales. Estos registros no son indicaciones médicas ni prueban eficacia o seguridad.',
    culture: 'El nombre mburucuyá y los relatos asociados a la pasionaria tienen variantes regionales; conviene distinguir relatos documentados de versiones populares recientes.',
    ecology: 'Sus flores atraen polinizadores y algunas pasifloras sirven de plantas hospederas para larvas de mariposas.',
    didYouKnow: 'Los zarcillos son estructuras que la planta utiliza para sujetarse mientras trepa y alcanza la luz.',
    challengePrimary: 'Encontrá un zarcillo y dibujá cómo se enrolla alrededor de un soporte.',
    challengeSecondary: '¿Qué ventajas obtiene una enredadera al trepar sobre otras plantas en lugar de sostener un tronco grueso?',
    sources: [['IDACOR-CONICET – Plantas ancestrales y saberes locales', 'https://idacor.conicet.gov.ar/plantas-locales/']]
  },
  {
    id: 'piquillin', common: 'Piquillín', scientific: 'Condalia microphylla', type: 'Arbusto',
    region: 'Nativo de ambientes áridos y semiáridos y sectores del Espinal de Córdoba.',
    description: 'Arbusto espinoso, de hojas pequeñas y ramas rígidas.',
    flower: 'Flores pequeñas y poco llamativas.',
    fruit: 'Frutos carnosos pequeños, que pueden ser rojizos a violáceos oscuros al madurar.',
    uses: 'Los frutos maduros se consumen tradicionalmente y se emplean en preparaciones regionales. La recolección debe ser moderada y respetar la fauna.',
    culture: 'El piquillín forma parte de los recuerdos de recolección de frutos silvestres del monte.',
    ecology: 'Sus frutos pueden alimentar aves y mamíferos; el arbusto brinda refugio.',
    didYouKnow: 'Los frutos del piquillín son parte de la diversidad de alimentos silvestres que se recolectan en distintas regiones del centro argentino.',
    challengePrimary: 'Observá el tamaño de sus hojas y comparalo con el de un árbol cercano. ¿Qué diferencias encontrás?',
    challengeSecondary: '¿Cómo puede la recolección de frutos afectar a los animales que dependen de ellos? Proponé criterios para una recolección responsable.',
    sources: [['Flora de la provincia de Córdoba – referencia bibliográfica para completar', 'https://editorial.unc.edu.ar/']]
  }
];
