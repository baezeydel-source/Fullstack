
    const boton = document.querySelector('#boton-importante');

    boton.addEventListener('click', () => {
        boton.textContent = '¡aplicado!';
        boton.style.backgroundColor = 'green';
        boton.style.cursor = 'not-allowed';
        boton.disabled = true;
    });