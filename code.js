    
    // Constants
    // Buttons
    const myOnOffButton = document.querySelector('.on-off-button');
    const myCappuccinoButton = document.querySelector('.cappuccino');
    const myEspressoButton = document.querySelector('.espresso');
    const myStartButton = document.querySelector('.start-button');
    // Objects
    const myLeftCabinet = document.querySelector('.left');
    const myRightCabinet = document.querySelector('.right');
    const myDishwasher = document.querySelector('.dishwasher');
    // Mugs
    const myMachineMug = document.querySelector('#machine-mug');
    const myLoveMug = document.querySelector('#love');
    const myHateMug = document.querySelector('#hate');
    const myMomMug = document.querySelector('#mom');
    const myCodeMug = document.querySelector('#code');
    const mySmileMug = document.querySelector('#smile');
    const myMagicMug = document.querySelector('#magic');
    // Control lights
    const myWaterIndicator = document.querySelector('.water-bar');
    const myBeanIndicator = document.querySelector('.bean-bar');
    const myMilkIndicator = document.querySelector('.milk-bar');
    // Refill tanks 
    const myWaterTank = document.querySelector('.mug .water');
    const myBeanTank = document.querySelector('.mug .beans');
    const myMilkTank = document.querySelector('.mug .milk');
    // 
    const myRewards = document.querySelector('.rewards');
    const myCounterDisplay = document.querySelector('.counter-and-trophies');
    const myStarAwards = document.querySelector('.star-awards');
    // Award badges
    const myFirstAward = document.querySelector('.first-award');
    const mySecondAward = document.querySelector('.second-award');
    const myThirdAward = document.querySelector('.third-award');
    // Achievement texts
    const myFirstAchievementLabel = document.querySelector('.first-achievement');
    const mySecondAchievementLabel = document.querySelector('.second-achievement');
    const myThirdAchievementLabel = document.querySelector('.third-achievement');
    // Trophies
    const myFirstTrophy = document.querySelector('.first-trophy');
    const mySecondTrophy = document.querySelector('.second-trophy');
    const myThirdTrophy = document.querySelector('.third-trophy');
    // Stars
    const myFirstStarAward = document.querySelector('.first-star');
    const mySecondStarAward = document.querySelector('.second-star');
    const myThirdStarAward = document.querySelector('.third-star');
    // Counter for filled and used up mugs
    let myUsedUpMugCounter = 0;
    let myMugFilledCounter = 0;
    let myEspressoPortionCounter = 0;
    // Counter labels
    const myUsedUpMugLabel = document.querySelector('.counter-display .mug-count');
    const myCoffeeMadeLabel = document.querySelector('.counter-display .coffee-count');
    // Indicator for filled mugs
    let mugFilled = false;
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
        // On-sign on the button and beep
        document.querySelector('.on-sign').classList.toggle('hidden');
        document.getElementById('play-on').play();
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
                    // Show message, do not spill coffee :)
                    document.querySelector('.liquids h3').classList.remove('hidden');
                    setTimeout(() => document.querySelector('.liquids h3').classList.add('hidden'), 2000)
                }
                // If there IS a mug in the machine
                else {
                    mugFilled = true;
                    myMugFilledCounter++;
                    myEspressoPortionCounter++;
                    console.log('The mug was filled with coffee');
                    myCoffeeMadeLabel.innerHTML = `Your machine made ${myMugFilledCounter} coffee`
                    if (myMugFilledCounter == 1 ) {
                        // From now on Achievement Rewards Display visible
                        displayRewards()
                    }
                    // For the 10th coffee
                    if (myMugFilledCounter == 10) {
                        // Get badge with color and shine up animation
                        displayDoneAndShineUp(myFirstTrophy);
                    }
                    // Liquids into the mug for 2s
                    document.querySelector('.liquids').classList.add('liquid-coffee');
                    setTimeout(() => document.querySelector('.liquids').classList.remove('liquid-coffee'), 2000);
                    // If Magic mug used
                    if (!document.querySelector('#machine-mug h3.magic').classList.contains('hidden')) {
                        // Put magic label on the mug
                        // Third Achievement revealed: display counters, trophies and stars
                        doMagic()
                    }
                    // Remove One Ingredient bar
                    myWaterIndicator.removeChild(myWaterIndicator.querySelector('.second-bar'));
                    myBeanIndicator.removeChild(myBeanIndicator.querySelector('.second-bar'));
                }    
            }
            // Led: Check if ingredients out
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
        console.log('Cappuccino Select button was pushed');
        // If Machine ON
        if (!document.querySelector('.on-sign').classList.contains('hidden')) {
            // If enough ingredients
            if (barCounter(myWaterIndicator) > 0 && barCounter(myBeanIndicator) > 0 && barCounter(myMilkIndicator) > 0) {
                // If NO mug in the machine
                if (myMachineMug.classList.contains('hidden')) {
                    // Show message, do not spill coffee :)
                    document.querySelector('.liquids h3').classList.remove('hidden');
                    setTimeout(() => document.querySelector('.liquids h3').classList.add('hidden'), 2000);
                }
                // If there IS a mug in the machine
                else {
                    mugFilled = true;
                    myMugFilledCounter++;
                    console.log('The mug was filled with coffee');
                    myCoffeeMadeLabel.innerHTML = `Your machine made ${myMugFilledCounter} coffee`
                    // On first use
                    if (myMugFilledCounter == 1 ) {
                        // From now on Achievement Rewards Display visible
                        displayRewards();
                    }
                    // For the 10th coffee
                    if (myMugFilledCounter == 10) {
                        // Get badge with color and shine up animation
                        displayDoneAndShineUp(myFirstTrophy);
                    }
                    // Liquids into the mug for 2s
                    document.querySelector('.liquids').classList.add('liquid-coffee', 'liquid-milk');
                    setTimeout(() => document.querySelector('.liquids').classList.remove('liquid-coffee', 'liquid-milk'), 2000)
                    // If Magic mug used
                    if (!document.querySelector('#machine-mug h3.magic').classList.contains('hidden')) {
                        // Put magic label on the mug
                        // Third Achievement revealed: display counters, trophies and stars
                        doMagic();
                    }
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
    
    function doMagic() {
        console.log('Magic mug is used');
        // Put magic label on the mug
        document.querySelector('#machine-mug h3.magic').classList.add('hidden');
        document.querySelector('.do-magic-label').classList.remove('hidden');
        // Third Achievement revealed: display counters, trophies and stars
        myCounterDisplay.classList.remove('non-visible');
        myStarAwards.classList.remove('non-visible');
        myThirdAchievementLabel.classList.remove('hidden');
        displayDoneAndShineUp(myThirdAward);

    }

    function displayRewards() {
        // From now on Achievement Rewards Display visible
        myRewards.classList.remove('non-visible');
        // First achievement display on hover
        myFirstAchievementLabel.classList.remove('hidden');
        // Get first award badge for the first achievement
        displayDoneAndShineUp(myFirstAward);
    }

    function displayDoneAndShineUp(badge) {
        // Get badge with color and shine up animation
        badge.classList.add('done');
        badge.classList.add('shine-up');
        setTimeout(() => badge.classList.remove('shine-up'), 1000);

    }


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

    myCodeMug.addEventListener('click', function() {
        // If no mug in the Machine
        if (myMachineMug.classList.contains('hidden')) {
            myCodeMug.classList.add('hidden');
            document.querySelector('#machine-mug').classList.remove('hidden');
            document.querySelector('#machine-mug .code').classList.remove('hidden');
        }
    });

    mySmileMug.addEventListener('click', function() {
        // If no mug in the Machine
        if (myMachineMug.classList.contains('hidden')) {
            mySmileMug.classList.add('hidden');
            document.querySelector('#machine-mug').classList.remove('hidden');
            document.querySelector('#machine-mug .smile').classList.remove('hidden');
        }
    });

    myMagicMug.addEventListener('click', function() {
        // If no mug in the Machine
        if (myMachineMug.classList.contains('hidden')) {
            myMagicMug.classList.add('hidden');
            document.querySelector('#machine-mug').classList.remove('hidden');
            document.querySelector('#machine-mug .magic').classList.remove('hidden');
        }
    });

    // Removing mug from the machine
    myMachineMug.addEventListener('click', function() {
        // Take Away animation and mug off
        myMachineMug.classList.add('take-away');
        setTimeout(() => myMachineMug.classList.remove('take-away'), 1000);
        setTimeout(() => myMachineMug.classList.add('hidden'), 1000);
        myUsedUpMugCounter++;
        myUsedUpMugLabel.innerHTML = `You used up ${myUsedUpMugCounter} mugs`
        mugFilled = false;
        if (myUsedUpMugCounter == 3) {
            // Second achievement display on hover
            mySecondAchievementLabel.classList.remove('hidden');
            // Dishwasher revealed
            myDishwasher.classList.remove('hidden');
            // Get badge with color and shine up animation
            displayDoneAndShineUp(mySecondAward);
        }
        if (myUsedUpMugCounter == 12) {
            // Get badge with color and shine up animation
            displayDoneAndShineUp(mySecondTrophy);
        }
        if (myEspressoPortionCounter == 2) {
            // Get badge with color and shine up animation
            displayDoneAndShineUp(myFirstStarAward);
        }
        if (myEspressoPortionCounter == 8) {
            // Get badge with color and shine up animation
            displayDoneAndShineUp(mySecondStarAward);
        }
        // Counters, Labels and liquids off
        myEspressoPortionCounter = 0;
        document.querySelector('#machine-mug .hate').classList.add('hidden');
        document.querySelector('#machine-mug .love').classList.add('hidden');
        document.querySelector('#machine-mug .mom').classList.add('hidden');
        document.querySelector('#machine-mug .code').classList.add('hidden');
        document.querySelector('#machine-mug .smile').classList.add('hidden');
        document.querySelector('#machine-mug .magic').classList.add('hidden');
        document.querySelector('#machine-mug .do-magic-label').classList.add('hidden');
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

    // Dishwasher
    // START Button pushed
    
    myStartButton.addEventListener('click', function() {
        console.log('Dishwasher Start button was clicked.');
        // On-sign to the button
        document.querySelector('.dish-on-sign').classList.remove('hidden');
        // Water Splash sound on the machine twice 
        document.getElementById('play-start').play();
        setTimeout(() => document.getElementById('play-start').play(), 1500);
        // On-sign off
        setTimeout(() => document.querySelector('.dish-on-sign').classList.add('hidden'), 1500);
        // All mugs back to the cabinet (extra too)
        setTimeout(() => myLoveMug.classList.remove('hidden'), 2000);
        setTimeout(() => myHateMug.classList.remove('hidden'), 2000);
        setTimeout(() => myMomMug.classList.remove('hidden'), 2000);
        setTimeout(() => myCodeMug.classList.remove('hidden'), 2000);
        setTimeout(() => mySmileMug.classList.remove('hidden'), 2000);
        setTimeout(() => myMagicMug.classList.remove('hidden'), 2000);
    })