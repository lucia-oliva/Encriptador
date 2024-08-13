function showAlert() {
    const alertElement = document.querySelector('.alert');
    alertElement.classList.remove('hidden');
    alertElement.classList.remove('display-none');
}

function hideAlert() {
    const alertElement = document.querySelector('.alert');
    alertElement.classList.add('hidden');

    // Usa un timeout para agregar 'display: none' después de que la transición haya terminado
    setTimeout(() => {
        alertElement.classList.add('display-none');
    }, 300); // Debe coincidir con la duración de la transición
}

// Ejemplo de uso
showAlert(); // Muestra la alerta
setTimeout(() => hideAlert(), 3000); // Oculta la alerta después de 3 segundos