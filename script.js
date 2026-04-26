// 1. Data de los Conceptos
const conceptosData = [
    { id: 1, titulo: "Álgebra Lineal", img: "AlgebraLineal.PNG", descripcion: "Rama fundamental de las matemáticas que estudia vectores y matrices, esencial para el cálculo de pesos en redes neuronales." },
    { id: 2, titulo: "DevOps", img: "DevOps.PNG", descripcion: "Cultura y conjunto de prácticas que combinan el desarrollo de software y las operaciones de TI para acortar el ciclo de vida del desarrollo." },
    { id: 3, titulo: "CiberSeguridad", img: "CyberSeguridadIA.PNG", descripcion: "Protección de sistemas y datos mediante el uso de algoritmos avanzados de IA para detectar amenazas en tiempo real." },
    { id: 4, titulo: "Procesadores y la Importancia en la IA", img: "ProcesadoresIA.PNG", descripcion: "Análisis de cómo las GPUs y TPUs aceleran el procesamiento paralelo necesario para entrenar modelos de aprendizaje profundo." },
    { id: 5, titulo: "Data StoryTelling", img: "DataStoryTelling.PNG", descripcion: "El arte de comunicar insights de datos mediante narrativas visuales y contextuales que facilitan la toma de decisiones." },
    { id: 6, titulo: "Calidad de Datos", img: "CalidadDeDatos.PNG", descripcion: "Proceso de asegurar que los datos sean precisos, completos y confiables antes de ser utilizados en modelos analíticos." },
    { id: 7, titulo: "Metadatos", img: "MetaDatos.PNG", descripcion: "Información estructurada que describe, explica y localiza los datos fuente, permitiendo una gestión eficiente de la información." },
    { id: 8, titulo: "Datos Maestros", img: "DatosMaestros.PNG", descripcion: "Conjunto de datos únicos y consistentes que representan las entidades clave de una organización como clientes o productos." },
    { id: 9, titulo: "Datawarehouse", img: "DataWareHouse.PNG", descripcion: "Sistema de almacenamiento centralizado diseñado para el análisis y reporte de grandes volúmenes de datos históricos." },
    { id: 10, titulo: "Arquitectura de Datos", img: "ArquitecturaDeDatos.PNG", descripcion: "Diseño de estructuras y flujos que definen cómo se recolectan, integran y gestionan los activos de datos en una empresa." },
    { id: 11, titulo: "Diferencia entre Gobierno de Datos y Gobierno de IA", img: "DiferenciaEntreGDyGI.PNG", descripcion: "Estudio comparativo entre la gestión normativa del dato crudo frente a la regulación de los modelos y algoritmos de IA." },
    { id: 12, titulo: "Gobierno de Inteligencia Artificial", img: "GobiernoIA.PNG", descripcion: "Marco de políticas y estándares éticos destinados a garantizar el uso responsable y transparente de los sistemas autónomos." },
    { id: 13, titulo: "Principales Algoritmos en Aprendizaje por Refuerzo", img: "PrincipalesAlgoritmosAPR.PNG", descripcion: "Exploración de técnicas como Q-Learning y Policy Gradients donde los agentes aprenden mediante recompensas y castigos." },
    { id: 14, titulo: "Principales Algoritmos en Aprendizaje No Supervisado", img: "PrincipalesAlgoritmosANS.PNG", descripcion: "Métodos como K-Means y PCA que encuentran patrones ocultos en datos que no tienen etiquetas previas." },
    { id: 15, titulo: "Principales Algoritmos en Aprendizaje Supervisado", img: "PrincipalesAlgoritmosAS.PNG", descripcion: "Modelos entrenados con datos etiquetados, incluyendo Random Forest y Support Vector Machines para clasificación y regresión." },
    { id: 16, titulo: "Regresión Lineal en Aprendizaje Supervisado", img: "RegresionLineal.PNG", descripcion: "Algoritmo estadístico fundamental utilizado para predecir valores numéricos continuos basándose en la relación de variables." },
    { id: 17, titulo: "Agentes de IA", img: "AgentesIA.PNG", descripcion: "Entidades autónomas capaces de percibir su entorno y ejecutar acciones para alcanzar objetivos específicos sin intervención humana." },
    { id: 18, titulo: "Diferencias entre Ingeniero de Datos, Cientifico de Datos y Analista de Datos", img: "DiferenciaID-CD-AD.PNG", descripcion: "Desglose de roles: desde la creación de tuberías de datos hasta la creación de modelos y la interpretación de resultados." },
    { id: 19, titulo: "Procesamiento de Lenguaje Natural", img: "ProcesamientoLenguajeNatural.PNG", descripcion: "Campo de la IA que permite a las máquinas comprender, interpretar y generar lenguaje humano de manera coherente." },
    { id: 20, titulo: "Visión Artificial", img: "VisionArtificial.PNG", descripcion: "Tecnología que permite a las computadoras obtener información significativa a partir de imágenes digitales y videos." },
    { id: 21, titulo: "Gobierno de Datos", img: "GobiernoDeDatos.PNG", descripcion: "Ejercicio de autoridad y control sobre la gestión de activos de datos para asegurar su disponibilidad y seguridad." },
    { id: 22, titulo: "Redes Neuronales", img: "RedesNeuronales.PNG", descripcion: "Sistemas computacionales inspirados en la estructura biológica del cerebro para reconocer patrones complejos." },
    { id: 23, titulo: "Machine Learning y los diferentes tipos de aprendizaje", img: "MachineLearningYTipos.PNG", descripcion: "Visión general de las metodologías supervisadas, no supervisadas, semi-supervisadas y por refuerzo." },
    { id: 24, titulo: "Ciencia de Datos", img: "CienciaDeDatos.PNG", descripcion: "Disciplina interdisciplinaria que utiliza métodos científicos para extraer conocimiento y valor a partir de datos estructurados." },
    { id: 25, titulo: "Cloud Computing", img: "CloudComputing.PNG", descripcion: "Entrega de servicios de computación a través de internet, permitiendo escalabilidad masiva para aplicaciones de IA." },
    { id: 26, titulo: "Inteligencia de Negocios", img: "BI.PNG", descripcion: "Uso de estrategias y tecnologías para el análisis de datos de negocios con el fin de proporcionar vistas históricas y predictivas." },
    { id: 27, titulo: "Big Data", img: "BigData.PNG", descripcion: "Gestión de conjuntos de datos tan voluminosos y complejos que requieren software de procesamiento especializado." },
    { id: 28, titulo: "Inteligencia Artificial", img: "InteligenciaArtificial.PNG", descripcion: "Simulación de procesos de inteligencia humana por parte de sistemas informáticos, incluyendo aprendizaje y razonamiento." },
    { id: 29, titulo: "Machine Learning", img: "MachineLearning.PNG", descripcion: "Subcampo de la IA enfocado en el desarrollo de técnicas que permiten a las computadoras aprender y mejorar por sí mismas." }
];

