function Calc() {
    // Inicialização das variaveis
    var x = 0;
    var y = 0;
    var i = 0;
    var resp = 0;
    var day = 'Hoje é ';
//************************************************ */
    // Comando IF
    // console.log(x)
    // if (x > 2){
    //     resp = x + 10 * 2
    // }
    // else{
    //     resp = 5 + 15 * 2
    // }
    //console.log(resp)
//************************************************ */
    // Comando Case
    switch (new Date().getDay()) {
        case 0:
            day += "Domingo.";
            break;
        case 1:
            day += "Segunda.";
            break;
        case 2:
            day += "Terça.";
            break;
        case 3:
            day += "Quarta.";
            break;
        case 4:
            day += "Quinta.";
            break;
        case 5:
            day += "Sexta.";
            break;
        case  6:
            day += "Sabado.";
        default:
        day += 'Feriado!!!'
    }
    console.log(day)
    resp = day
//*************************************************** */
    // Comando FOR
    // for( x = 0; i < 10; i++ ){
    //     x += 1;
    // console.log(x + ' ; ' + i + '< 10 ; ' + i )
    // }
    //  resp = x
    // console.log(resp)
//************************************************ */
    // Comando While
    // i = 15;
    // x = 2;
    // while(x < i){
    //     resp += 1;
    //     x++;
    //     i--;
    // console.log(x + ' < ' + i + '  ' + resp  )
    // }    


    document.getElementById("Resposta").innerHTML = resp;
}