const myGame = {
	playerName: null,
	player: null,
	createPlayer(name){
		this.playerName = name 
		this.player = new Player(name)
		this.player.initPlayer() 
	},

	//user flow. game need to put all the images into the div. 
	//game need to get a random number of turns between 15-20
	//game need to decrease the number of turns when space bar and enter keys are pressed 
	//game need to stop when the turn goes down to 0 and the user loses 
	//game need to stop when the corrosponding imgs are moved into the correct div, player wins,
	//player need to move arouns the screen with arrow keys. 
	movingPlayer(key){
		console.log(key);
		if(key === "ArrowUp"){
			$("#player").animate({top: "-=50px"})
			console.log("moveup");
		}else if(key === "ArrowDown"){
			$("#player").animate({top: "+=50px"})
			console.log("move down");
		}else if(key === "ArrowLeft"){
			$("#player").animate({left: "-=50px"})
		}else if(key === "ArrowRight"){
			$("#player").animate({left:"+=50px"})
		}
	},
}


$(document).on("keydown",(e) => {
	myGame.movingPlayer(e.key);
})