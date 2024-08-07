function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', function () {
    const selectElementBoss = document.getElementById('boss');

    selectElementBoss.addEventListener('change', async function () {
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

    const inputElementFamily = document.getElementById('family');

    inputElementFamily.addEventListener('input', function () {
        const selectedOption = Number(inputElementFamily.value);

        // Agragar Validación de datos negativos y mayores a 8 y menores a 0

        const members = ['.member1', '.member2', '.member3', '.member4', '.member5', '.member6', '.member7', '.member8'];

        if (selectedOption == 0) {
            let elements = document.querySelectorAll('.formmember');
            elements.forEach(element => {
                element.classList.remove('mostrar');
            });
        } else {
            members.forEach((member, index) => {
                let elements = document.querySelector(member)
                if (index < selectedOption) {
                    elements.classList.add('mostrar')
                }
            });

        }
    });
});