function escopo () {
    function daysOfWeek (day) {
        const Day = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
        return Day[day];
    }
    function monthsOfYear (month) {
        const Month = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
        return Month[month];
    }
    function zeroAEsquerda (num) {
        return num >= 10 ? num : `0${num}`;
    }
    function timeFormat (time) {
        const hour = zeroAEsquerda(time.getHours());
        const minutes = zeroAEsquerda(time.getMinutes());
        
        return `${hour}:${minutes}`;
    }
    function DateFormat (Date) {
        const weekDay = Date.getDay();
        const day = zeroAEsquerda(Date.getDate());
        const month = Date.getMonth();
        const year = zeroAEsquerda(Date.getFullYear());

        return `${daysOfWeek(weekDay)}, ${day} de ${monthsOfYear(month)} de ${year}`;
    }
    function message () {
        const data = new Date ();
        const timeMessage = timeFormat (data); 
        const dateMessage = DateFormat (data);
        const section = document.querySelector('.box');
        const p1 = p('horas');
        const p2 = p('data');
        p1.innerHTML = timeMessage;
        p2.innerHTML = dateMessage;
        section.appendChild(p1);
        section.appendChild(p2);
    }
    function criaP () {
        const p = document.createElement('p');
        return p;
    } 
    function p (classs) {
        const p = criaP();
        p.classList.add(classs);
        return p;
    }
    message();
}

escopo();