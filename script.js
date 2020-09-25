window.onload = function() { //using event hooking
    caseSwitching();
    function caseSwitching(){
        let desserts = 'ice-cream';
            switch(desserts){
                case 'french-toast':
                    console.log('French toast in delicious');
                    document.getElementById('dessert').innerHTML= "<img src='images/french-toast.jpg'>";

				case 'ice-cream':
					console.log('You could never go wrong with ice cream');
					document.getElementById('dessert').innerHTML = "<img src='images/ice-cream.jpg'>";


			}
    };
}
