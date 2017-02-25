var ball = document.querySelector(".discoball");
var step = 0;

function goDisco() {
		//do your disco magic here !
		switch (step % 6) {
			case 0:
		       	ball.className = "discoball awesome";
		        break;
		    case 1:
		        ball.className = "discoball goes";
		        break;
		    case 2:
		        ball.className = "discoball our";
		        break;
		    case 3:
		        ball.className = "discoball here";
		        break;
		    case 4:
		        ball.className = "discoball disco";
		        break;
		    case 5:
		        ball.className = "discoball ball";
		        break;
}
console.log(step % 6)
step++;
}

setInterval(goDisco,300);

var text = document.querySelector(".text");
var step1 = 0;
function changeColor() {
	switch (step1 % 3) {
		case 0:
			text.className  = "text red";
			break;
		case 1:
			text.className  = "text green";
			break;
		case 2:
			text.className  = "text white";
			break;
	}
	console.log(step1 % 3);
	step1++
}
setInterval(changeColor,1000)