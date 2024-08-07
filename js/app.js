function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function desvanecer() {
    const elemento = document.querySelector('.miembro1');
    elemento.classList.add('mostrar');
}

document.addEventListener('DOMContentLoaded', function() {
    const selectElementBoss = document.getElementById('boss');

    selectElementBoss.addEventListener('change', async function() {
        const selectedOption = selectElementBoss.options[selectElementBoss.selectedIndex].value;
        if (selectedOption == 1) {
            document.querySelector('.carga').classList.remove('mostrar');
            await sleep(1000)
            document.querySelector('.familia').classList.add('mostrar');
        } else {
            document.querySelector('.familia').classList.remove('mostrar');
            await sleep(1000)
            document.querySelector('.carga').classList.add('mostrar');
        }
    });
});