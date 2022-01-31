function display() {

  var people = document.getElementById("people").value;
  var duration = document.getElementById("duration").value;

  document.getElementById("peopleDisplay").innerHTML = people;
  document.getElementById("durationDisplay").innerHTML = duration;
  document.getElementById("locateDisplay").innerHTML = locate;
	
}

function choose(choice) {
	locate = choice;
	
}

function locationcost() {
	var cost = 0;
	
	if choice = Kansas {
		cost = 500;
	}
	else if choice = Missouri {
		cost = 1000;
	}
	else {
		cost = 750;
	}
}

function peepcheck () {
	var peeps = people;
	if people < 1 || people > 20 {
		alert("Number must be between 1 and 20");
	}
	
}
