const myGame = {
	playerName: null,
	player: null,
	//storing images as objects to use in css later. 
	inventory: "",
	shuffledImg: [],
	turns: 20,
	playerPos:"",
	createPlayer(name){
		this.playerName = name 
		this.player = new Player(name)
		this.player.initPlayer() 
	},

//write a loop that run 12 times. each time push a random index item in the old array into the new array. 

	startGame(){
	this.randomizeItems()
	this.getNumberOfTurns()
	this.showRooms()
	},

	shuffleImgArr(){
		for (let i = 0; i < 12; i++){
			let num = Math.floor(Math.random()*imgArr.length)
			console.log(num);
			this.shuffledImg.push(imgArr[num])
			imgArr.splice(num,1)
		}
	},

	//user flow. game need to put all the images into the div.
	randomizeItems(){
		this.shuffleImgArr()
		this.shuffledImg.forEach((str,i) => {
			// console.log($(`#div${i}`));
			console.log(str,i);
			$(`#div${i}`).css("background-image",str)
			console.log($(`#div${i}`).css("background-image"));
		})
	},
	//game need to get a random number of turns between 15-20
	getNumberOfTurns(){
		this.turns = Math.floor(Math.random()*5)+15
		$("#turn").text(this.turns)

	},
	//game need to decrease the number of turns when space bar and enter keys are pressed 
	decreaseTurns(key){
		if(key === " " || key === "Enter"){
			this.turns -=1 
			$("#turn").text(this.turns)
		}
		this.loseGame()
	},
	//game need to stop when the turn goes down to 0 and the user loses 
	loseGame(){
		if(this.turns === 0){
			alert(`game over`)
		}
	},
	//game need to stop when the corrosponding imgs are moved into the correct div, player wins,


	//player need to pick up the div with space bar. and drop it into the inventory. storying the images and inventory as objects, to use in css later. 
	showRooms(){
		if ($("#tableRoom").css("display") === "block"){
			this.currentRoom = "table"
		}
		if ($("#chairRoom").css("display") === "block"){
			this.currentRoom = "chair"
		}
		if ($("#vaseRoom").css("display") === "block"){
			this.currentRoom = "vase"
		}
	},
	//looking for the payers position, I am also usign this function to determin the div's position. 
	findPlayerPosition(key){
		if(key === " "){
			if($("#player").position().top < 300 && $("#player").position().left < 300){
				this.playerPos = 1;
			}else if($("#player").position().top >= 300 && $("#player").position().left < 300){
				this.playerPos = 3;
			}else if($("#player").position().top < 300 && $("#player").position().left > 300){
				this.playerPos = 2;
			}else if($("#player").position().top >= 300 && $("#player").position().left > 300){
				this.playerPos = 4
			}
		}
	},

	pickUpItem(key){
			if(this.currentRoom === "table" && key === " "){
				console.log($(`#div${this.playerPos-1}`).css("background-image"));
				this.inventory = $(`#div${this.playerPos-1}`).css("background-image")
			}else if (this.currentRoom === "chair" && key === " "){
				this.inventory = $(`#div${this.playerPos+3}`).css("background-image")
			}else if (this.currentRoom === "vase" && key === " "){
				this.inventory = $(`#div${this.playerPos+7}`).css("background-image")
			}

	},
}


$(document).on("keydown",(e) => {
	// console.log(e);
//player need to move arouns the screen with arrow keys. 
	myGame.player.movingPlayer(e.key);
	myGame.findPlayerPosition(e.key)
	myGame.decreaseTurns(e.key)
	myGame.pickUpItem(e.key)
	// myGame.pickUpItem(e.key)
	// myGame.pickUpItem(e.key)
})