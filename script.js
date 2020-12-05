let dayList = ['Domingo','Segunda', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const content = document.querySelector(".content");

setInterval(()=> {
    let date = new Date();
    let day = dayList[date.getDay()];
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    if(minute.toString().length == 1) {
        minute = `0${minute}`;
    }

    if(seconds.toString().length == 1) {
        seconds = `0${seconds}`;
    }

    return (
        content.innerHTML = `Dia ${day} do mês ${month} do ano de ${year}.
        Horário ${hour}:${minute}:${seconds}`
    )
}, 1000);