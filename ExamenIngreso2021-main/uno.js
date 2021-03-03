/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos
 */
function mostrar()
{
	let nombreProd; //nombre del producto
	let precio;
	let cantidad;
	let tipoInf; // tipo de inflamable
	let marca;
	let promedioA;
	let promedioI;
	let promedioQ;
	let acumA=0;
	let acumI =0 ;
	let acumQ = 0;
	let contA = 0;
	let contI = 0;
	let contQ = 0;
	let tipoMaX ; // tipo mas caro de los productos
	let precioMaX=0;
	let marcaMax;
	let tipoMaXInf;// el inflamable con mas cantidades
	let acumIi = 0;// acumulador de inflamables
	let acumIc = 0;
	let acumIe = 0;
	let acumIAc = 0;

	

	for(let i = 0; i<2 ; i++ ){

		nombreProd = prompt("Ingrese nombre del producto: ");
		while(nombreProd!="ALCOHOL" && nombreProd!="IAC" && nombreProd!="QUAT"){
			nombreProd = prompt("Dato invalido. Ingrese nombre del producto: ");
		}

		precio = parseInt(prompt("Ingrese precio del producto: "));
		while(isNaN(precio) || precio<100 || precio>300){
			precio = parseInt(prompt("Error. Ingrese precio del producto"));
		}

		cantidad = parseInt(prompt("Ingrese cantidad del prodcuto: "));
		while(isNaN(cantidad) || cantidad<=0 || cantidad>1000){
			cantidad = parseInt(prompt("Error. Ingrese cantidad del prodcuto: "));
		}

		tipoInf = prompt("Ingrese de que tipo de inflamable es: ");
		while(!(tipoInf=="ignifugo" || tipoInf=="combustible" || tipoInf=="explosivo")){
			tipoInf = prompt("Dato invalido. Ingrese de que tipo de inflamable es: ");
		}

		marca = prompt("Ingrese marca del producto");

		if(nombreProd=="ALCOHOL"){
			if(precio>precioMaX){
				precioMaX=precio;
				marcaMax=marca;
				tipoMaX=nombreProd;
			}
			acumA+=cantidad;
			contA++;
		}else if(nombreProd=="IAC"){
			if(precio>precioMaX){
				precioMaX=precio;
				marcaMax=marca;
				tipoMaX=nombreProd;
			}
			acumA+=cantidad;
			contI++;
		}else if (nombreProd=="QUAT"){
			if(precio>precioMaX){
				precioMaX=precio;
				marcaMax=marca;
				tipoMaX=nombreProd;
			}
			acumQ+=cantidad;
			contQ++;
		}

		if(tipoInf=="combustible"){
			acumIc+=cantidad;
		}else if(tipoInf=="explosivo"){
			acumIe+=cantidad;
		}else if(tipoInf=="ignifugo"){
			acumIi+=cantidad;
		}

		if(nombreProd=="IAC" && precio<200){
			acumIAc+=cantidad;
		}
		

	}

	promedioA =acumA/ contA;
	promedioI =acumI/ contI;
	promedioQ =acumQ/ contQ;

	if(acumIi>acumIc && acumIi>acumIe){
		tipoMaXInf="ignifugo";
	}else if(acumIe>=acumIi && acumIe>acumIc){
		tipoMaXInf="explosivo";
	}else if(acumIc>acumIi && acumIc>acumIe){
		tipoMaXInf="combustible";

	}

	
	console.log("a) promedio de alcoholes: " + promedioA);
	console.log("a) promedio de IAC: " + promedioI);
	console.log("a) promedio de QUAT: " + promedioQ);
	console.log("b) El tipo de inflamable con más cantidad de unidades en total de la compra es " + tipoMaXInf);
	console.log("c) La cantidad de unidades de IAC con precios menos a 200 que se compraron en total es de: " + acumIAc);
	console.log("d) la marca mas cara es " + marcaMax + " del producto de " + tipoMaX);
	
}
