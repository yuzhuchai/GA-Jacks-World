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

const imgArr = ["url(pics/01)","url(pics/02)","url(pics/03)","url(pics/04)","url(pics/05)","url(pics/06)","url(pics/07)","url(pics/08)","url(pics/09)","","",""]
