var arquivo = '100,200-150,200;20';
var valores = arquivo.split(',');  //Transformar em array
var exp = /[,;-]/; 
var valores = arquivo.split(exp);
console.log(valores)   // Padronizou tudo para virgula

var anoMesDia = '2007-12-31';  //Passar para barra
var exp = /-/g  //Encontrar todos os hifens da string
anoMesDia = anoMesDia.replace(exp, '/');
console.log(anoMesDia)



var codigos = 'A121B12112C12212F12G01';  //Tem que separar o codigo
var exp = /[A-Za-z]\d+/g; //Seleciona os codigos
var codigosExtraidos = codigos.match(exp); // forma uma array com os resultados
console.log(codigosExtraidos);

