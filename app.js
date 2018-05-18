
$(".divlista").hide();


$(".lista").on("click",function(){
  $(".divlista").hide();
  $("#divlista"+ $(this).attr("id")).show();
});

  var answer1 = question1;
        if (answer1.toLowerCase() == "n") {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No han egresado hombres</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No han egresado hombres</p>"
            "</div>";
       }

        var answer2 = question2;
        if (answer2.toLowerCase() == "n") {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
               "<div class='answer'>" +
                "<p>No hay laboratoria en concepción</p>"
            "</div>";
       } else {
           document.getElementById("wrongAnswersText").innerHTML =
               document.getElementById("wrongAnswersText").innerHTML +
              "<div class='answer'>" +
               "<p>No hay laboratoria en concepción</p>"
           "</div>";
        }

    function check()
{
	var question1 = preguntas.pregunta1.value;
	var question2 = preguntas.pregunta2.value;
	var question3 = preguntas.pregunta3.value;
	var question4 = preguntas.pregunta4.value;
	var resultado = 0;


	if (question1 == "good1"){
		resultado++;
		document.getElementById("buenas").style.background="green";

	} else {
		document.getElementById("malas").style.background="red";
	}
	

	if (question2 == "good2"){
		resultado++;
		document.getElementById("buenas2").style.background="green";

	} else if (question2=="bad2"){
		document.getElementById("malas2").style.background="red";
	}
	

	if (question3 == "good3"){
		resultado++;
		document.getElementById("buenas3").style.background="green";

	} else {
		document.getElementById("malas3").style.background="red";
	
	}

	if (question4 == "good4"){
		resultado++;
		document.getElementById("buenas4").style.background = "green";

	} else {
		document.getElementById("malas4").style.background="red";
	}
	

	document.getElementById("final").textContent="Tuviste " + resultado + " respuestas correctas";

}

// window.onload = function() {
//var name = prompt("¿cuál es tu nombre?");
//    document.getElementById("name").innerText = name; 
//
//    var wantToPlay = prompt("¿quieres jugar? s/n");
//    if (wantToPlay.toLowerCase() == "s") {
//        var answer1 = prompt("¿han egresado hombres en Laboratoria? s/n");
//        if (answer1.toLowerCase() == "n") {
//            document.getElementById("rightAnswersText").innerHTML =
 //               document.getElementById("rightAnswersText").innerHTML +
 //               "<div class='answer'>" +
   //             "<p>No han egresado hombres</p>"
 //           "</div>";
//        } else {
//            document.getElementById("wrongAnswersText").innerHTML =
//                document.getElementById("wrongAnswersText").innerHTML +
//                "<div class='answer'>" +
//                "<p>No han egresado hombres</p>"
//            "</div>";
 //       }
//
//        var answer2 = prompt("¿hay laboratoria en concepción? s/n");
//        if (answer2.toLowerCase() == "n") {
//            document.getElementById("rightAnswersText").innerHTML =
 //               document.getElementById("rightAnswersText").innerHTML +
////                "<div class='answer'>" +
////                "<p>No hay laboratoria en concepción</p>"
////            "</div>";
////        } else {
////            document.getElementById("wrongAnswersText").innerHTML =
////                document.getElementById("wrongAnswersText").innerHTML +
////                "<div class='answer'>" +
////                "<p>No hay laboratoria en concepción</p>"
////            "</div>";
   //     }
    //} else {
    //    document.getElementById("warningMessage").innerText = "Bueno Chao";
   // }
//}