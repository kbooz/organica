var width = window.innerWidth; //Largura
var height = window.innerHeight; //Altura

/*Konva:
Stage --> Camada --> Objeto */

//Cria um novo Stage (container do canvas)
var stage = new Konva.Stage({
	container: 'container',
	width: width,
	height: height,
	draggable: true
});

//Redimensiona a página e o Stage
window.addEventListener('resize',function(){
	width = window.innerWidth; //Largura
	height = window.innerHeight; //Altura
	stage.width(width);
	stage.height(height);
},false);


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

shapeLayer.add(circle);
stage.add(shapeLayer);


document.getElementById("reset").addEventListener("click",function(){
	reset();
},false);

function reset (){
	stage.x(0);
	stage.y(0);
	stage.draw();
	stage.clearCache();
}

// function createInfoBox (input){
// 	var info = new Konva.Label({opacity: 0.75});

// 	//Cores e tal
// 	info.add(new Konva.Tag({
// 		fill: 'black',
// 		pointerDirection: 'down',
// 		pointerWidth: 10,
// 		pointerHeight: 10,
// 		lineJoin: 'round',
// 		shadowColor: 'black',
// 		shadowBlur: 10,
// 		shadowOffset: 10,
// 		shadowOpacity: 0.5
// 	}));

// 	//Texto
// 	info.add(new Konva.Text({
// 		text: input, //Texto de Entrada
// 		fontFamily: 'Calibri',
// 		fontSize: 18,
// 		padding: 5,
// 		fill: 'white'
// 	}));

// 	return info;
// }