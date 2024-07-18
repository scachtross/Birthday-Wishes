document.addEventListener('DOMContentLoaded', function() {
    const icing = document.getElementById('icing');
    const colors = ['#ffcc00', '#ff0000', '#00ff00', '#0000ff', '#db7bd5', '#7bdbdb', '#5c00fa', '#faff00']; // add more colors if you'd like
    const icingWidth = icing.offsetWidth;
    const icingHeight = icing.offsetHeight;

    function createToppings(numToppings) {
        const spread = numToppings <= 200 ? 20 : 15;

        for (let i = 0; i < numToppings; i++) {
            const topping = document.createElement('div');
            topping.classList.add('topping');
            topping.style.width = '20px';
            topping.style.height = '20px';
            topping.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            topping.style.borderRadius = '50%';
            topping.style.position = 'absolute';

            const spreadX = Math.random() * spread;
            const spreadY = Math.random() * spread;
            topping.style.top = `${Math.random() * (icingHeight - 20 - spreadY) + spreadY}px`;
            topping.style.left = `${Math.random() * (icingWidth - 20 - spreadX) + spreadX}px`;
            icing.appendChild(topping);
        }
    }

    createToppings(20); // change this value to control the number of toppings
});
