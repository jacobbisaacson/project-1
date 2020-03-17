console.log("project 1");


class Mole {
    constructor() {
    	const colors = ['red', 'orange', 'brown']
    	const randNum = Math.floor(Math.random() * colors.length)
    	this.color = colors[randNum]
    	this.clicked = false
    }
}

const game = {
		moles: [],
		scoreBoard: document.querySelector('.score'),
        intervalID: null,
        timeElapsed: 0,
        timesUp: false,
        score: 0,

        // startTimer: function() {
        //     this.printTimer()
        //     this.intervalID = setInterval(() => {
        //         this.timeElapsed++
        //         this.printTimer()
        //     	this.printValues()
        //     }, 1000)
        // },

        // stopTimer: function() {
        //     clearInterval(this.intervalID)
        // },

        // printTimer: function() {
        //     const seconds = this.timeElapsed
        //     let mm = Math.floor(seconds / 60)
        //     let ss = seconds - (mm * 60)
        //     if (ss < 10) {
        //         ss = "0" + ss
        //     }
        //     console.log(`${mm}:${ss}`);
        //     this.printValues()
        // },

        // printValues: function() {
        // 	const timer = $('#timer')
        // 	timer.text($`{timeElapsed}`)
        // },

        // wack: function(event) {
        // 	if(!timesUp) {
        // 		scoreBoard.classList.add('add')
        // 		score++
        // 		scoreBoard.textContent = score
        // 	}
        // },

        // checkValidWack: function($mole) {
        // 	const indexOfMoleClicked = $mole.data('whichMole')
        // 	const mole = this.moles[indexOfMoleClicked]
        // 	if(this.mole === )
        // },

        createMoles: function() {
        	for(let i = 0; i < 12; i++) {
        		const ml = new Mole()
        		this.moles.push(ml)
        	}
        	this.printMoles()
        },

        printMoles: function() {
        	const $molesContainer = $('.moles')
        	for(let i = 0; i < this.moles.length; i++) {
        		const $div = $(`div data-which-mole="${i}"></div>`).addClass('mole')
        		$div.css('background-color', this.moles[i].color)
        		$molesContainer.append($div)
        	}
        },

        start: function() {
        	scoreBoard.textContent = this.score
        	scoreBoard.classList.remove('add')
        }
    }



// $('.moles').on('click', (event) => {
// const $moleClicked = $(event.target)

// game.checkValidWack($moleClicked)

// })

// this.moles.forEach(mole => {
// 	mole.addEventListener('click', wack)
// })


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


  // listeners   ////


// moles.forEach(mole => {
//   mole.addEventListener('click', wack);
// });

// btnStart.addEventListener('click', start);





// mole.addEventListener('click', ___) // or on.('click', event)










