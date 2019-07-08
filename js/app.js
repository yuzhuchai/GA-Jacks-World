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


	//player need to pick up the div with space bar. 
	//looking for the payers position, I am also usign this function to determin the div's position. 
	findPlayerPosition(key){
		if(key === "Enter"){
			console.log($("#player").position().top,$("#player").position().left);
		}
	},
}


$(document).on("keydown",(e) => {
//player need to move arouns the screen with arrow keys. 
	myGame.player.movingPlayer(e.key);
	myGame.findPlayerPosition(e.key)
})