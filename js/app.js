const myGame = {
	playerName: null,
	player: null,


	createPlayer(name){
		this.playerName = name 
		this.player = new Player(name)
		this.player.initPlayer() 
	}
}