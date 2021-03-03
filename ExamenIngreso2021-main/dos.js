/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA,
los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota
 */
function mostrar()
{
  let nombre;
  let tipoCurs;
  let cantMat;
  let sexo;
  let notaPromedio;
  let promedioMax = 0;
  let nombreProMax;
  let edad;
  let edadMin;
  let pregunta;
  let nombreLibre;
  let acumM = 0;
  let acumF = 0;
  let contM = 0;
  let contF = 0;
  let promedioF;
  let promedioM;
  let flag = 1;
  let matMax=0;
  let edadMM;// nombre y edad del q cursa Mas Materias
  let nombreMM;
  let flagA = 1;
  let flagD = 1;
  let flagCF = 1;
  let flagCM = 1;
  let flagB = 1;

  do{

    nombre = prompt("Ingrese nombre del alumno: ");

    tipoCurs = prompt("Ingrese nombre de cursada de alumno libre/presencial/remota: ");

    cantMat = parseInt(prompt("Ingrese cantidad de materias del alumno: "));
    while(isNaN(cantMat) || cantMat<0 || cantMat>8){
      cantMat = parseInt(prompt("Error. Ingrese cantidad de materias del alumno: "));
    }

    sexo = prompt("Inrese sexo del alumno femenino/masculino o no binario: ");

    notaPromedio = parseInt(prompt("Ingrese nota promedio del alumno"));
    while(isNaN(notaPromedio) || notaPromedio<0 || notaPromedio>10){
      notaPromedio = parseInt(prompt("Dato invalido. Ingrese nota promedio del alumno"));
    }

    edad = parseInt(prompt("Ingrese edad del alumno: "));
    while(isNaN(edad) || edad<=0){
      edad = parent(prompt("Dato invalido. Ingrese edad del alumno: "));
    }
      if(flag==1){
      edadMin=edad;
      }

    if(sexo=="femenino"){
      if(notaPromedio>promedioMax){
        nombreProMax=nombre;
        flag=0;
      }
      acumF+=notaPromedio;
      contF++;
      flagCF=0;
    }
    if(sexo=="masculino"){
      acumM+=notaPromedio;
      contM++;
      flagCM=0;
    }

    if(edad<=edadMin && tipoCurs=="libre"){
      edadMin=edad;
      nombreLibre=nombre;
      flagB=0;
    }

    if(cantMat>matMax && tipoCurs!="remota"){
      matMax=cantMat;
      edadMM=edad;
      nombreMM=nombre;
      flagD=0;
    }

    pregunta = prompt("Desea ingresar otro alumno?" );

  }while(pregunta=="s");

  promedioF = acumF /  contF;
  promedioM = acumM /  contM;
if(flagA==0){
  console.log("a) El nombre del mejor promedio que no es masculino: " + nombreProMax);
} else {
  console.log("a) No existe el mejor promedio que no es masculino");

}
if(flagB==0){
  console.log("b) El nombre del mas joven de los alumnos entre los que la dan libre " + nombreLibre);
}
else{
  console.log("b) No existe nombre del mas joven de los alumnos entre los que la dan libre ");

}
  if(flagCM==0){
  console.log("c) El promedio de notas de alumnos de sexo masculino es: " + promedioM);
}
else{
    console.log("c) No existe promedio de notas de alumnos hombres ");

  }
  if(flagCF==0){
  console.log("c) El promedio de notas de alumnos de sexo femenino es: " + promedioF);
}
else{
    console.log("c) No existe promedio de notas de alumnas mujeres");

  }
  if(flagD==0){
  console.log("d) El alumno que cursa mas materias de forma no remota es: " + nombreMM + " de " + edadMM + " años");
}
else{
    console.log("d) No existe alumno que cursa mas materias de forma no remota");

  }
}