// 2. NAVEGACIÓN SPA
function navigateTo(section) {
    const container = document.getElementById('app-container');
    
    switch(section) {
        case 'inicio':
            container.innerHTML = `
					<section class="inicio-container">
						<h1 class="glow-text">Bienvenido a DataYass</h1>
						
						<p class="intro-p">
							Hola, bienvenido(a). Este sitio es la base para tu información principal sobre el ecosistema de IA. 
							En un entorno donde la tecnología avanza a ritmos exponenciales, **DataYass** nace como un faro 
							de conocimiento diseñado para aprender sobre Inteligencia Artificial, transformando 
							conceptos complejos en experiencias visuales comprensibles y potentes.
						</p>

						<p class="intro-p">
							El aprendizaje no debe ser una barrera, sino un puente. Por ello, el 
							enfoque se centra en la **infografía y la narrativa visual**. La IA no es solo 
							código y matemáticas, sino una herramienta de creación que se comprende mejor cuando se puede 
							visualizar sus procesos, estructuras y el impacto real que genera en nuestra sociedad.
						</p>

						<p class="intro-p">
							Cada mente es un universo distinto. En la teoría de las 
							**Inteligencias Múltiples**, este espacio pretende conectar diferentes formas 
							de procesar la información. Ya sea que tu fortaleza sea lógica, visual o espacial, aquí 
							encontrarás recursos adaptados a tu estilo, permitiéndote absorber el conocimiento de la 
							manera más natural y efectiva para ti.
						</p>

						<p class="intro-p">
							Explora las secciones de Conceptos y Aprendizaje. Navega a través de 
							nuestro catálogo de conocimientos, mantente al día con las noticias del sector y descubre 
							que dominar la Inteligencia Artificial está al alcance de tu curiosidad. Estás en el lugar 
							correcto para evolucionar tu visión tecnológica.
						</p>
					</section>
				`;
            break;
		case 'noticias':
			container.innerHTML = `
				<section class="noticias-container">
					<h1 class="glow-text">Noticias Destacadas de la Semana</h1>
					<div class="news-grid">
						
						<div class="news-item card">
							<div class="news-header">
								<h3>OpenAI lanza GPT-5.5: La nueva frontera del razonamiento</h3>
								<span class="news-date">25 de abril, 2026 | 01:47 PM</span>
							</div>
							<p>OpenAI ha presentado oficialmente GPT-5.5, una versión optimizada que redefine la automatización en programación y análisis de datos. Este modelo destaca por su capacidad de razonamiento profundo y una integración nativa con herramientas de ejecución de código en tiempo real, superando significativamente los benchmarks de la versión anterior.</p>
							<a href="https://www.nacion.com/tecnologia/" target="_blank" class="news-link">Leer fuente oficial</a>
						</div>

						<div class="news-item card">
							<div class="news-header">
								<h3>Alphabet invierte $10,000 millones en Anthropic</h3>
								<span class="news-date">24 de abril, 2026 | 01:42 PM</span>
							</div>
							<p>Google fortalece su ecosistema de IA con una inversión masiva en Anthropic, valorando a la empresa en 350,000 millones de dólares. Este movimiento estratégico busca integrar las capacidades de Claude en la infraestructura de Google Cloud, intensificando la competencia directa contra la alianza Microsoft-OpenAI.</p>
							<a href="https://elpais.com/noticias/inteligencia-artificial/" target="_blank" class="news-link">Leer fuente oficial</a>
						</div>

						<div class="news-item card">
							<div class="news-header">
								<h3>Costa Rica: Alianza entre Liberty y Starlink para conectividad total</h3>
								<span class="news-date">20 de abril, 2026 | 08:00 AM</span>
							</div>
							<p>En un hito para el país, Liberty y Starlink firmaron un acuerdo para ofrecer conectividad satelital móvil en todo el territorio nacional. Esta iniciativa busca eliminar la brecha digital en zonas rurales, permitiendo que proyectos de IA y educación tecnológica lleguen a cualquier rincón de Costa Rica.</p>
							<a href="https://adiariocr.com/tecnologia/" target="_blank" class="news-link">Leer fuente oficial</a>
						</div>

						<div class="news-item card">
							<div class="news-header">
								<h3>ChatGPT Images 2.0: Generación visual con búsqueda web activa</h3>
								<span class="news-date">24 de abril, 2026 | 09:20 AM</span>
							</div>
							<p>El nuevo modelo de generación de imágenes de OpenAI ahora permite verificar hechos mediante búsqueda web antes de renderizar, asegurando coherencia visual en secuencias de hasta ocho piezas. Esta herramienta promete revolucionar el Data Storytelling al permitir visualizaciones precisas basadas en datos actuales.</p>
							<a href="https://www.nacion.com/tecnologia/" target="_blank" class="news-link">Leer fuente oficial</a>
						</div>

						<div class="news-item card">
							<div class="news-header">
								<h3>Nvidia alcanza valoración histórica impulsada por ecosistema IA</h3>
								<span class="news-date">21 de abril, 2026 | 11:15 PM</span>
							</div>
							<p>La demanda de chips para centros de datos de IA ha llevado a Nvidia a rozar los 5 billones de dólares en capitalización bursátil. El éxito de sus socios como TSMC y Foxconn refuerza el dominio de Jensen Huang en el suministro de hardware crítico para la inteligencia artificial generativa global.</p>
							<a href="https://elpais.com/noticias/inteligencia-artificial/" target="_blank" class="news-link">Leer fuente oficial</a>
						</div>

						<div class="news-item card">
							<div class="news-header">
								<h3>Nuevo chip memristor promete IA con consumo energético ultra bajo</h3>
								<span class="news-date">25 de abril, 2026 | 01:16 PM</span>
							</div>
							<p>Investigadores han desarrollado un chip basado en óxido de hafnio que imita las conexiones neuronales del cerebro humano. Este avance tecnológico podría reducir el gasto energético de los modelos de IA en un 90%, permitiendo ejecutar modelos potentes directamente en dispositivos móviles sin depender de la nube.</p>
							<a href="https://www.nacion.com/tecnologia/" target="_blank" class="news-link">Leer fuente oficial</a>
						</div>

						<div class="news-item card">
							<div class="news-header">
								<h3>Liderazgo de Gemini 3.1 Pro en los nuevos Leaderboards de IA</h3>
								<span class="news-date">26 de abril, 2026 | 09:49 AM</span>
							</div>
							<p>Google Gemini 3.1 Pro se ha posicionado en el primer lugar del ranking global de modelos de lenguaje de esta semana, destacando especialmente en tareas de codificación y razonamiento lógico-matemático, superando ligeramente a sus competidores directos Claude 4.7 y GPT-5.4.</p>
							<a href="https://llm-stats.com/" target="_blank" class="news-link">Leer fuente oficial</a>
						</div>

						<div class="news-item card">
							<div class="news-header">
								<h3>Meta expande controles parentales para interacciones con IA</h3>
								<span class="news-date">25 de abril, 2026 | 12:23 PM</span>
							</div>
							<p>Con el auge de los acompañantes virtuales, Meta ha lanzado nuevas herramientas en Instagram y Facebook que permiten a los padres supervisar las categorías de conversación que los menores mantienen con inteligencias artificiales, priorizando la seguridad y el bienestar digital.</p>
							<a href="https://www.nacion.com/tecnologia/" target="_blank" class="news-link">Leer fuente oficial</a>
						</div>

						<div class="news-item card">
							<div class="news-header">
								<h3>Vast AI OS: El primer sistema operativo diseñado para IA</h3>
								<span class="news-date">24 de abril, 2026 | 10:00 AM</span>
							</div>
							<p>Se ha anunciado el lanzamiento de Vast AI OS, una plataforma diseñada desde cero para unificar almacenamiento, cómputo y bases de datos en un solo sistema inteligente. A diferencia de los SO tradicionales, este optimiza los recursos específicamente para máquinas de pensamiento y agentes autónomos.</p>
							<a href="https://radicaldatascience.wordpress.com/" target="_blank" class="news-link">Leer fuente oficial</a>
						</div>

						<div class="news-item card">
							<div class="news-header">
								<h3>Campeones costarricenses destacan en programa de IA en Corea del Sur</h3>
								<span class="news-date">23 de abril, 2026 | 04:30 PM</span>
							</div>
							<p>Un grupo de estudiantes y profesionales costarricenses representó al país en un prestigioso programa internacional de IA en Corea del Sur. Este hito subraya el talento nacional y la importancia de seguir fomentando la educación en ciencia de datos y redes neuronales en nuestras universidades.</p>
							<a href="https://elmundo.cr/cienciaytecnologia/" target="_blank" class="news-link">Leer fuente oficial</a>
						</div>

					</div>
				</section>
			`;
			break;
		case 'aprendizaje':
			container.innerHTML = `
				<section class="aprendizaje-container">
					<h1 class="glow-text">Ruta de Certificaciones</h1>
					<p class="intro-p">Contenido educativo diseñado para ingenieros y entusiastas de los datos que buscan validar sus conocimientos en la nube e IA.</p>
					
					<div class="certificaciones-grid">
						<div class="cert-card glass">
							<div class="cert-vendor">Microsoft Azure</div>
							<h3>AZ-900: Aspectos básicos de Azure</h3>
							<p>Ideal para profesionales que buscan demostrar conocimientos fundamentales de los servicios en la nube de Azure, seguridad, privacidad y cumplimiento. Es el punto de partida perfecto para cualquier rol técnico.</p>
							<a href="https://learn.microsoft.com/es-es/credentials/certifications/azure-fundamentals/" target="_blank" class="news-link">Más información</a>
						</div>

						<div class="cert-card glass">
							<div class="cert-vendor">Microsoft Azure</div>
							<h3>AI-901: Aspectos básicos de la IA (Beta)</h3>
							<p>Esta certificación valida los conocimientos fundamentales sobre los conceptos de Inteligencia Artificial y Machine Learning, específicamente cómo se implementan dentro del ecosistema de Microsoft Azure.</p>
							<a href="https://learn.microsoft.com/es-es/credentials/certifications/azure-ai-fundamentals/" target="_blank" class="news-link">Más información</a>
						</div>

						<div class="cert-card glass">
							<div class="cert-vendor">Amazon Web Services</div>
							<h3>AWS Certified Cloud Practitioner</h3>
							<p>Proporciona una visión global de la plataforma AWS, cubriendo servicios básicos, seguridad, arquitectura y precios. Es esencial para validar una comprensión general de la nube de Amazon.</p>
							<a href="https://aws.amazon.com/es/certification/certified-cloud-practitioner/" target="_blank" class="news-link">Más información</a>
						</div>

						<div class="cert-card glass">
							<div class="cert-vendor">Amazon Web Services</div>
							<h3>AWS Certified AI Practitioner</h3>
							<p>Diseñada para demostrar fluidez en conceptos de IA, aprendizaje automático y IA generativa. Se enfoca en identificar casos de uso y seleccionar los servicios de AWS adecuados para soluciones inteligentes.</p>
							<a href="https://aws.amazon.com/es/certification/certified-ai-practitioner/" target="_blank" class="news-link">Más información</a>
						</div>

						<div class="cert-card glass">
							<div class="cert-vendor">Google Cloud</div>
							<h3>Cloud Digital Leader</h3>
							<p>Valida el conocimiento de las capacidades de los productos y servicios de Google Cloud y cómo pueden ayudar a las organizaciones. Ideal para líderes que impulsan la transformación digital.</p>
							<a href="https://cloud.google.com/learn/certification/cloud-digital-leader" target="_blank" class="news-link">Más información</a>
						</div>

						<div class="cert-card glass">
							<div class="cert-vendor">Google Cloud</div>
							<h3>Generative AI Leader</h3>
							<p>Enfocada en el liderazgo estratégico de la IA Generativa. Permite comprender cómo implementar soluciones de modelos de lenguaje (LLM) y aplicaciones generativas de manera ética y eficiente en la empresa.</p>
							<a href="https://www.cloudskillsboost.google/course_templates/599" target="_blank" class="news-link">Más información</a>
						</div>
					</div>
				</section>
			`;
			break;
		case 'acerca':
			container.innerHTML = `
				<section class="acerca-container">
					<h1 class="glow-text">Acerca de Yass</h1>
					
					<div class="perfil-layout">
						<div class="foto-columna">
							<img src="Files/Foto.PNG" alt="Yasser Alfaro" class="foto-perfil">
						</div>

						<div class="info-columna">
							<p class="intro-p">
								Mi nombre es **Yasser Alfaro**, soy de Costa Rica. Soy el creador de este sitio. 
								Ingeniero en Sistemas, me apasiona los temas de tecnologías emergentes. Con más de 25 años de experiencia en TI.
							</p>
							
							<ul class="destacados-list">
								<li><strong>Certificaciones:</strong> AWS, Microsoft (x4), Python, entre otros.</li>
								<li><strong>Especialidades:</strong> Big Data, Ciberseguridad e Inteligencia Artificial.</li>
								<li><strong>Roles Actuales:</strong> Full Stack Developer y Profesor Universitario.</li>
							</ul>

							<p class="intro-p">
								Me gusta mucho leer. Soy del concepto que debemos de estar aprendiendo continuamente y que cada persona tiene su forma de aprender.
							</p>
							
							<div class="download-container">
								<p class="intro-p">Si quieres ver más, descarga mi 
									<a href="Files/CV_Yasser_AlfaroV3.pdf" target="_blank" download class="cv-link">
										CV <span class="download-icon">📥</span>
									</a>
								</p>
							</div>
							
							
							<div class="social-container">
								<p class="intro-p">Sígueme en TikTok para más contenido sobre IA: 
									<a href="https://www.tiktok.com/@datayass?lang=es" target="_blank" class="tiktok-link">
										@datayass <span class="tiktok-icon">📱</span>
									</a>
								</p>
							</div>
							
						</div>
					</div>
				</section>
			`;
			break;
        case 'conceptos':
            renderConceptosPage();
            break;
    }
}

