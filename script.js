window.onload = function() { //using event hooking
    caseSwitching();
    function caseSwitching(){
        let desserts = 'ice-cream';
            switch(desserts){
                case 'french-toast':
                    console.log('French toast in delicious');
                    document.getElementById('dessert').innerHTML= "<img src='images/french-toast.jpg'>";
                    break;
                case 'ice-cream':
                    console.log('You could never go wrong with ice cream');
                    document.getElementById('dessert').innerHTML = "<img src='images/ice-cream.jpg'>";
                    break;
                case 'cookies':
                    console.log('Crunchy on the outside and soft on the inside!');
                    document.getElementById('dessert').innerHTML = "<img src='images/cookies.jpg'>";
                    break;

                case 'donuts':
                    console.log('Right out of the oven');
                    document.getElementById('dessert').innerHTML = "<img src='images/donuts.jpg'>";
                    break;

                case 'popcorn':
                    console.log('Nothing beats salted caramel popcorn!');
                    document.getElementById('dessert').innerHTML = "<img src='images/salted-caramel-popcorn.jpg'>";
                    break;

                case 'pie':
                    console.log('A slice right out of the oven, yum!');
                    document.getElementById('dessert').innerHTML = "<img src='images/pie.jpg'>";
                    break;

                case 'cake':
                    console.log('Such a beautiful, sophisticated looking cake');
                    document.getElementById('dessert').innerHTML = "<img src='images/lemon-cake.jpg'>";

            }
    };
}
