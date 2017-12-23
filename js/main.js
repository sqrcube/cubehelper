var linkIMG = "http://cube.crider.co.uk/visualcube.php?fmt=svg&size=250&pzl=3&view=plan&bg=t&fd=uuuuuuuuunnnnrrrrrnnnnfffffdddddddddnnnnlllllnnnnbbbbb&case=";
var oll = ["R U2 R2' F R F' U2 R' F R F'", 
           "F R U R' U' F' f R U R' U' f' U2", 
           "f R U R' U' f' U' F R U R' U' F'", 
           "f R U R' U' f' U F R U R' U' F'", 
/*5*/      "r' U2 R U R' U r",
	   "r U2 R' U' R U' r'",
	   "r U R' U R U2 r'",
	   "r' U' R U' R' U2 r",
	   "R U R' U' R' F R2 U R' U' F'",
/*10*/	   "R U R' U R' F R F' R U2 R'",
	   "r U R' U R' F R F' R U2 r'",
	   "r' U' R U' R B' R' B R' U2 r",
	   "r U' r' U' r U r' F' U F",
	   "R' F R U R' F' R F U' F'",
/*15*/	   "l' U' l L' U' L U l' U l",
	   "r U r' R U R' U' r U' r'",
	   "R U R' U R' F R F' U2 R' F R F'",
	   "r U R' U R U2 r2 U' R U' R' U2 r",
	   "M U R U R' U' M' R' F R F'",
/*20*/     "M U R U R' U' M2 U R U' r'",
	   "R U2 R' U' R U R' U' R U' R'",
	   "f R U R' U' f' F R U R' U' F'",
	   "R2 D R' U2 R D' R' U2 R'",
	   "r U R' U' r' F R F'",
/*25*/	   "F' r U R' U' r' F R",
	   "R' U' R U' R' U2 R",
	   "R U R' U R U2 R",
	   "r U R' U' M U R U' R'",
	   "M U R U R' U' R' F R F' M'",
/*30*/	   "F R' F R2 U' R' U' R U R' F2",
	   "R' U' F U R U' R' F' R",
	   "L U F' U' L' U L F L'",
	   "R U R' U' R' F R F'",
	   "R U R' U' B' R' F R F' B",
/*35*/	   "R U2 R2' F R F' R U2 R'",
	   "L' U' L U' L' U L U L F' L' F",
	   "F R U' R' U' R U R' F'",
	   "R U R' U R U' R' U' R' F R F'",
	   "L F' L' U' L U F U' L'",
/*40*/	   "R' F R U R' U' F' U R",
	   "R U R' U R U2' R' F R U R' U' F'",
	   "R' U' R U' R' U2 R F R U R' U' F'",
	   "f' L' U' L U f",
	   "f R U R' U' f'",
/*45*/	   "F R U R' U' F'",
	   "R' U' R' F R F' U R",
	   "F' L' U' L U L' U' L U F",
	   "F R U R' U' R U R' U' F'",
	   "R B' R2 F R2 B R2 F' R",
/*50*/	   "R' F R2 B' R2 F' R2 B R'",
	   "f R U R' U' R U R' U' f'",
	   "R U R' U R U' y R U' R' F'",
	   "r' U2 R U R' U' R U R' U r",
	   "r U2 R' U' R U R' U' R U' r'",
/*55*/	   "R U2 R2 U' R U' R' U2 F R F'",
	   "r U r' U R U' R' U R U' R' r U' r'",
	   "R U R' U' M' U R U' r'"
];
function newCase(){
        var chosenCase = oll[Math.floor((Math.random() * 15))];
        scrambleText.innerHTML = "Alg: " + chosenCase;
	document.getElementById("cubeImg").src= linkIMG + chosenCase;
}
var isOn;


///////////////////////////////////////////////////////////////////////////////////////////////////////////

var timer = document.getElementById("timer");
var toggleBtn = document.getElementById("toggle");
var resetBtn = document.getElementById("reset");
var saveBtn = document.getElementById("save");
var showBtn = document.getElementById("show");
var showingS = false;

toggleBtn.addEventListener("click", function(){
	if (isOn){
		stop();
		save();
	        getTimes();
		toggle.innerHTML = "start timer";
		newCase()
	} else{
	        timer.innerHTML = "0.000";
		time = 0;
		start();
		toggle.innerHTML = "stop";
	}
});

while(isOn){
	update();
}

/*showBtn.addEventListener("click", function(){
	if(showingS === false){
		scrambleOutput.style.display = "inline";
		console.log("hi" + showingS)
		showingS = true;
	} else{
		scrambleOutput.style.display = "none";
		showingS = false;
	}
	
});*/

/*resetBtn.addEventListener("click", function(){
	timer.innerHTML = "0.000";
	time = 0;
});*/

/*saveBtn.addEventListener("click", function(){
	save();
	getTimes();
});*/
