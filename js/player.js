class Player{
	constructor(name){
		this.name = name
	}

	initPlayer(){
		console.log("player is created");
		$("#player").text(this.name)
	}
}