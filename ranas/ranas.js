/*
	mueveRana: Mueve la rana (si es posible) cuando el usuario la pincha.
*/
function mueveRana(el)
{
	var id_el = parseInt(el.id, 10); //Parse Integer (Base 10).
	if (document.getElementById(id_el).src.includes("static/L.png")) //Get image L.png, B.png or R.png
	{
//		It is a Left Frog
		
		//Can I move straight forward?
	
		if(document.getElementById(id_el+1).src.includes("static/B.png"))
		{
				
				frog_swap(id_el,id_el+1)
				
		} else {
			
			// Can I jump forward on a frog?
			if(document.getElementById(id_el+2).src.includes("static/B.png")) 
			{
//				alert("Moving the frog forward on a frog!")
				frog_swap(id_el,id_el+2)
			}		
		}
		
	} else { 
		if (document.getElementById(id_el).src.includes("static/R.png")) //Get image L.png, B.png or R.png
		{	
			
		// It's a Rigth Frog
			if(document.getElementById(id_el-1).src.includes("static/B.png"))
			{
				
				frog_swap(id_el,id_el-1)

			} else {
				if(document.getElementById(id_el-2).src.includes("static/B.png"))
			{
//				alert("Moving the frog forward!")
				frog_swap(id_el,id_el-2)
			}		
		}
			
		} else {
			alert("You can not move the blank space!")
		}	
		
	}
	checkWin();
	checkBlock();
}

/*
	frog_swap: función que cambia las posiciones de dos elementos de la tabla visualmente.
*/
function frog_swap(i,j)
{
	i = parseInt(i);
	j = parseInt(j);
	var ranaI = document.getElementById(i);				
	var ranaJ = document.getElementById(j);				
	var srcAux=ranaI.src;
	ranaI.src=ranaJ.src;
	ranaJ.src=srcAux;	
	last_i = i;
	last_j = j;
	if(checkWin() ==0){
		chequeaBloqueo();
	}
}


/*
	refreshPage: reinicia el juego.
*/
function refreshPage(){
    window.location.reload();
}


/*
	checkWin: comproba si el partido ha terminado con victoria para el usuario utilizando
	la tabla de HTML.
*/
function checkWin() {
   
    var derecha = false;
	var izquierda =  false;

	if(document.getElementById("0").src.includes("static/R.png") && 
		document.getElementById("1").src.includes("static/R.png") &&
	 	document.getElementById("2").src.includes("static/R.png")){

		izquierda=true;
	 }


	 if(document.getElementById("4").src.includes("static/L.png") && 
		document.getElementById("5").src.includes("static/L.png") &&
	 	document.getElementById("6").src.includes("static/L.png")){

		derecha=true;
	 }




    if (derecha && izquierda) {
        setTimeout(()=>{
            alert("Has ganado!");
        },1)
    }
}

/*
	checkBlock: comproba si alguna rana se encuentra bloqueada, 
	por lo que no hay porque seguir el partido.
*/
function checkBlock(){
	if(	document.getElementById(0).src.includes("L.png") &&
		document.getElementById(1).src.includes("R.png") && 
		document.getElementById(2).src.includes("R.png")){
		
		setTimeout(()=>{
			alert("Juego bloqueado!");
		},1)	
	}

	if(	document.getElementById(4).src.includes("L.png") &&
		document.getElementById(5).src.includes("L.png") && 
		document.getElementById(6).src.includes("R.png")){

		setTimeout(()=>{
			alert("Juego bloqueado!");
		},1)	

	}
	
	for(var i=0;i<=3;i++){
		if(	
			document.getElementById(i).src.includes("L.png") &&
			document.getElementById(i+1).src.includes("L.png") &&
			document.getElementById(i+2).src.includes("R.png") && 
			document.getElementById(i+3).src.includes("R.png")){

			setTimeout(()=>{
				alert("Juego bloqueado!");
			},1)	
		}
	}
}

/*
	algoritmo_hardcoded: resuelve el partido siempre que las ranas empiezen
	desde las posiciones: L L L B R R R, finalizando en: RRRBLLL
*/
function algoritmo_hardcoded(){
	setTimeout(()=>{ frog_swap(3,2); },1000);
	setTimeout(()=>{ frog_swap(2,4); },2000);	
	setTimeout(()=>{ frog_swap(4,5); },3000);	
	setTimeout(()=>{ frog_swap(5,3); },4000);	
	setTimeout(()=>{ frog_swap(3,1); },5000);	
	setTimeout(()=>{ frog_swap(1,0); },6000);	
	setTimeout(()=>{ frog_swap(0,2); },7000);	
	setTimeout(()=>{ frog_swap(2,4); },8000);	
	setTimeout(()=>{ frog_swap(4,6); },9000);	
	setTimeout(()=>{ frog_swap(6,5); },10000);	
	setTimeout(()=>{ frog_swap(5,3); },11000);	
	setTimeout(()=>{ frog_swap(3,1); },12000);
	setTimeout(()=>{ frog_swap(1,2); },13000);
	setTimeout(()=>{ frog_swap(2,4); },14000);
	setTimeout(()=>{ frog_swap(4,3); },15000);
	setTimeout(()=>{ checkWin(); },16000);			
}
		