// const imgArr = ["url(pics/01.png)","url(pics/02.png)","url(pics/03.png)","url(pics/04.png)","url(pics/05.png)","url(pics/06.png)","url(pics/07.png)","url(pics/08.png)","url(pics/09.png)","none","none","none"]

const imgArr = ["a1","a2","a3","b4","b5","b6","c7","c8","c9","i0","i0","i0"]



class Player{
	constructor(name){
		this.name = name
	}

	initPlayer(){
		console.log("player is created");
		$("#player").html(`${this.name}<br/>is in the`)
	}

/*	//player need to move around in the div 
	movingPlayer(key){
		if(key === "ArrowUp" && $("#player").position().top >= 0){
			$("#player").animate({top: "-=100px"},"fast")
		}else if(key === "ArrowDown" && $("#player").position().top <= 550){
			$("#player").animate({top: "+=100px"},"fast")
		}else if(key === "ArrowLeft" && $("#player").position().left >= 0){
			$("#player").animate({left: "-=100px"},"fast")
		}else if(key === "ArrowRight" && $("#player").position().top <= 550){
			$("#player").animate({left:"+=100px"},"fast")
		}
	}
	*/


	movingPlayer(key){ 
		// console.log(stopfunc);
		if(key === "ArrowLeft" && $("#player").position().left > 0){
			$("#player").animate({left: "-=100px"},"fast")
		}else if (key === "ArrowRight" && $("#player").position().left < 500){
			$("#player").animate({left:"+=100px"},"fast") 
		} else if (key === "ArrowUp" && $("#player").position().top > 0){
			$("#player").animate({top: "-=100px"},"fast") 
		} else if (key === "ArrowDown" && $("#player").position().top < 400){
			$("#player").animate({top: "+=100px"},"fast") 
		}
	}
}


