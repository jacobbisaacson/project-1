console.log("project 1");

// class Mole {
//     constructor() {
// // const colors = ['red']
// this.color = colors
// this.clicked = false
// this.clickedColor = ['transparent']
//     this.isHole = 
// }
// setClicked() {
//     this.clicked = true
//     }
// }

// class Player {
//     constructor(name) {
//     	this.name = name
//         this.score = 0
//         this.turn = turn

//     }
// }

class Hole {
    constructor() {
        const colors = ['pink']
        this.color = colors
        this.clicked = false
        this.isMole = false
    }

    setClicked() {
        this.clicked = true
    }
    // becomeMole() {



    //     // if (this.isMole === false) {
    //     //    	this.isMole = true
    //     //    	$hole.css('color', "brown")
    //     //    }
    //     //if this.isMole ==== true --> change css to look like a mole

    // }
    // backToHole() {
    //     //if this.isMole === true when this was clicked, change isMole back to false
    // }

    // // setClicked() {
    // // 	this.clicked = true
    // // }
}

const game = {
    score1: 0,
    score2: 0,
    timeUp: false,
    moles: [],
    holes: [],
    // holes1: [],
    emptyHole: [],
    intervalID: null,
    timeElapsed: 0,

    createHoles: function() {
        for (let i = 0; i < 8; i++) {
            // const mo = new Mole()
            // this.moles.push(mo)
            const ho = new Hole()
            this.holes.push(ho)
        }
        this.printHoles()
    },

    printHoles: function() {
        const $holesContainer = $('.holes')
        for (let i = 0; i < this.holes.length; i++) {
            const $div = $(`<div id="${i}"></div>`).addClass('hole')
            $div.css('background-color', this.holes[i].color)
            $holesContainer.append($div)
    	}
    	console.log("we're in printHoles, about to show")
    	this.show()
    },

    show: function() {
        // grab all .hole with jQ
        const $holes = $('.hole')
        console.log($holes)
        // get a random one
        // for(let i = 0; i < $holes; i++) {
	        // console.log("we're in the for loop")
	        const randIndex = Math.floor(Math.random() * $holes.length)
	        console.log(`${randIndex} is randHole`);
	        // add the class to it
	        $randHole = $(`#${randIndex}`)
	        console.log($randHole)
	        $randHole.addClass('mole')
	        $holes.append($randHole)
	        // $('$randHole').addClass('mole')

        // }

        // setTimeout(() => {
        	

            //change the mole back to a hole -- remove the class from it


            // call show again here (recursion)


      	 // }, 2000)
    },


    checkValidWack: function($hole) {
    	console.log($hole); // this is whatever hole i click (the number)
        const indexOfHoleClicked = $hole
        const hole = this.holes[indexOfHoleClicked]
        if (hole.clicked === false) {
            hole.setClicked()
            //$hole.css('background-color', "brown") // change this to lightgreen // do
            //display messagee hit!
        } else {
            console.log("bad");
            // display message miss!
        }
    },

}

$('.holes').on('click', (event) => {
    const $holeClicked = $(event.target)
    console.log("this is the holeClicked\n", $holeClicked);
    game.checkValidWack($holeClicked)
    // makes them disappear -- so works -- need to make them smash (another image?)
    // also need to add to the score

})

$('.button').on('click', (event) => {
    const $btnStart = $(event.target)
    game.createHoles($btnStart)
    //need to make the button stop printing moles after clicked once
})

    // showMole: function(holes) {
    //     const hole1 = document.querySelectorAll('.hole1')
    //     //create a mole class that is similar to the hole class but mole colored
    //     //then change the class of hte hole to the class mole
    //     setTimeout(() => {
    //     	this.timeElapsed += 1
    //         //this.showMole.hide()
    //         console.log("this is timeElapsed\n", this.timeElapsed);
    //         //change the mole back to a hole
    //     }, 5000)
    // },

   //  function
   // shows mole
   // sets a timeout and in the settimeout,
   //   do the hide

//    then pick one hole
// and get show mole to work for it
// showMole should take a parameter
//(which hole) just get it working for one hole






    // have a function that shows and then sets 
    // a timeout and in the settimeout do the hide

    // timeout: function() {
    // 	const time = randomTime(333, 999)
    // 	const hole = randomHole(holes)
    // 	hole.classList.show()

    // 	setTimeout(time) => {
    // 	hole.classList.hide()
    // 	if(timeUp === false) timeout()
    // 	} time
    // },

 

    // showMole: function() {
    // 	setTimeout(checkValidWack(clicked) {
    // 		if(clicked === )
    // 	})
    // }),

    // randomTime: function() {
    //     Math.round(Math.random() * (999 - 333) + 333)
    //     const time = randomTime(333, 999);
    // const hole = randomHole(holes);
    // const moleTime = game.setTimeout(printMoles) 
    // },


    //For this check out the difference b/w setTimeout and setInteval
    //timer for game starts time going (up or down ur choice)
    //the timer function loops over the holes
    //if time reaches certain interval, or is like, divisible by 3 or something
    //that's what changes the div currently being accessed by the loop into a mole
    //you would call that by saying something like divName.isMole = true
    //then the becomeMole method changes the CSS of that to 'brown' or whatever






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