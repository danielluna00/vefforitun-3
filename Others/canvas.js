window.onload=function(){
	function create_box(){
		var canvas=document.createElement('canvas');
		//skellum nokkrum eigindum á nóðuna okkar.
		canvas.id='thecanvas';
		canvas.width='50';
		canvas.height='50';
		//skellum einu stykki stíl á nóðuna.
		canvas.style.border='5px solid red';
		//og að lokum skellum canvas nóðunni okkar á domið.
		document.body.appendChild(canvas);
		}
	}