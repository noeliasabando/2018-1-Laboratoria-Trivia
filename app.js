//Ocultamos todos los div al iniciar
$(".divlista").hide();

//Al hacer click en un elemento ocultamos todo
//y mostramos el div indicado basado en el identificador del link
$(".lista").on("click",function(){
  $(".divlista").hide();
  $("#divlista"+ $(this).attr("id")).show();
});

function check() {
  var pregunta1= document.question1.value;
  var pregunta2= document.question2.value;
  var pregunta3= document.question3.value;
  var pregunta4= document.question4.value;
  var pregunta5= document.question5.value;
  var respuestasCorrectas= 0;



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
