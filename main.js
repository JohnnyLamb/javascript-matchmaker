
var studentArray = [];
var mentorArray = [];

var studentFunction = function(){
  var askStudents = prompt("how many students are there?");
  var studentNumber = parseInt(askStudents);

  for(i = 0; i < studentNumber; i++){
    var name = prompt("what's your name?");

    var phone = prompt("what's your number");

    var city = prompt("where are you from?");

    studentArray.push({
      "name": name,
      "phone": phone,
      "city": city,
    });
  }
    var ul = document.createElement('ul');
    for (i = 0; i < studentArray.length; i++) {
      var li = document.createElement('li');
      ul.appendChild(li);
      li.appendChild(document.createTextNode('Name of student: ' + studentArray[i].name + "  " + "This is the phone: " + studentArray[i].phone + " " + "| and the city " + studentArray[i].city));
    }
    document.getElementById("student answer").appendChild(ul);
};
studentFunction();

var mentorFunction = function(){
  var askmentor = prompt("how many mentors are there?");
  var mentorNumber = parseInt(askmentor);

  for(i = 0; i < mentorNumber; i++){
    var name = prompt("what's your name?");

    var phone = prompt("what's your number");

    var city = prompt("where are you from?");

    mentorArray.push(name,phone,city);
  }
    var mentorToDom = document.createElement('p');

    var mentorNode = document.createTextNode(mentorArray);

    mentorToDom.appendChild(mentorNode);

    document.getElementById("mentor answer").appendChild(mentorToDom);

};
mentorFunction();




