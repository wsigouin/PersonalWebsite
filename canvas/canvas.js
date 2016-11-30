var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    axeSheet = new Image(),
	  axePaused = true,
    swordSheet = new Image(),
	  swordPaused = true,
    xMod = 0,
    yMod = 0,
    axMod = 0,
    ayMod = 0,
    axeCells = [
      { left: 0, top: 0, width: 39, height: 36 },
      { left: 0, top: 0, width: 39, height: 36 },
      { left: 0, top: 0, width: 39, height: 36 },
      { left: 35, top: 126, width: 30, height: 36 },
      { left: 45, top: 33, width: 27, height: 35 },
      { left: 122, top: 47, width: 27, height: 35 },
      { left: 122, top: 83, width: 27, height: 35 },
      { left: 152, top: 0, width: 45, height: 55 },
      { left: 0, top: 70, width: 59, height: 55 },
      { left: 152, top: 133, width: 45, height: 27 },
      { left: 74, top: 63, width: 45, height: 27 },
      { left: 152, top: 105, width: 45, height: 27 },
      { left: 152, top: 105, width: 45, height: 27 },
      { left: 0, top: 126, width: 34, height: 43 },
      { left: 122, top: 0, width: 29, height: 46 },
      { left: 122, top: 0, width: 29, height: 46 },
      { left: 122, top: 0, width: 29, height: 46 },
      { left: 122, top: 0, width: 29, height: 46 },
      { left: 152, top: 56, width: 41, height: 48 },
      { left: 74, top: 31, width: 41, height: 31 },
      { left: 74, top: 31, width: 41, height: 31 },
      { left: 95, top: 126, width: 54, height: 32 },
      { left: 74, top: 91, width: 47, height: 30 },
      { left: 0, top: 37, width: 44, height: 32 },
      { left: 66, top: 126, width: 28, height: 32 },
      { left: 0, top: 0, width: 39, height: 36 },
    ],
    swordCells = [
      { left: 75, top: 69, width: 40, height: 34 },
      { left: 122, top: 31, width: 40, height: 34 },
      { left: 122, top: 135, width: 40, height: 34 },
      { left: 122, top: 101, width: 37, height: 33 },
      { left: 0, top: 79, width: 38, height: 33 },
      { left: 0, top: 170, width: 76, height: 31 },
      { left: 0, top: 140, width: 63, height: 29 },
      { left: 0, top: 140, width: 63, height: 29 },
      { left: 108, top: 170, width: 60, height: 28 },
      { left: 62, top: 113, width: 55, height: 26 },
      { left: 122, top: 0, width: 42, height: 30 },
      { left: 39, top: 79, width: 34, height: 31 },
      { left: 165, top: 0, width: 52, height: 55 },
      { left: 165, top: 92, width: 47, height: 36 },
      { left: 0, top: 35, width: 33, height: 43 },
      { left: 37, top: 35, width: 31, height: 40 },
      { left: 77, top: 170, width: 30, height: 30 },
      { left: 75, top: 36, width: 42, height: 32 },
      { left: 165, top: 129, width: 45, height: 40 },
      { left: 75, top: 0, width: 46, height: 35 },
      { left: 75, top: 69, width: 40, height: 34 },
    ];

var framesPerSecond = 20;

axeSheet.src = './spritesheet2.png';
var axeSprite = { posX: 0, posY: 0, imagePos: 0};
swordSheet.src = './eliwoodAttack.png';
var swordSprite = { posX: 30, posY: 30, imagePos: 0};


axeSheet.onload = function(e) {
	var startImage = axeCells[axeSprite.imagePos];
	context.drawImage(axeSheet, startImage.left, startImage.top, startImage.width, startImage.height,
		300-startImage.width, 100-startImage.height, startImage.width, startImage.height );
  setInterval(function() {
      var curImage = axeCells[axeSprite.imagePos];
			context.drawImage(axeSheet, curImage.left, curImage.top, curImage.width, curImage.height,
						300-curImage.width + xMod, 100-curImage.height + yMod, curImage.width, curImage.height );
    if(!axePaused){
			updateAxe(axeSprite);
      context.clearRect( 0, 0, canvas.width, canvas.height );
		}
	}, 2500 / framesPerSecond);

};

swordSheet.onload = function(e) {
	var sStartImage = swordCells[swordSprite.imagePos];
	context.drawImage(swordSheet, sStartImage.left, sStartImage.top, sStartImage.width, sStartImage.height,
		200-sStartImage.width, 100-sStartImage.height, sStartImage.width, sStartImage.height );

	setInterval(function() {
			var sCurImage = swordCells[swordSprite.imagePos];
			context.drawImage(swordSheet, sCurImage.left, sCurImage.top, sCurImage.width, sCurImage.height,
						200-sCurImage.width + axMod, 100-sCurImage.height + ayMod, sCurImage.width, sCurImage.height );
    if(!swordPaused){
			updateSword(swordSprite);
      context.clearRect( 0, 0, canvas.width, canvas.height );
		}
	}, 2500 / framesPerSecond);

};

function swordAttack() {
	  swordPaused = !swordPaused;
};

function axeAttack() {
	  axePaused = !axePaused;
};


function updateAxe(s){
	s.imagePos++;
  if(s.imagePos > 25)  {
    s.imagePos = 0;
    xMod = 0;
    axePaused = !axePaused;
  }
  else if(s.imagePos >= 13 && s.imagePos <= 15){
    xMod -= 15;
    yMod -= 15;
  }
  else if(s.imagePos >= 16 && s.imagePos <= 18){
    xMod -= 15;
    yMod += 15;
  }
  else if(s.imagePos > 20  && s.imagePos <= 24){
    xMod += 22.5;
  }

}


function updateSword(s){
	s.imagePos++;
  if(s.imagePos >= 6 && s.imagePos <= 8){
    axMod += 25;
  }
  else if(s.imagePos >= 14 && s.imagePos <= 17){
    axMod -= 20;
  }
  else if(s.imagePos == 18){
    axMod -= 15;
  }
  else if(s.imagePos > 20)  {
    s.imagePos = 0;
    axMod = 0;
    swordPaused = !swordPaused;
  }


}
