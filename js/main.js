
function init() {
	var stage;  
	var queue; 
	var dice1; 
	var dice2;
	var diceOneText;
	var diceTwoText; 
	
	var assetData = [
		{id: "dice1", src: "/Assets/images/1.png"},
		{id: "dice2", src: "/Assets/images/2.png"},
		{id: "dice3", src: "/Assets/images/3.png"},
		{id: "dice4", src: "/Assets/images/4.png"},
		{id: "dice5", src: "/Assets/images/5.png"},
		{id: "dice6", src: "/Assets/images/6.png"},
		{id: "start", src: "/Assets/images/StartButton.png"}
	]
	
	preload();
	
	
	function preload() {
		queue = new createjs.LoadQueue();
		queue.on("complete", begin, this);
		queue.loadManifest(assetData);
	}
	
	
	function begin() {
		console.log("dqwdq");
		stage = new createjs.Stage(document.getElementById("canvas"));
		createjs.Ticker.setFPS(60);		
		createjs.Ticker.on("tick", update, this);
		
		
		var imgStart = queue.getResult("start");
		var btnStart = new createjs.Bitmap(imgStart);
		btnStart.addEventListener("click", RollDice);
		
		btnStart.x = 320;
		btnStart.y = 430;
		stage.addChild(btnStart);
	}
	

	function RollDice() {
		console.log("inside roll");
		stage.removeChild(dice1);
		stage.removeChild(dice2);
		stage.removeChild(diceOneText);
		stage.removeChild(diceTwoText);
		
		var txt1 = (Math.floor(Math.random() * 6) + 1);
		var txt2 = (Math.floor(Math.random() * 6) + 1);
		var img1 = queue.getResult("dice" + txt1);
		var img2 = queue.getResult("dice" + txt2);

		dice1 = new createjs.Bitmap(img1);
		dice2 = new createjs.Bitmap(img2);
		dice1.x = 640 - (dice1.getBounds().width * 2) - 50;
		dice2.x = 640 - (dice2.getBounds().width) - 30;
		dice1.y = 100;
		dice2.y = 100;	
		
	
		 
		
		diceOneText = new createjs.Text(txt1, "35px console", "#000");
		diceTwoText = new createjs.Text(txt2, "35px console", "#000");
		diceOneText.x = dice1.x + (dice1.getBounds().width * 0.5);
		diceTwoText.x = dice2.x + (dice2.getBounds().width * 0.5);
		diceOneText.y = 100 + dice1.getBounds().height + 20;
		diceTwoText.y = 100 + dice1.getBounds().height + 20;
		
		// add the text and dice to stage
		stage.addChild(dice1);
		stage.addChild(dice2);
		stage.addChild(diceOneText);
		stage.addChild(diceTwoText);
	}
	
	
	function update() {
		stage.update();
	}
	
};

