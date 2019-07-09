const myGame = {
	playerName: null,
	player: null,
	//storing images as objects to use in css later. 
	inventory: "",
	shuffledImg: [],
	turns: 20,
	playerPos:"",
	tableArray: ["a","a","a","i"],
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

	randomizeItems(){
		this.shuffleImgArr()
		this.shuffledImg.forEach((str,i) => {
			let picc = $(`<img id=${str} src="./pics/0${str[1]}.png">`)
			$(`#div${i}`).append(picc)
		})
	},
	//game need to get a random number of turns between 15-20
	getNumberOfTurns(){
		this.turns = Math.floor(Math.random()*5)+15
		// $("#turn").text(this.turns)

	},
	//game need to decrease the number of turns when space bar and enter keys are pressed 
	decreaseTurns(){
		//if(key === " " || key === "Enter"){
			this.turns -=1 
		//}
		$("#turn").text(this.turns)
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
		$("#theRoom").text(`room of ${this.currentRoom}s`)
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
//you also drop items here
	pickUpItem(key){
		if(this.currentRoom === "table" && key === " " && this.inventory === "" && $(`#div${this.playerPos-1}`).children().attr("id") !== "i0"){
			this.inventory = $(`#div${this.playerPos-1}`).children()
			$(`#div${this.playerPos-1}`).append($(`<img id=i0 src="./pics/00.png">`))
			this.decreaseTurns()
		}else if (this.currentRoom === "chair" && key === " " && this.inventory === "" && $(`#div${this.playerPos+3}`).children().attr("id") !== "i0"){
			this.inventory = $(`#div${this.playerPos+3}`).children()
			$(`#div${this.playerPos+3}`).append($(`<img id=i0 src="./pics/00.png">`))
			this.decreaseTurns()
		}else if (this.currentRoom === "vase" && key === " " && this.inventory === "" && $(`#div${this.playerPos+7}`).children().attr("id") !== "i0"){
			this.inventory = $(`#div${this.playerPos+7}`).children()
			$(`#div${this.playerPos+7}`).append($(`<img id=i0 src="./pics/00.png">`))
			this.decreaseTurns()
		} else if(key === " " && this.currentRoom === "table" && this.inventory !== "" && $(`#div${this.playerPos-1}`).children().attr("id") === "i0"){
			$(`#div${this.playerPos-1}`).children().remove()
			$(`#div${this.playerPos-1}`).append(this.inventory)
			this.inventory = ""
			this.decreaseTurns()
		} else if(key === " " && this.currentRoom === "chair" && this.inventory !== "" && $(`#div${this.playerPos+3}`).children().attr("id") === "i0"){
			$(`#div${this.playerPos+3}`).children().remove()
			$(`#div${this.playerPos+3}`).append(this.inventory)
			this.inventory = ""
			this.decreaseTurns()
		} else if(key === " " && this.currentRoom === "vase" && this.inventory !== "" && $(`#div${this.playerPos+7}`).children().attr("id") === "i0"){
			$(`#div${this.playerPos+7}`).children().remove()
			$(`#div${this.playerPos+7}`).append(this.inventory)
			this.inventory = ""
			this.decreaseTurns()
		} 
	},

	movingThroughRooms(key){
		if(this.currentRoom === "table" && key === "Enter"){
			$("#tableRoom").css("display","none")
			$("#chairRoom").css("display","block")
			this.decreaseTurns()
		}else if(this.currentRoom === "chair" && key === "Enter"){
			$("#chairRoom").css("display","none")
			$("#vaseRoom").css("display","block")
			this.decreaseTurns()
		}else if (this.currentRoom === "vase" && key === "Enter"){
			$("#vaseRoom").css("display","none")
			$("#tableRoom").css("display","block")
			this.decreaseTurns()
		}
	},

	showInventroy(key){
		if(key === " "){
			$("#inventory").append(this.inventory)
		}
	},
//check after every action, 
//push img name in the div into arrays. and compare the arry. so when the item dropps,push the name into array. 
	checkWin(){
		let t = $("#tableRoom").children()
		let c = $("#chairRoom").children()
		let v = $("#vaseRoom").children()
		console.log(t[1]);
		// for(let i = 0; i < 4; i++){
		// 	${t[i]}.children()
		// }
/*
		this.tArr = t.forEach((obj) => {
			$(obj).children().attr("id")[0]
		}).sort()

		if (tArr === tableArray){
			alert(`you win!`)
		} 

		this.cArr = c.forEach((obj) => {
			$(obj).children().attr("id")[0]
		})

		this.vArr = v.forEach((obj) => {
			$(obj).children().attr("id")[0]
		})
		*/
	},

}


$(document).on("keydown",(e) => {
	$("#player").html(`${myGame.playerName}<br/><img id="playerbody" src="pics/body.png"/>`)
	// console.log(e);
	//player need to move arouns the screen with arrow keys. 
	// myGame.checkWin()
	myGame.player.movingPlayer(e.key);
	myGame.findPlayerPosition(e.key)
	myGame.pickUpItem(e.key)
	myGame.movingThroughRooms(e.key)
	myGame.showRooms()
	myGame.showInventroy(e.key)
})