const myGame = {
	playerName: null,
	player: null,
	//storing images as objects to use in css later. 
	inventory: {},
	shuffledImg: [],
	createPlayer(name){
		this.playerName = name 
		this.player = new Player(name)
		this.player.initPlayer() 
	},

//write a loop that run 12 times. each time push a random index item in the old array into the new array. 
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
	//game need to decrease the number of turns when space bar and enter keys are pressed 
	//game need to stop when the turn goes down to 0 and the user loses 
	//game need to stop when the corrosponding imgs are moved into the correct div, player wins,


	//player need to pick up the div with space bar. and drop it into the inventory. storying the images and inventroy as objects, to use in css later. 
	//looking for the payers position, I am also usign this function to determin the div's position. 
	findPlayerPosition(key){
		if(key === " "){
			const pos =`top ` + $("#player").position().top + ` left ` + $("#player").position().left
			if($("#player").position().top < 300 && $("#player").position().left < 300){
				console.log("position 1");
			}else if($("#player").position().top >= 300 && $("#player").position().left < 300){
				console.log("position 3");
			}else if ($("#player").position().top < 300 && $("#player").position().left > 300){
				console.log("position 2");
			}else if ($("#player").position().top >= 300 && $("#player").position().left > 300){
				console.log("position 4");
			}
		}
	},
}


$(document).on("keydown",(e) => {
	// console.log(e);
//player need to move arouns the screen with arrow keys. 
	myGame.player.movingPlayer(e.key);
	myGame.findPlayerPosition(e.key)
})