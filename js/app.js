console.log("project 1");

class Mole {
    constructor() {
        const colors = ['red', 'pink']
        const randNum = Math.floor(Math.random() * colors.length)
        this.color = colors[randNum]
        this.clicked = false
    }
    setClicked() {
        this.clicked = true
    }
}

class Player {
    constructor() {
        this.score = score
        this.turn = turn

    }
}

class Hole {
    constructor() {
        const colors = ['transparent']
        this.clicked = true
    }
}


const game = {
    score1: 0,
    score2: 0,
    timeUp: false,
    moles: [],
    holes: [],
    emptyHole: [],
	intervalID: null,
	timeElapsed: 0,


    createMoles: function() {
        for (let i = 0; i < 8; i++) {
            const mo = new Mole()
            this.moles.push(mo)
            const ho = new Hole()
            this.holes.push(ho)
        }
        this.printMoles()
        this.startTimer()
    },

    printMoles: function() {
        const $molesContainer = $('.moles')
        for (let i = 0; i < this.moles.length; i++) {
            const $div = $(`<div data-which-mole="${i}"></div>`).addClass('mole')
            $div.css('background-color', this.moles[i].color)
            $molesContainer.append($div)
        }
        this.showMole()
    },

    checkValidWack: function($mole) {
        const indexOfMoleClicked = $mole.data('whichMole')
        const mole = this.moles[indexOfMoleClicked]
        if (mole.clicked === false) {
            mole.setClicked()
            $mole.css('opacity', 0) // change this to lightgreen // do
            //display messagee hit!
        } else {
            console.log("bad");
            // display message miss!
        }
    },

    randomTime: function() {
        Math.round(Math.random() * (999 - 333) + 333)
    },


    showMole: function() {
        time = this.randomTime()
    },

}

$('.moles').on('click', (event) => {
    const $moleClicked = $(event.target)
    game.checkValidWack($moleClicked)
    // makes them disappear -- so works -- need to make them smash (another image?)
    // also need to add to the score

})

$('.button').on('click', (event) => {
    const $btnStart = $(event.target)
    game.createMoles($btnStart)
    //need to make the button stop printing moles after clicked once
})



// to do's // 
// 3. get scores to add and print on hits
// 4. stop start button from printing more moles when clicked again
// 5. stop the issue with clicking on a non-mole space
// 6. MAKE MOLES APPEAR RANDOMLY AT INTERVAL
// 7. MAKE MOLES DISAPPEAR AFTER APPEARING
// 8. GET CLICKING WORKING -- possibly just turning the moles to brown when they're clicked

// questions for Reuben:
// 1. what am i doing with classes?  i keep thinking something different... players, moles, holes, etc
// 2. can i add the random appearances function to the classes?  why can't i add it to printMoles?
// 3. cant find how we figured out clicking on a blank space in the grid... does it even matter if 
// it still works?
// 4. 




// moles.forEach(mole => {
//   mole.addEventListener('click', wack);
// });

// const btnStart = document.querySelector('button');
// btnStart.addEventListener('click', createMoles);




// class Mole {
//     constructor() {
//     	const colors = ['red', 'orange', 'brown']
//     	const randNum = Math.floor(Math.random() * colors.length)
//     	this.color = colors[randNum]
//     	this.clicked = false
//     }
// }

// const game = {
// 		moles: [],
// 		scoreBoard: document.querySelector('.score'),
//         intervalID: null,
//         timeElapsed: 0,
//         timesUp: false,
//         score: 0,

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

//     createMoles: function() {
//     	for(let i = 0; i < 12; i++) {
//     		const ml = new Mole()
//     		this.moles.push(ml)
//     	}
//     	this.printMoles()
//     },

//     printMoles: function() {
//     	const $molesContainer = $('.moles')
//     	for(let i = 0; i < this.moles.length; i++) {
//     		const $div = $(`div data-which-mole="${i}"></div>`).addClass('mole')
//     		$div.css('background-color', this.moles[i].color)
//     		$molesContainer.append($div)
//     	}
//     },

//     start: function() {
//     	scoreBoard.textContent = this.score
//     	scoreBoard.classList.remove('add')
//     }
// }



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