var stuffDiv = document.body.querySelector(".stuff");
var list = ["dog", "fish", "cat", "shark", "cat", "dog"];
var number = 0;

for (var i = 0; i < 6 ; i++) {
  var ele = document.createElement("div");
  if (list[i] == "dog") {
    ele.innerHTML = "bork bork";
  } else if (list[i] == "fish") {
    ele.innerHTML = "I am a fish";
  } else if (list[i] == "cat") {
     ele.innerHTML = "meow";
  }else if (list[i] == "shark") {
    ele.innerHTML = "I am a shark";
  } else {
    ele.innerHTML = list[i];
  }
  
  stuffDiv.appendChild(ele);
}