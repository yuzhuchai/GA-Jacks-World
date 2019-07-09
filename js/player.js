const imgArr = ["url(pics/01.png)","url(pics/02.png)","url(pics/03.png)","url(pics/04.png)","url(pics/05.png)","url(pics/06.png)","url(pics/07.png)","url(pics/08.png)","url(pics/09.png)","","",""]



class Player{
	constructor(name){
		this.name = name
	}

	initPlayer(){
		console.log("player is created");
		$("#player").text(this.name)
	}

	//player need to move around in the div 
	movingPlayer(key){
		// if($("#player").position().top <= 0 && key === "ArrowUp"){
		// 	$("#player").animate({top: "+=0px"})
		// } else if($("#player").position().top >= 550 && key === "ArrowDown"){
		// 	$("#player").animate({top: "-=0px"})
		// } else if($("#player").position().left <= 0 && key === "ArrowLeft"){
		// 	$("#player").animate({left: "+=0px"})
		// } else if ($("#player").position().left >= 550 && key === "Arrowright"){
		// 	$("#player").animate({left: "-=0px"})
		// }else {
			if(key === "ArrowUp" && $("#player").position().top >= 0){
				$("#player").animate({top: "-=50px"})
			}else if(key === "ArrowDown" && $("#player").position().top <= 550){
				$("#player").animate({top: "+=50px"})
			}else if(key === "ArrowLeft" && $("#player").position().left >= 0){
				$("#player").animate({left: "-=50px"})
			}else if(key === "ArrowRight" && $("#player").position().top <= 550){
				$("#player").animate({left:"+=50px"})
			}
		// }
	}
}


