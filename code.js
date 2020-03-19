    
    // Consts
    const myOnOffButton = document.querySelector('.on-off-button');
    const myCappuccinoButton = document.querySelector('.cappuccino');
    const myEspressoButton = document.querySelector('.espresso');

    const myLeftCabinet = document.querySelector('.left');
    const myRightCabinet = document.querySelector('.right');


    const myMachineMug = document.querySelector('#machine-mug');
    const myLoveMug = document.querySelector('#love');
    const myHateMug = document.querySelector('#hate');
    const myMomMug = document.querySelector('#mom');

    const myWaterIndicator = document.querySelector('.water-bar');
    const myBeanIndicator = document.querySelector('.bean-bar');
    const myMilkIndicator = document.querySelector('.milk-bar');

    const myWaterTank = document.querySelector('.mug .water');
    const myBeanTank = document.querySelector('.mug .beans');
    const myMilkTank = document.querySelector('.mug .milk');
    
    // Bar Counter function
    const barCounter = function(element) {
        return element.querySelectorAll('.second-bar').length;
    };

    // Led: Check if ingredients out
    if (barCounter(myWaterIndicator) == 0) {
        document.querySelector('#water-led').classList.add('on');   
    }
    if (barCounter(myBeanIndicator) == 0) {
        document.querySelector('#bean-led').classList.add('on');
    }
    if (barCounter(myMilkIndicator) == 0) {
        document.querySelector('#milk-led').classList.add('on');
    }

    // Coffee Machine Power
    // ON/OFF Button pushed
    
    myOnOffButton.addEventListener('click', function() {
        console.log('On/Off Button was clicked.');
        // On sign on the button and beep
        document.querySelector('.on-sign').classList.toggle('hidden');
        document.getElementById('play').play();
        // Screen on
        document.querySelector('.cappuccino').classList.toggle('screen-on');
        document.querySelector('.espresso').classList.toggle('screen-on');
        // Indicator-leds on
        document.querySelector('.water-bar').classList.toggle('non-visible');
        document.querySelector('.bean-bar').classList.toggle('non-visible');
        document.querySelector('.milk-bar').classList.toggle('non-visible');
        document.querySelector('#water-led').classList.toggle('non-visible');
        document.querySelector('#bean-led').classList.toggle('non-visible');
        document.querySelector('#milk-led').classList.toggle('non-visible');
    });

    
    // Select Buttons Pushed
    // Selecting Espresso
    myEspressoButton.addEventListener('click', function() {
        console.log('Espresso Select button was pushed')
        // If Machine ON
        if (!document.querySelector('.on-sign').classList.contains('hidden')) {
            // If enough ingredients
            if (barCounter(myWaterIndicator) > 0 && barCounter(myBeanIndicator) > 0) {
                // If NO mug in the machine
                if (myMachineMug.classList.contains('hidden')) {
                    // Showw message, do not spill coffee :)
                    document.querySelector('.liquids h3').classList.remove('hidden');
                    setTimeout(() => document.querySelector('.liquids h3').classList.add('hidden'), 2000)
                }
                // If there IS a mug in the machine
                else {
                    // Liquids into the mug for 3s
                    document.querySelector('.liquids').classList.add('liquid-coffee');
                    setTimeout(() => document.querySelector('.liquids').classList.remove('liquid-coffee'), 3000)
                    // Remove One Ingredient bar
                    myWaterIndicator.removeChild(myWaterIndicator.querySelector('.second-bar'));
                    myBeanIndicator.removeChild(myBeanIndicator.querySelector('.second-bar'));
                }    
            }
            if (barCounter(myWaterIndicator) == 0) {
                document.querySelector('#water-led').classList.add('on');
            }
            if (barCounter(myBeanIndicator) == 0) {
                document.querySelector('#bean-led').classList.add('on');
            }
        }
    });

    // Select Buttons Pushed
    // Selecting Cappuccino   
    myCappuccinoButton.addEventListener('click', function() {
        console.log('Cappuccino Select button was pushed')
        // If Machine ON
        if (!document.querySelector('.on-sign').classList.contains('hidden')) {
            // If enough ingredients
            if (barCounter(myWaterIndicator) > 0 && barCounter(myBeanIndicator) > 0 && barCounter(myMilkIndicator) > 0) {
                // If NO mug in the machine
                if (myMachineMug.classList.contains('hidden')) {
                    // Show message, do not spill coffee :)
                    document.querySelector('.liquids h3').classList.remove('hidden');
                    setTimeout(() => document.querySelector('.liquids h3').classList.add('hidden'), 2000)
                }
                // If there IS a mug in the machine
                else {
                    // Liquids into the mug for 3s
                    document.querySelector('.liquids').classList.add('liquid-coffee', 'liquid-milk');
                    setTimeout(() => document.querySelector('.liquids').classList.remove('liquid-coffee', 'liquid-milk'), 3000)
                    // Remove One Ingredient bar
                    myWaterIndicator.removeChild(myWaterIndicator.querySelector('.second-bar'));
                    myBeanIndicator.removeChild(myBeanIndicator.querySelector('.second-bar'));
                    myMilkIndicator.removeChild(myMilkIndicator.querySelector('.second-bar'));
                }
            }
            // Led: Check if ingredients out
            if (barCounter(myWaterIndicator) == 0) {
                document.querySelector('#water-led').classList.add('on');   
            }
            if (barCounter(myBeanIndicator) == 0) {
                document.querySelector('#bean-led').classList.add('on');
            }
            if (barCounter(myMilkIndicator) == 0) {
                document.querySelector('#milk-led').classList.add('on');
            }
        }
    });
    
    // Open cabinets
    // Left Cabinet
    myLeftCabinet.addEventListener('click', function() {
        document.querySelector('#door-opening-left').classList.add('hidden');
        for (i=0; i < 3; i++) {
            document.querySelectorAll('.left .shelf')[i].classList.remove('hidden');
        }
    })
    // Right Cabinet
    myRightCabinet.addEventListener('click', function() {
        document.querySelector('#door-opening-right').classList.add('hidden');
        for (i=0; i < 3; i++) {
            document.querySelectorAll('.right .shelf')[i].classList.remove('hidden');
        }
    })


    // Placing mug in the machine
    
    myLoveMug.addEventListener('click', function() {
        // If no mug in the machine
        if (myMachineMug.classList.contains('hidden')) {
        myLoveMug.classList.add('hidden');
        myMachineMug.classList.remove('hidden');
        document.querySelector('#machine-mug .love').classList.remove('hidden');
        }
    });
    
    myHateMug.addEventListener('click', function() {
        // If no mug in the Machine
        if (myMachineMug.classList.contains('hidden')) {
            myHateMug.classList.add('hidden');
            document.querySelector('#machine-mug').classList.remove('hidden');
            document.querySelector('#machine-mug .hate').classList.remove('hidden');
        }
    });

    myMomMug.addEventListener('click', function() {
        // If no mug in the Machine
        if (myMachineMug.classList.contains('hidden')) {
            myMomMug.classList.add('hidden');
            document.querySelector('#machine-mug').classList.remove('hidden');
            document.querySelector('#machine-mug .mom').classList.remove('hidden');
        }
    });

    // Removing mug from the machine
    myMachineMug.addEventListener('click', function() {
        myMachineMug.classList.add('hidden');
        document.querySelector('#machine-mug .hate').classList.add('hidden');
        document.querySelector('#machine-mug .love').classList.add('hidden');
        document.querySelector('#machine-mug .mom').classList.add('hidden');
        document.querySelector('.liquids').classList.remove('liquid-coffee');
        document.querySelector('.liquids').classList.remove('liquid-milk');
    });

     // Adding Water from the jar to the Machine
    
    myWaterTank.addEventListener('click', function() {   
        // If Water tank isn't full already add indicator-bars
        if (barCounter(myWaterIndicator) < 8) {
            // If Water Tank were empty, remove warning sign
            if (barCounter(myWaterIndicator) == 0) {
                document.querySelector('#water-led').classList.remove('on');
                }
            let newBar = document.createElement('div');
            newBar.setAttribute('class', 'second-bar');
            myWaterIndicator.appendChild(newBar);
            console.log('Water was added.');
            document.querySelector('#water-led').classList.remove('on');
        }
    });

     // Adding Beans from the jar to the Machine
    
    myBeanTank.addEventListener('click', function() {  
        // If Bean tank isn't full already add indicator-bars
        if (barCounter(myBeanIndicator) < 8) {
            // If Bean Tank were empty, remove warning sign
            if (barCounter(myBeanIndicator) == 0) {
                document.querySelector('#bean-led').classList.remove('on');
                }
            let newBar = document.createElement('div');
            newBar.setAttribute('class', 'second-bar');
            myBeanIndicator.appendChild(newBar);
            console.log('Bean was added.');
            document.querySelector('#bean-led').classList.remove('on');
        }
    });

    // Adding Milk from the jar to the Machine
    
    myMilkTank.addEventListener('click', function() {   
        // If Milk tank isn't full already add indicator-bars
        if (barCounter(myMilkIndicator) < 8) {
            // If Milk Tank were empty, remove warning sign
            if (barCounter(myMilkIndicator) == 0) {
                document.querySelector('#milk-led').classList.remove('on');
                }
            let newBar = document.createElement('div');
            newBar.setAttribute('class', 'second-bar');
            myMilkIndicator.appendChild(newBar);
            console.log('Milk was added.');
        }
    });