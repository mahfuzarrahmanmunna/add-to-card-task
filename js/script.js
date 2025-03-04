let ringButtons = document.querySelectorAll('.ring-button');
// for (let i = 0; i <= ringButtons.length; i++) {
//     console.log(ringButtons[i])
// }

// for (let m = 0; m < ringButtons.length; m++) {
//     const button = ringButtons[m];
//     button.addEventListener('click', (event) => {
//         alert()
//         for (let i = 0; i < ringButtons.length; i++) {
//             ringButtons[i].classList.remove('border-purple-600')
//             // ringButtons[i].classList.add('border-white')
//         }
//         event.target.classList.add('border-purple-600')
//     })
// }

for (let button of ringButtons) {
    button.addEventListener('click', (event) => {
        let btnColor = event.target.id.replace('-color', '');
        console.log(btnColor)

        for (let color of ringButtons) {
            color.classList.remove('border-purple-600')
            color.classList.add('border-gray-300')
        }
        event.target.classList.add('border-purple-600');
        event.target.classList.remove('border-gray-300');


        const productImage = document.getElementById('product-image');
        productImage.src = `./images/${btnColor}.png`
    });


}

function selectWristSize(size) {
    const sizes = ['S', 'M', 'L', 'XL'];
    for (let i = 0; i < sizes.length; i++) {
        const button = document.getElementById('size-' + sizes[i]);
        // console.log(button)
        const element = sizes[i];
        if (element === size) {
            button.classList.add('border-purple-600')
        } else {
            button.classList.remove('border-purple-600')
        }
    }
}