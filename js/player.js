
class Player{
	constructor(name){
		this.name = name
	}

	initPlayer(){
		console.log("player is created");
		$("#player").html(`${this.name}<br/>is in the`)
	}


	movingPlayer(key,stopfunc){ console.log("movingPlayer");
		// console.log(stopfunc);
		if(key === "ArrowLeft" && $("#player").position().left > 0){
			$("#player").animate({left: "-=100px"},"fast",stopfunc)
		}else if (key === "ArrowRight" && $("#player").position().left < 500){
			$("#player").animate({left:"+=100px"},"fast",stopfunc) 
		} else if (key === "ArrowUp" && $("#player").position().top > 0){
			$("#player").animate({top: "-=100px"},"fast",stopfunc) 
		} else if (key === "ArrowDown" && $("#player").position().top < 400){
			$("#player").animate({top: "+=100px"},"fast",stopfunc) 
		} else{
			stopfunc() // listen to keypresses again
		}
	}
}


