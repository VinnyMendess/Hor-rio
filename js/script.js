window.addEventListener('load', calculateTime);

function calculateTime() {
    var date = new Date();
    
    // Pegando os valores de horário e dia
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    
    // Nomes dos dias
    var dayNames = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

    // Convertendo para o formato de 12 horas
    hour = hour % 12;
    hour = hour ? hour : 12; // Se for 0, define para 12
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    // Inserindo os valores no HTML
    document.getElementById("day").innerHTML = dayNames[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("ampm").innerHTML = ampm;

    // Atualiza a cada segundo
    setTimeout(calculateTime, 1000);
}
