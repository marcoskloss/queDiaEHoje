let dayList = ['Domingo','Segunda', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const content = document.querySelector(".content");

setInterval(()=> {
    let mainDate = new Date();
    let day = dayList[mainDate.getDay()];
    let date = mainDate.getDate();
    let month = mainDate.getMonth();
    let year = mainDate.getFullYear();
    let hour = mainDate.getHours();
    let minute = mainDate.getMinutes();
    let seconds = mainDate.getSeconds();

    if(minute.toString().length == 1) {
        minute = `0${minute}`;
    }

    if(seconds.toString().length == 1) {
        seconds = `0${seconds}`;
    }

    return (
        content.innerHTML = `${day}, dia ${date} do mês ${month} do ano de ${year}.
        Horário ${hour}:${minute}:${seconds}`
    )
}, 1000);