/*Konva:
Stage --> Camada --> Objeto */

//Cria um novo Stage (container do canvas)
var stage = new Konva.Stage({
	container: 'container',
	width: getSize()["width"],
	height: getSize()["height"],
	draggable: true
});

var centerX = stage.getWidth()/2;
var centerY = stage.getHeight()/2;

//Cria uma nova camada
var shapeLayer = new Konva.Layer();
var infoLayer = new Konva.Layer();

//Cria uma nova shape/objeto
var circle = new Konva.Circle({
	x: centerX,
	y: centerY,
	radius: 70,
	fill: 'red',
	stroke: 'black',
	strokeWidth: 4
});

// Informação
var infoLabel = createInfoBox("Informação");
infoLabel.position({x:circle.x()+50, y:circle.y()-15});

infoLayer.add(infoLabel);
shapeLayer.add(circle);
stage.add(shapeLayer);
stage.add(infoLayer);

shapeLayer.on("click",function(e){toggleVisibility(infoLabel,infoLayer);});
shapeLayer.on("tap",function(e){toggleVisibility(infoLabel,infoLayer);});

document.getElementById("reset").addEventListener("click",reset,false);

//Redimensiona a página e o Stage
window.addEventListener('resize',function(){
	console.log(getSize()["width"]+" "+getSize()["height"]);
	stage.setAttrs({width: getSize()["width"], height: getSize()["height"]});
},false);

function reset (){
	stage.x(0);
	stage.y(0);
	stage.draw();
	stage.clearCache();
}

function createInfoBox (input){
	var info = new Konva.Label({x:0,y:0,opacity: 0.75});

	//Cores e tal
	info.add(new Konva.Tag({
		fill: 'black',
		pointerDirection: 'down',
		pointerWidth: 10,
		pointerHeight: 10,
		lineJoin: 'round',
		shadowColor: 'black',
		shadowBlur: 10,
		shadowOffset: 10,
		shadowOpacity: 0.5
	}));

	//Texto
	info.add(new Konva.Text({
		text: input, //Texto de Entrada
		fontFamily: 'Calibri',
		fontSize: 18,
		padding: 5,
		fill: 'white'
	}));
	info.hide();
	return info;
}

function toggleVisibility (input,layer){
	input.isVisible()? input.hide() : input.show();
	layer.draw();
}

//Pega a largura e a altura da página. Funciona em mobiles e browsers
function getSize(){
	var size = {}
	size["height"] = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight; 
	size["width"] = "innerWidth" in window ? window.innerWidth : document.documentElement.offsetWidth;
	return size;
}