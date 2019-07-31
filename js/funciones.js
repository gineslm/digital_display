


window.onload = function() {


	// insertamos el control de javascript para definir la imagen de fondo del div_background
	var height=screen.height;
	background=document.getElementById("div_background");
	background.style.height =height+"px";
	background.style.backgroundImage="url('img.jpg')";
	//diapo_name="Nueva diapositiva";
	//document.getElementById('id_name_diapo').value=diapo_name;
	//proyect_name="Nuevo proyecto";
	//document.getElementById('id_name_proyect').value=proyect_name;




	mov_obj=0; // ini variable necesaria para desplazar objetos
	i=1;	// ini de variable indice del numero de divs de texto
	edit_text=0;

}
/////////////////////////////////////////////



/*ver buttons bar */
////////////////////////////////////////
function ver_buttons($div){
div=document.getElementById($div);
div.style.display="block";
}
function hide_buttons(){
alert("d");
document.getElementById('buttons_bar').style.display="none";
div.style.display="none";

}

//////////////////////////////////////
function mover_div($div){

		var div=document.getElementById($div);
		if (mov_obj==0) 
		{mov_obj=1;} /// estado de movimiento activo
		else{mov_obj=0;}  /// estado de movimiento inactivo
		//var elemento = document.getElementById($this);
		var posicion = div.getBoundingClientRect();
		var top=Math.round(posicion.top);
		var left=Math.round(posicion.left);
			if (mov_obj==0)
			{ /// para el estado inactivo
			window.onmousemove = function (){};
			div.style.backgroundColor="";
			}
			if (mov_obj==1)
			{ /// para el estado activo
				window.onmousemove = function ()
				{		
				    var x = window.event.clientX;
				    var y = window.event.clientY; 
					div.style.backgroundColor="#fb535385";
					/// correcion de coordenadas para mantener el cursor sobre el div  
					y=y-18;
					x=x-100;
					//div.style.marginLeft="-"+left+"px";
					//div.style.marginTop="-"+top+"px";
					///
					div.style.left=x+"px";
					div.style.top=y+"px"; 
				}		
			}
}// fin de la funcion
//////////////////////////////////////////
//////////// TAMAÑO /////////////////////
function change_size(x,$text){
	text=document.getElementById($text);
	size=text.style.fontSize;	
	size=size.replace("em","");
	size=parseFloat(size);
			if ( ( (size>=12.0)&&(size<(size+x)) ) || ( (size<=0.6)&&(size>(size+x)) )  )
			 {
			alert("limite de letra");
			}else{
				size= size+x;
			text.style.fontSize=size+"em";
			}
}// fin de la funcion


////////////////////////////////////////////////
//////////////////////conjunto de funciones para escribir texto///////
function txt_write($text) {
		if (edit_text==0){
			edit_text=1;
			var text=document.getElementById($text);
			text.style.backgroundColor="#fb535385";
			var text_prev=text.innerHTML;
			var width=text_prev.length;
			if (width<25){width=25;}

			
			text.innerHTML="<input type='text' id='id_change_text' size='"+width+"' value='"+text_prev+"' ></input><div id='buttons_text_operation'><button id='change_text' onclick=\"change_text('"+$text+"')\">cambiar</button><button id='cancel_text' onclick=\"rest_text('"+$text+"','"+text_prev+"')\">cancelar</button></div>";
			document.getElementById('id_change_text').select();
			
		}else{alert("ya estas editando un texto")}
}

function rest_text($text,$content){
	document.getElementById($text).innerHTML=$content;
	text.style.backgroundColor="unset";
	edit_text=0;
}

function change_text($text){
	text=document.getElementById($text);
	text.style.backgroundColor="unset";
	new_text=document.getElementById('id_change_text').value;
	text.innerHTML=new_text;
	edit_text=0;
}


function change_color($text,$color){
	document.getElementById($text).style.color=$color;
}

function select_font($text,$font,$div){
	ver_buttons($div);
	document.getElementById($text).style.fontFamily=$font;

}

////////////////////NUEVO TEXTO//////////////////////////
////////////////////////////////////
function crear_div(){
	var html=document.getElementById('div_background').innerHTML;
	var create_div="<div id='div_titulo"+i+"' class='div_texto' onmouseover=\"ver_buttons('buttons_bar"+i+"')\"  onmouseleave=\"hide_buttons('buttons_bar"+i+"')\"><span id='id_text"+i+"' class='text' style='font-size:2em' >Introduce un texto</span><div id='buttons_bar"+i+"' class='buttons_bar'><button onclick=\"txt_write('id_text"+i+"')\"><img src='ico_write.png' alt='x' /></button><button onclick=\"mover_div('div_titulo"+i+"')\" ><img src='ico_move.png' alt='x' /></button><button onclick=\"change_size(0.1,'id_text"+i+"')\"><img src='ico_size_up.png' alt='x' /></button><button onclick=\"change_size(-0.1,'id_text"+i+"')\"><img src='ico_size_down.png' alt='x' /></button><input type='color' name='text_color' value='#000000' onchange=\"change_color('id_text"+i+"',this.value)\"></div>";
	document.getElementById("div_background").innerHTML=html+create_div;
	i++
}
//////////////////////CHANGE BACKGROUND/////////////////////
/////////////////////////////////////////////
function change_background(){
	new_background=document.getElementById('change_background').value;
	background.style.backgroundImage="url('"+new_background+"')";
}
function change_value($id){
	id=document.getElementById($id);
	var new_txt=id.value;
	var width=new_txt.length;
	//width=width.toString();
	id.setAttribute('size',width);
}
//////////////////////FUNCIONES PROYECTO////////////////////////
//////////////////////////////////////////////////
function save_pro() {

}
function restart_pro() {
// necesita variable general para marcar que el proyecto esta salvado
}
function play_pro() {
// necesita variable general para marcar que el proyecto esta salvado
// necesita establecer una comparacion entre:
// datos salvados y los datos de pantalla
// para dar un aviso sy hay cambios q se perderian
}



/////////////////////////////////////////
////////////////////////////////////////
///////////////////////////////////////

//objeto caja de texto
function linea__texto()
{
//txt,x,y,z,size,color,font,
this.txt="introduce un texto";
this.x="200";
this.y="200";
this.z="1";
this.size="2";
this.color="black";
this.font="arial";



}

