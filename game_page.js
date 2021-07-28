var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ": " ;
document.getElementById("player2_name").innerHTML = player2_name + ": " ;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question : " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer : " + player2_name;

function send() {
    var get_word = document.getElementById("word").value;
    var word = get_word.toLowerCase();

    var charAt1 = word.charAt(1);

    var number_devide_2 = Math.floor(word.length/2);

    var charAt2 = word.charAt(number_devide_2);

    var minus_1 = word.length - 1;
    var charAt3 = word.charAt(minus_1);

    var remove_charAt1 = word.replace(charAt1,"_");
    var remove_charAt2 = remove_charAt1.replace(charAt2,"_");
    var remove_charAt3 = remove_charAt2.replace(charAt3,"_");

    var question = "<h1 id = 'word_display'> Q. " + remove_charAt3 + "</h1>";
    var answer = "<br> Answer : <input type = 'text' id = 'answer '>";
    var button = "<br> <br> <button id='check' class='btn btn-info' onclick='check()'>Check</button>"

    var row = question + answer + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    

   
}
var question_turn = "player1";
var answer_turn = "player2";

function check() {
    var answergiven = document.getElementById('answer').value;
    var answerlowercase = answergiven.toLowerCase();

   if(answerlowercase == word)
   {
       if(question_turn == "player1")
       {
           player2_score == player2_score+1;
           document.getElementById("player2_score").innerHTML = player2_score;
       }
       else{
           player1_score = player1_score + 1;
           document.getElementById("player1_score").innerHTML = player1_score;

    }
   }
   if(question_turn == "player1")
   {
       question_turn = "player2";
       document.getElementById("player_question").innerHTML = "Question :" + player2_name;
   }
   else{
       question_turn = "player1";
       document.getElementById("player_question").innerHTML = "Question :" + player1_name;
   }
   if(answer_turn == "player1")
   {
       answer_turn = " player2";
       document.getElementById("player_answer").innerHTML = "Answer :" + player2_name;
   } 
   else{
       answer_turn = "player1";
       document.getElementById("player_answer").innerHTML = "Answer :" +player1_name;
   }
    document.getElementById("output").innerHTML = "";

    


}