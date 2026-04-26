// 1. DATA: Array de objetos (Aquí pegas tu lista)
const conceptos = [
    { titulo: "Álgebra Lineal", img: "AlgebraLineal.PNG", desc: "Rama fundamental de las matemáticas que estudia vectores y matrices, esencial para el cálculo de pesos en redes neuronales." },
    { titulo: "DevOps", img: "DevOps.PNG", desc: "Cultura y conjunto de prácticas que combinan el desarrollo de software y las operaciones de TI para acortar el ciclo de vida del desarrollo." },
    { titulo: "CiberSeguridad", img: "CyberSeguridadIA.PNG", desc: "Protección de sistemas y datos mediante el uso de algoritmos avanzados de IA para detectar amenazas en tiempo real." },
    { titulo: "Procesadores y la Importancia en la IA", img: "ProcesadoresIA.PNG", desc: "Análisis de cómo las GPUs y TPUs aceleran el procesamiento paralelo necesario para entrenar modelos de aprendizaje profundo." },
    { titulo: "Data StoryTelling", img: "DataStoryTelling.PNG", desc: "El arte de comunicar insights de datos mediante narrativas visuales y contextuales que facilitan la toma de decisiones." },
    { titulo: "Calidad de Datos", img: "CalidadDeDatos.PNG", desc: "Proceso de asegurar que los datos sean precisos, completos y confiables antes de ser utilizados en modelos analíticos." },
    { titulo: "Metadatos", img: "MetaDatos.PNG", desc: "Información estructurada que describe, explica y localiza los datos fuente, permitiendo una gestión eficiente de la información." },
    { titulo: "Datos Maestros", img: "DatosMaestros.PNG", desc: "Conjunto de datos únicos y consistentes que representan las entidades clave de una organización como clientes o productos." },
    { titulo: "Datawarehouse", img: "DataWareHouse.PNG", desc: "Sistema de almacenamiento centralizado diseñado para el análisis y reporte de grandes volúmenes de datos históricos." },
    { titulo: "Arquitectura de Datos", img: "ArquitecturaDeDatos.PNG", desc: "Diseño de estructuras y flujos que definen cómo se recolectan, integran y gestionan los activos de datos en una empresa." },
    { titulo: "Diferencia entre Gobierno de Datos y Gobierno de IA", img: "DiferenciaEntreGDyGI.PNG", desc: "Estudio comparativo entre la gestión normativa del dato crudo frente a la regulación de los modelos y algoritmos de IA." },
    { titulo: "Gobierno de Inteligencia Artificial", img: "GobiernoIA.PNG", desc: "Marco de políticas y estándares éticos destinados a garantizar el uso responsable y transparente de los sistemas autónomos." },
    { titulo: "Principales Algoritmos en Aprendizaje por Refuerzo", img: "PrincipalesAlgoritmosAPR.PNG", desc: "Exploración de técnicas como Q-Learning y Policy Gradients donde los agentes aprenden mediante recompensas y castigos." },
    { titulo: "Principales Algoritmos en Aprendizaje No Supervisado", img: "PrincipalesAlgoritmosANS.PNG", desc: "Métodos como K-Means y PCA que encuentran patrones ocultos en datos que no tienen etiquetas previas." },
    { titulo: "Principales Algoritmos en Aprendizaje Supervisado", img: "PrincipalesAlgoritmosAS.PNG", desc: "Modelos entrenados con datos etiquetados, incluyendo Random Forest y Support Vector Machines para clasificación y regresión." },
    { titulo: "Regresión Lineal en Aprendizaje Supervisado", img: "RegresionLineal.PNG", desc: "Algoritmo estadístico fundamental utilizado para predecir valores numéricos continuos basándose en la relación de variables." },
    { titulo: "Agentes de IA", img: "AgentesIA.PNG", desc: "Entidades autónomas capaces de percibir su entorno y ejecutar acciones para alcanzar objetivos específicos sin intervención humana." },
    { titulo: "Diferencias entre Ingeniero de Datos, Cientifico de Datos y Analista de Datos", img: "DiferenciaID-CD-AD.PNG", desc: "Desglose de roles: desde la creación de tuberías de datos hasta la creación de modelos y la interpretación de resultados." },
    { titulo: "Procesamiento de Lenguaje Natural", img: "ProcesamientoLenguajeNatural.PNG", desc: "Campo de la IA que permite a las máquinas comprender, interpretar y generar lenguaje humano de manera coherente." },
    { titulo: "Visión Artificial", img: "VisionArtificial.PNG", desc: "Tecnología que permite a las computadoras obtener información significativa a partir de imágenes digitales y videos." },
    { titulo: "Gobierno de Datos", img: "GobiernoDeDatos.PNG", desc: "Ejercicio de autoridad y control sobre la gestión de activos de datos para asegurar su disponibilidad y seguridad." },
    { titulo: "Redes Neuronales", img: "RedesNeuronales.PNG", desc: "Sistemas computacionales inspirados en la estructura biológica del cerebro para reconocer patrones complejos." },
    { titulo: "Machine Learning y los diferentes tipos de aprendizaje", img: "MachineLearningYTipos.PNG", desc: "Visión general de las metodologías supervisadas, no supervisadas, semi-supervisadas y por refuerzo." },
    { titulo: "Ciencia de Datos", img: "CienciaDeDatos.PNG", desc: "Disciplina interdisciplinaria que utiliza métodos científicos para extraer conocimiento y valor a partir de datos estructurados." },
    { titulo: "Cloud Computing", img: "CloudComputing.PNG", desc: "Entrega de servicios de computación a través de internet, permitiendo escalabilidad masiva para aplicaciones de IA." },
    { titulo: "Inteligencia de Negocios", img: "BI.PNG", desc: "Uso de estrategias y tecnologías para el análisis de datos de negocios con el fin de proporcionar vistas históricas y predictivas." },
    { titulo: "Big Data", img: "BigData.PNG", desc: "Gestión de conjuntos de datos tan voluminosos y complejos que requieren software de procesamiento especializado." },
    { titulo: "Inteligencia Artificial", img: "InteligenciaArtificial.PNG", desc: "Simulación de procesos de inteligencia humana por parte de sistemas informáticos, incluyendo aprendizaje y razonamiento." },
    { titulo: "Machine Learning", img: "MachineLearning.PNG", desc: "Subcampo de la IA enfocado en el desarrollo de técnicas que permiten a las computadoras aprender y mejorar por sí mismas." }
];

// 2. Lógica de Navegación (SPA Style)
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.page-section');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const target = link.getAttribute('data-target');
        
        // Actualizar UI de navegación
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Cambiar sección
        sections.forEach(sec => {
            sec.classList.remove('active');
            if(sec.id === target) sec.classList.add('active');
        });
    });
});

// 3. Renderizado y Filtrado de Conceptos
const cardsGrid = document.getElementById('cardsGrid');
const searchInput = document.getElementById('conceptSearch');

function renderCards(filter = "") {
    cardsGrid.innerHTML = "";
    const filtered = conceptos.filter(c => 
        c.titulo.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(c => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img-container">
                <img src="IMG/${c.img}" alt="${c.titulo}">
            </div>
            <h3>${c.titulo}</h3>
            <p>${c.desc}</p>
        `;
        cardsGrid.appendChild(card);
    });
}

// Evento de búsqueda en tiempo real
searchInput.addEventListener('input', (e) => {
    renderCards(e.target.value);
});

// Inicializar
renderCards();