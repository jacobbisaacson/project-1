console.log("project 1");


class Mole {
    constructor() {

    }
}



const game = {


        intervalID: null,
        timeElapsed: 0,

        startTimer: function() {
            this.printTimer()
            this.intervalID = setInterval(() => {
                this.timeElapsed++
                this.printTimer()
            	this.printValues()
            }, 1000)
        },

        stopTimer: function() {
            clearInterval(this.intervalID)
        },

        printTimer: function() {
            const seconds = this.timeElapsed
            let mm = Math.floor(seconds / 60)
            let ss = seconds - (mm * 60)
            if (ss < 10) {
                ss = "0" + ss
            }
            console.log(`${mm}:${ss}`);
            this.printValues()
        },

        printValues: function() {
        	const timer = $('#timer')
        	timer.text($`{this.timeElapsed}`)
        }

        // start: function() {
        //     score = 0
        //     scoreBoard.textContent = score
        //     timesOut = false
        //     scoreBoard.classList.remove('add')
        //     startScreen.classList.add('hide')
        //     startTimer()
        //     // showMole()
        // }

// 	showMole: function() {
// 	// mole image appears in random box in the container
// 	// has to have it's own separate timer for how long the mole image should stay visable in it's current spot
// 	// needs to disappear when event (click) happens on it (target)
// 	// if user hits (clicks on the mole image), then it should just show another mole, and continue to until
// 	// the player's turn timer expires (30 seconds)
// 	// needs to call next function -- should be "change turns" or something
// 	},

// 	nextPlayersTurn: function() {
// 	// calls showMole again... 
// 	// can't do alerts, so need to figure out how to change turns without it
// 	// should run the same way as the last turn
// 	},

// 	createSquares: function() {

// 	},

// 	printSquares: function() {

// 	},

// 	checkValidWack: function() {

// 	},

	
}


  // listeners   ////


// moles.forEach(mole => {
//   mole.addEventListener('click', wack);
// });

// btnStart.addEventListener('click', start);





// mole.addEventListener('click', ___) // or on.('click', event)










