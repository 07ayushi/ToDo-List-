var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var del = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");

for(var i = 0; i < del.length; i++){
	del[i].addEventListener("click", removeParent, false);
}

function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
}

function lineThrough(event){
	var a=event.target;
	
	if(count==0)
	{
		
	    a.classList.add("done");
	}
	else
	{
		a.classList.toggle("done");
	}
	count++;


}

ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);

	ul.appendChild(li);
	input.value = "";

	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

