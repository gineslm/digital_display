<!doctype html>
<html lang="es" >
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="pagina para la creacion de rotulos para etv.">
		<title>digital display</title>
		<link rel="stylesheet" type="text/css" href="estilos.css">
		<script src="js/objeto.js" language="javascript" type="text/javascript"></script>

		<link href="https://fonts.googleapis.com/css?family=Merriweather|Roboto+Slab&display=swap" rel="stylesheet"> 



<?php 	
		session_start();

/*
de entrada antes de llegar aqui deberian de pasar varias cosas
usuario logeado 
pagina de gestion de usuario
menu: displays / perfil usuario / informacion legal
displays: crear display / display1 / display2 ...

un display es la union de varias Diapositivas (pantallas)
cada diapositica carga imagenes-texto-video

1. id-
2. proyecto nombre -alpha
3. diapositiva n -x (orden dentro del proyecto)
4. tiempo visionado -
5. campos
6. textos array[] (los textos deben tener formato parrafo, 7. permitir albergar saltos de linea, y estar separados x un simbolo q no pueda usarse en su value)
8. imagenes array[] (separadas por "," la primera por defecto sera la imagen de fondo ) 
  

cada texto tiene unos parametros a almacenar:
array [1][1]=value
array [1][2]=position x
array [1][3]=position y
array [1][4]=position z
array [1][5]=size
array [1][6]=color
array [1][7]=width
array [1][8]=font
array [1][9]=efect



llegados a este punto el usuario a entrado en la pagina de una diapositiva de un proyecto, (si es existente cargara los datos de los campos) si es nueva empezara vacia.

*/








?>

	</head>
	<body>
		<div id='panel_control'>
			<div div='user'>
				Digital dysplay logo + nombre usuario + proyectos de usuario
			</div>
			<div div='proyecto'>
				Proyecto: <input id='id_name_proyect' title='Escriba el nombre del proyecto' type='text' value='titulo del proyecto' onchange="change_value(this.id)"></input>
				<span title='Numero de diapositivas'>ND</span>
				<span id='nd_total' title='Numero de diapositivas del proyecto'>0</span>
				<span id='nd_espec' title='Diapositiva selecionada'>0</span>

				
				<button onclick="play_pro()">PLAY</button>
			</div>
			<div div='diapo'>
				Diapositiva: <input id='id_name_diapo' title='Escriba un titulo para la diapositiva' type='text' value='titulo de la diapositiva' onchange="change_value(this.id)"></input><br>
				<button title='crea multiples lineas de texto con la información necesaria.' onclick="new_line()">crear texto</button>
				<button title='pon una imagen de fondo que se asocie a tus productos o servicios.' onchange="insert_img()">cambiar fondo</button>
				<button title='puedes insertar más imagenes como por ejemplo, tu logotipo.' onchange="insert_img()">insertar imagen</button>
				
				
				
				tiempo: <input id='input_time' type='number' step='1' min ='3' value='6'  > transición: </input><select><option value="corte">corte</option><option value="fade">fade</option></select>

				<button onclick="restart_pro()">BORRAR</button>
				<button onclick="save_pro()">GUARDAR</button>
				
			</div>
		</div>
	<div id='div_background'>

		<!--
	<div id='div_titulo' class='div_texto' onmouseover="ver_buttons('buttons_bar')"  onmouseleave="hide_buttons('buttons_bar')">
		<span id='id_text' class='text' style='font-size:2em' >Introduce un texto</span>
		<div id="buttons_bar" class='buttons_bar'>
			<button onclick="txt_write('id_text')"><img src="ico_write.png" alt="x" /></button>
			<button onclick="mover_div('div_titulo')" ><img src="ico_move.png" alt="x" /></button>
			<button onclick="change_size(0.1,'id_text')"><img src="ico_size_up.png" alt="x" /></button>
			<button onclick="change_size(-0.1,'id_text')"><img src="ico_size_down.png" alt="x" /></button>
			<input type="color" name="text_color" value="#000000" onchange="change_color('id_text',this.value)">
			<select onchange="select_font('id_text',this.value)">
				<option value='Roboto Slab'>Roboto</option>
				<option value='Merriweather'>Merriweather</option>
				<option value='Anton'>Anton</option>
				<option value='Lobster'>Lobster</option>
				<option value='Abril Fatface'>Abril</option>
				<option value='Satisfy'>Satisify</option>
				<option value='Permanent Marker'>Permamnet</option>
				<option value='Patua One'>Patua</option>
				<option value='Caveat'>Cavear</option>
				<option value='Alfa Slab One'>Alfa Slab</option>
				<option value='Cookie'>Cookie</option>



				
			</select>
		</div>
	</div>
-->



</div>






			

	</body>
</html>