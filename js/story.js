//using this page to create the choose your own adventure part, and hide or show each divs, 
//when the game start, #page1{} display: inline-block. #page2,3,gamePage display: none 
//click the "link" to go to the secons page: #page2{} display: inline-block. #page1,3,gamePage display: none 
//click the button on page two: inisate the player object. with the input name. #page3{} display: inline-block. #page1,2,gamePage display: none 
//page3: click on each corrosponding rooms, 
//table room: all the pages display: none, gamepage display: flex,  #tableroom display:block







const page = {
	showPage2(){
		$("#page1").css("display","none")
		$("#page2").css("display","inline-block")
		console.log("go to page 2");
	},

	showPage3(){
		$("#page2").css("display","none")
		$("#page3").css("display","inline-block")
		console.log("go to page three");
	},

	makePlayer(){
		console.log("makePlayer");
	},

	showTableRoom(){
		$("#page3").css("display","none")
		$("#gamePage").css("display","flex")
		$("#tableRoom").css("display","block")
	},

	showChairRoom(){
		$("#page3").css("display","none")
		$("#gamePage").css("display","flex")
		$("#chairRoom").css("display","block")
	},

	showVaseRoom(){
		$("#page3").css("display","none")
		$("#gamePage").css("display","flex")
		$("#vaseRoom").css("display","block")
	},
}




$("#link1").on("click",() => {
	page.showPage2()
})


$("button").on("click",() => {
	page.makePlayer()
	page.showPage3()
})

$("#linkTableRoom").on("click",() => {
	page.showTableRoom()
})

$("#linkVaseRoom").on("click",() => {
	page.showVaseRoom()
})

$("#linkChairRoom").on("click",() => {
	page.showChairRoom()
})