// 3. RENDERIZADO DE CONCEPTOS Y FILTRO
function renderConceptosPage() {
    const container = document.getElementById('app-container');
    container.innerHTML = `
        <div class="conceptos-wrapper">
            <aside class="filter-sidebar">
                <h3>Búsqueda</h3>
                <input type="text" id="searchBox" class="search-input" placeholder="Buscar concepto..." onkeyup="filterCards()">
            </aside>
            <div id="cardsGrid" class="cards-grid"></div>
        </div>
    `;
    displayCards(conceptosData);
}

function displayCards(data) {
    const grid = document.getElementById('cardsGrid');
    grid.innerHTML = data.map(item => `
        <div class="card" onclick="openModal('${item.titulo}', 'IMG/${item.img}', '${item.descripcion}')">
            <img src="IMG/${item.img}" alt="${item.titulo}">
            <h3>${item.titulo}</h3>
            <p>${item.descripcion.substring(0, 100)}...</p>
        </div>
    `).join('');
}

function filterCards() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    const filtered = conceptosData.filter(c => c.titulo.toLowerCase().includes(query));
    displayCards(filtered);
}

// 4. MODAL (POPUP)
const modal = document.getElementById('modal-overlay');
function openModal(title, img, desc) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-img').src = img;
    document.getElementById('modal-desc').innerText = desc;
    modal.style.display = 'flex';
}

document.querySelector('.close-modal').onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; }

// Carga inicial
window.onload = () => navigateTo('inicio');