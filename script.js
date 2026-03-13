// --- LÓGICA DO BOTÃO MOSTRAR MAIS ---
const btnGaleria = document.getElementById('btn-galeria');

if (btnGaleria) {
    btnGaleria.addEventListener('click', () => {
        // Seleciona apenas as fotos da galeria que podem ser escondidas
        const fotosGaleria = document.querySelectorAll('.screenshot');
        
        fotosGaleria.forEach((foto, index) => {
            if (index > 0) { // Mantém a primeira visível e alterna as outras
                foto.classList.toggle('hidden');
            }
        });

        // Alterna o texto do botão
        btnGaleria.innerText = btnGaleria.innerText === "Mostrar Mais" ? "Mostrar Menos" : "Mostrar Mais";
    });
}

// --- LÓGICA DO LIGHTBOX ---
const lightbox = document.getElementById('lightbox');
const imgAmpliada = document.getElementById('img-ampliada');
const fechar = document.querySelector('.fechar');
const imagens = document.querySelectorAll('.screenshot');

imagens.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = "block";
        imgAmpliada.src = img.src;
    });
});

fechar.onclick = () => lightbox.style.display = "none";
lightbox.onclick = (e) => { if(e.target === lightbox) lightbox.style.display = "none"; };