
   // const boton = document.querySelectorAll('.button-apply-job');

    // boton.forEach((boton) => {
    //     boton.addEventListener('click', () => {
    //         boton.textContent = '¡aplicado!';
    //         boton.classList.add('is-applied');
    //         boton.style.backgroundColor = '#28a745';
    //         boton.style.color = '#fff';
           // boton.disabled = true;
   // });
     //   });


     const joblistsection = document.querySelectorAll('.jobs-list');
     if (joblistsection) {
     joblistsection.addEventListener('click', (event) => {
        const element = event.target;
        if (element.classlist.contains('button-apply-job')) {
            console.log('es el boton');

     });