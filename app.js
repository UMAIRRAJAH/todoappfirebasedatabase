


      

function checkAnswer (){
      var stdName = document.getElementById("studentName")
      var score = 0;
      var rightAnswer1 = document.getElementById("q1-a1");
      var q1a2 = document.getElementById("q1-a2");
      var q1a3 = document.getElementById("q1-a3");
      var q1a4 = document.getElementById("q1-a4");
      if(rightAnswer1.checked == true){
            score++;
      }
      var q2a1 = document.getElementById("q2-a1");
      var rightAnswer2 = document.getElementById("q2-a2");
      var q2a3 = document.getElementById("q2-a3");
      var q2a4 = document.getElementById("q2-a4");
      if(rightAnswer2.checked == true){
            score++;
      }
      var q3a1 = document.getElementById("q3-a1");
      var q3a2 = document.getElementById("q3-a2");
      var rightAnswer3 = document.getElementById("q3-a3");
      var q3a4 = document.getElementById("q3-a4");
      if(rightAnswer3.checked == true){
            score++;
      }
      var rightAnswer4 = document.getElementById("q4-a1");
      var q4a2 = document.getElementById("q4-a2");
      var q4a3 = document.getElementById("q4-a3");
      var q4a4 = document.getElementById("q4-a4");
      if(rightAnswer4.checked == true){
            score++;
      }
      var q5a1 = document.getElementById("q5-a1");
      var q5a2 = document.getElementById("q5-a2");
      var q5a3 = document.getElementById("q5-a3");
      var rightAnswer5 = document.getElementById("q5-a4");
      if(rightAnswer5.checked == true){
            score++;
      }
      if (stdName.value == ""){
            alert("Please Enter Your Name");
            
      }else{
            var stdData = firebase.database().ref('stdName').set(stdName.value)
            var scoreData = firebase.database().ref('score').set(score)
            document.write("You Secure " + score + " Marks");




            // document.write()
      
            // var tododata = document.getElementById("todo_data");

            var dataBase = firebase.database().ref('stdName');
            var key = dataBase.push().key;
      
            var quizObj = {
                  StudentName: stdData,
                  score:scoreData,
                  key: key
      
            }
      
            dataBase.child(key).set(quizObj)
      
      
      }
      
}