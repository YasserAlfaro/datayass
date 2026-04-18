// Yass, aquí defines tus noticias y las URLs de las imágenes que quieras usar.
// Puedes usar imágenes de Unsplash, o subir las tuyas a la carpeta del proyecto.
const noticias = [
    {
        titulo: "El auge de los Agentes Autónomos",
        resumen: "Sistemas capaces de ejecutar tareas completas de ingeniería sin intervención humana continua.",
        fecha: "17 Abr, 2026",
        imagenUrl: "https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=600&auto=format&fit=crop"
    },
    {
        titulo: "Modelos SLM en C#",
        resumen: "Implementación de Small Language Models locales en entornos empresariales usando .NET.",
        fecha: "15 Abr, 2026",
        imagenUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaf4?q=80&w=600&auto=format&fit=crop"
    },
    {
        titulo: "Visualización de Datos con Python",
        resumen: "Integración de bibliotecas avanzadas de gráficos en tiempo real para análisis predictivo.",
        fecha: "10 Abr, 2026",
        imagenUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
    }
];

function cargarNoticias() {
    const container = document.getElementById('news-container');
    
    noticias.forEach(item => {
        // Crear el elemento tarjeta
        const card = document.createElement('div');
        card.className = 'card';
        
        // Estructura HTML interna de la tarjeta (incluyendo imagen)
        card.innerHTML = `
            <div class="card-image-container">
                <img src="${item.imagenUrl}" alt="${item.titulo}" class="card-img">
                <div class="image-overlay"></div>
            </div>
            <div class="card-content">
                <span class="card-date">// ${item.fecha}</span>
                <h3>${item.titulo}</h3>
                <p>${item.resumen}</p>
                <a href="#" class="card-link">ACCEDER_REGISTRO →</a>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarNoticias);