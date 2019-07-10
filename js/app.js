const myGame = {
	playerName: null,
	player: null,
	//storing images as objects to use in css later. 
	imgArr: ["a1","a2","a3","b4","b5","b6","c7","c8","c9","i0","i0","i0"],
	inventory: "",
	shuffledImg: [],
	turns: 20,
	playerPos:"",
	tableStr: "a1a2a3i0",
	chairStr: "b4b5b6i0",
	vaseStr: "c7c8c9i0",
	ignoreKeypresses: false,
	status: "",

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
			let num = Math.floor(Math.random()*this.imgArr.length)
			console.log(num);
			this.shuffledImg.push(this.imgArr[num])
			this.imgArr.splice(num,1)
		}
	},

	randomizeItems(){
		this.shuffleImgArr()
		this.shuffledImg.forEach((str,i) => {
			let picc = $(`<img id=${str} src="./pics/0${str[1]}.png">`)
			$(`#div${i}`).append(picc)
		})
	},
	//game need to get a random number of turns between 20-25
	getNumberOfTurns(){
		this.turns = Math.floor(Math.random()*5)+1
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
			this.status = "lost"
			this.restartGame()
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
	checkWin(key){
		if(key === " " || key === "Enter"){
			let t = $("#tableRoom").children()
			let c = $("#chairRoom").children()
			let v = $("#vaseRoom").children()
			const tArr = []
			const cArr = []
			const vArr = []
			for(let i = 0; i < 4; i++){
				let titem = $(t[i]).children()[0]
				let citem = $(c[i]).children()[0]
				let vitem = $(v[i]).children()[0]
				tArr.push($(titem).attr("id"))
				cArr.push($(citem).attr("id"))
				vArr.push($(vitem).attr("id"))
			}
			let tcheck = tArr.sort().join("")
			let ccheck = cArr.sort().join("")
			let vcheck = vArr.sort().join("")
			if( tcheck === this.tableStr && ccheck === this.chairStr && vcheck === this.vaseStr){
				this.status = "won!!"
				console.log(this.status);
				this.restartGame()
			}
		}
	},

	restartGame(){
			this.imgArr = ["a1","a2","a3","b4","b5","b6","c7","c8","c9","i0","i0","i0"]
			this.shuffledImg = []
			this.inventory = ""
			$("#inventory").children().remove()
		for (let i = 0; i < 12; i++){
			$(`#div${i}`).children().remove()
		}
			$("#gamePage").hide()
			$("#tableRoom").hide()
			$("#chairRoom").hide()
			$("#vaseRoom").hide()
			$("#page4").css("display","block")
			$("#result").text(this.status)
		},
/*
	movePlayer(key) {
		// switch flag to ignoreKeypresses to true
		this.player.movingPlayer(key, () => {
			this.ignoreKeypresses = true
			console.log(this.ignoreKeypresses);
			}) 
	},

	disablePress(key){
		if (this.ignoreKeypresses){
			$(document).off("keydown",this.movePlayer(key))
		} else if (this.ignoreKeypresses === false){
			$(document).on("keydown",this.movePlayer(key))
		}

	},
	*/
}

$(document).on("keydown",(e) => {
	$("#player").html(`${myGame.playerName}<br/><img id="playerbody" src="pics/body.png"/>`)
	// console.log(e);
	// myGame.movePlayer(e.key);
	// myGame.disablePress(e.key)
	myGame.player.movingPlayer(e.key)
	myGame.findPlayerPosition(e.key)
	myGame.pickUpItem(e.key)
	myGame.movingThroughRooms(e.key)
	myGame.showRooms()
	myGame.showInventroy(e.key)
	myGame.checkWin(e.key)

	if(e.key === "1"){
		console.log(`top:`,$("#player").position().top, `left:`,$("#player").position().left);
	}
})

