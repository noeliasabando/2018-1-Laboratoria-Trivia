
$(".divlista").hide();

<<<<<<< HEAD
//Al hacer click en un elemento ocultamos todo
//y mostramos el div indicado basado en el identificador del link
=======

>>>>>>> 940aa4a964a643286fcb1ebbcab00115a6ba3945
$(".lista").on("click",function(){
  $(".divlista").hide();
  $("#divlista"+ $(this).attr("id")).show();
});

<<<<<<< HEAD
function check() {
  var pregunta1= document.question1.value;
  var pregunta2= document.question2.value;
  var pregunta3= document.question3.value;
  var pregunta4= document.question4.value;
  var pregunta5= document.question5.value;
  var respuestasCorrectas= 0;


=======
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
>>>>>>> 940aa4a964a643286fcb1ebbcab00115a6ba3945

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
