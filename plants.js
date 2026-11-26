  // Herbario educativo Guardianes del Espinal.
// Contenido inicial ampliado. Las fotografías se incorporarán cuando se verifique
// su identificación botánica, procedencia y licencia de uso.
const plants = [
  {
    id: 'algarrobo-blanco',
  common: 'Algarrobo blanco',
  scientific: 'Neltuma alba (sin. Prosopis alba)',
  type: 'Árbol',

  region: 'Especie nativa de Sudamérica, presente en Argentina y registrada en Córdoba. Su presencia autóctona en Río Cuarto y en la Reserva Chocancharava requiere confirmación mediante registros locales.',

  description: 'Árbol que puede alcanzar aproximadamente 5 a 12 metros de altura, con copa amplia, corteza pardo-grisácea y ramas que pueden presentar espinas. Sus hojas son compuestas y bipinnadas, formadas por numerosos folíolos pequeños.',

  flower: 'Flores pequeñas, amarillentas, agrupadas en espigas alargadas y cilíndricas, generalmente péndulas. Ofrecen néctar y polen a distintos insectos.',

  fruit: 'Produce vainas conocidas como algarrobas, alargadas, curvas o casi rectas, amarillentas al madurar. Contienen semillas rodeadas por una pulpa aprovechable como alimento.',

  uses: 'Los frutos se utilizan para elaborar harina de algarroba, patay, arrope y bebidas tradicionales. La madera también ha sido aprovechada como combustible y para construcción, muebles y artesanías.',

  culture: 'El algarrobo forma parte de la memoria alimentaria y cultural de distintas comunidades del centro y norte argentino. Las recetas y prácticas tradicionales se transmiten entre generaciones y pueden variar entre localidades.',

  ecology: 'Sus flores ofrecen recursos a insectos polinizadores y sus frutos alimentan a distintos animales. Como leguminosa, establece asociaciones con microorganismos del suelo que participan en la fijación biológica del nitrógeno.',

  didYouKnow: 'La harina de algarroba se obtiene de sus frutos secos molidos y se utiliza en preparaciones tradicionales como el patay. El nombre Prosopis alba todavía aparece con frecuencia en libros, recetas y bibliografía anterior a su reclasificación.',

  challengePrimary: 'Observá las hojas: ¿ves que cada hoja está dividida en muchas hojitas pequeñas? Dibujá una hoja completa y contá sus divisiones.',

  challengeSecondary: '¿Qué importancia tiene la asociación del algarrobo con bacterias fijadoras de nitrógeno? Investigá cómo este proceso contribuye al funcionamiento del suelo.',

  sources: [
    ['Sistema de Información de Biodiversidad – Neltuma alba', 'https://sib.gob.ar/especies/neltuma-alba'],
    ['Plants of the World Online – Royal Botanic Gardens, Kew', 'https://powo.science.kew.org/'],
    ['Hughes et al. (2022) – Revisión taxonómica de Prosopis', 'https://doi.org/10.3897/phytokeys.205.75379'],
    ['IDACOR-CONICET – Plantas ancestrales y saberes locales', 'https://idacor.conicet.gov.ar/plantas-locales/']
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
    id: 'molle',
  common: 'Molle de beber',
  scientific: 'Lithraea molleoides',
  type: 'Árbol',

  region: 'Especie nativa de Sudamérica, registrada en Córdoba y característica de ambientes del Chaco Serrano. Su presencia específica en la Reserva Chocancharava todavía requiere confirmación mediante registros locales.',

  description: 'Árbol mediano que puede alcanzar entre 3 y 8 metros de altura. Presenta copa globosa, densa y brillante, con ramas oscuras y tortuosas, generalmente sin espinas.',

  flower: 'Flores pequeñas, amarillentas, agrupadas en racimos compuestos o panículas axilares. Puede presentar flores masculinas y femeninas en ejemplares diferentes.',

  fruit: 'Fruto globoso tipo drupa, de aproximadamente 6 a 8 mm. Tiene una cubierta blanquecina o translúcida que permite observar la pulpa oscura, carnosa y de sabor dulce y picante.',

  uses: 'Los frutos cuentan con usos alimentarios tradicionales: se emplean para preparar arrope y una bebida fermentada conocida como aloja de molle. La planta puede provocar reacciones alérgicas; no se recomienda manipularla ni utilizarla en preparados caseros.',

  culture: 'El nombre “molle de beber” se relaciona con el aprovechamiento tradicional de sus frutos en bebidas regionales. Estos saberes forman parte de la memoria cultural de distintas comunidades.',

  ecology: 'Es una especie característica del bosque serrano y puede alcanzar importancia en los ambientes del Chaco Serrano. Forma parte de la estructura del bosque y de sus comunidades vegetales.',

  didYouKnow: 'Sus frutos fueron aprovechados tradicionalmente para elaborar aloja de molle. Aunque se llama “molle”, no debe confundirse con otras especies que comparten ese nombre popular.',

  challengePrimary: 'Observá las hojas sin arrancarlas: ¿podés reconocer los folíolos que forman cada hoja compuesta? ¿Cuántos encontrás?',

  challengeSecondary: '¿Por qué es importante conocer los posibles efectos alergénicos del molle de beber antes de realizar actividades de observación o recolección en el monte?',

  sources: [
    ['Sistema de Información de Biodiversidad – Administración de Parques Nacionales: Lithraea molleoides', 'https://sib.gob.ar/index.php/especies/lithraea-molleoides'],
    ['Lozano, Aquino y Zapater (2022). Morfología comparativa en Lithraea (Anacardiaceae), aspectos vegetativos y reproductivos y distribución en Argentina. Lilloa 59(1). DOI: 10.30550/j.lil/2022.59.1/2022.04.06', 'https://doi.org/10.30550/j.lil/2022.59.1/2022.04.06'],
    ['Árboles y arbustos del Paseo del Bosque – Facultad de Ciencias Naturales y Museo, UNLP', 'https://ri.conicet.gov.ar/']]
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
    id: 'tala',
  common: 'Tala',
  scientific: 'Celtis ehrenbergiana',
  type: 'Árbol',
  region: 'Nativo de ambientes del Espinal, Chaco y bosques serranos de Córdoba.',
  description: 'Árbol caducifolio que puede alcanzar entre 5 y 12 metros de altura. Su tronco y sus ramas suelen presentar formas irregulares y zigzagueantes. Sus ramas poseen espinas rectas.',
  flower: 'Flores pequeñas, poco llamativas, de color verdoso o amarillento. Aparecen principalmente en primavera.',
  fruit: 'Fruto carnoso tipo drupa, pequeño y de color anaranjado o amarillo al madurar. Es conocido popularmente como talita.',
  uses: 'Sus frutos maduros son comestibles. La madera se ha utilizado como leña y combustible. Los usos tradicionales deben documentarse indicando su procedencia.',
  culture: 'El tala forma parte del paisaje y de la identidad de distintos ambientes naturales de Argentina. Su presencia en los montes nativos también representa un vínculo entre la vegetación y la fauna local.',
  ecology: 'Sus frutos alimentan a numerosas aves y otros animales, que contribuyen a dispersar sus semillas. Su ramaje espinoso ofrece refugio y sitios de nidificación para distintas especies.',
  didYouKnow: 'Las aves que comen sus frutos ayudan a que las semillas del tala lleguen a otros lugares y puedan germinar.',
  challengePrimary: 'Buscá una hoja de tala caída y observá sus nervaduras y el borde aserrado. ¿Qué forma tiene?',
  challengeSecondary: '¿Cómo contribuyen los frutos y las ramas espinosas del tala a la supervivencia de las aves y otros animales del monte?',
  sources: [
    ['Flora de Entre Ríos - Fichas técnicas', 'https://aprender.entrerios.edu.ar/wp-content/uploads/2025/06/Flora-de-Entre-Rios_fichas-Tecnicas.pdf'],
    ['Flora nativa de la Cuenca Matanza Riachuelo - ACUMAR', 'https://www.acumar.gob.ar/wp-content/uploads/2016/12/Fichas-Flora-Nativa_1.pdf'],
    ['Contribución al conocimiento de flora y recursos de la Reserva Natural Laguna La Felipa, Córdoba', 'https://www.academia.edu/82019161/Contribuci%C3%B3n_al_conocimiento_de_flora_y_recursos_de_la_Reserva_Natural_de_Fauna_Laguna_La_Felipa_C%C3%B3rdoba_Argentina_']
  ]
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
  },
 {
    id: 'cucharero',
    common: 'Cucharero',
    scientific: 'Porlieria microphylla',
    type: 'Arbusto / arbolito',

    region: 'Especie nativa de Argentina, registrada en Córdoba y otras provincias del centro y norte del país. Su presencia autóctona en Río Cuarto y en la Reserva Chocancharava requiere confirmación mediante registros locales.',

    description: 'Arbusto o arbolito de aproximadamente 2 a 4 metros de altura, muy ramificado y con corteza grisácea. Sus ramas presentan nudos marcados y pequeñas estructuras endurecidas. Sus hojas son opuestas y compuestas, formadas por numerosos folíolos pequeños.',

    flower: 'Flores pequeñas, solitarias o agrupadas, de tonos blanquecinos a amarillentos. La floración ocurre principalmente durante la primavera.',

    fruit: 'Frutos pequeños, redondeados y de color morado oscuro a negro cuando maduran. Están formados por varias partes o segmentos, cada uno con una semilla.',

    uses: 'La madera es dura y resistente, y se ha utilizado tradicionalmente para fabricar cucharas y como leña. También existen registros bibliográficos de usos medicinales populares, que deben considerarse saberes tradicionales y no tratamientos médicos comprobados.',

    culture: 'Su nombre común, cucharero, se relaciona con el aprovechamiento de su madera para confeccionar cucharas. Es un ejemplo de cómo las características de una planta y los conocimientos sobre sus materiales pueden quedar reflejados en los nombres populares.',

    ecology: 'Sus frutos pueden ser consumidos por aves y hormigas, que participan en la dispersión de sus semillas. Forma parte de comunidades vegetales de ambientes secos y bosques nativos.',

    didYouKnow: 'El cucharero puede desarrollar frutos oscuros y brillantes, pequeños pero importantes para la alimentación de algunos animales y para la dispersión de sus semillas.',

    challengePrimary: 'Observá sus hojas: ¿podés distinguir los pequeños folíolos que forman cada hoja compuesta? Dibujá una hoja completa.',

    challengeSecondary: '¿Qué relación existe entre los frutos carnosos, los animales que los consumen y la dispersión de semillas? Explicá cómo este proceso puede ayudar a regenerar el monte.',

    sources: [
      ['Sistema de Información de Biodiversidad – Administración de Parques Nacionales: Porlieria microphylla', 'https://sib.gob.ar/especies/porlieria-microphylla'],
      ['Arboretum ProYungas – Ficha de Porlieria microphylla', 'https://ediciones.proyungas.org.ar/wp-content/uploads/2025/08/Arboretum-2024-web.pdf'],
      ['Naturalis – Guayacán / Porlieria microphylla, Universidad Nacional de La Plata', 'https://api.naturalis.fcnym.unlp.edu.ar/server/api/core/bitstreams/5345a17d-888d-4485-897b-a703cb21f45d/content'],
      ['Frutos de leñosas nativas de Argentina – Universidad Nacional de Santiago del Estero', 'https://fcf.unse.edu.ar/archivos/publicaciones/Frutos%20de%20lenosas%20nativas%20de%20Argentina%20-%20ebook.pdf']
    ]
  }
];
