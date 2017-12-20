var linkIMG = "http://cube.crider.co.uk/visualcube.php?fmt=svg&size=250&pzl=3&view=plan&bg=t&fd=uuuuuuuuunnnnrrrrrnnnnfffffdddddddddnnnnlllllnnnnbbbbb&case=";
var oll = ["R U2 R2' F R F' U2 R' F R F'", 
           "F R U R' U' F' f R U R' U' f'", 
           "y' f R U R' U' f' U' F R U R' U' F'", 
           "y' f R U R' U' f' U F R U R' U' F'", 
           "r' U2 R U R' U r",
	   "r U2 R' U' R U' r'",
	   "r U R' U R U2 r'",
	   "r' U' R U' R' U2 r",
	   "R U R' U' R' F R2 U R' U' F'",
	   "R U R' U R' F R F' R U2 R'",
	   "r U R' U R' F R F' R U2 r'",
];
function newCase(){
        var chosenCase = oll[Math.floor((Math.random() * 11))];
        scrambleText.innerHTML = chosenCase;
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
	        //getTimes();
		//generateScramble();
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
