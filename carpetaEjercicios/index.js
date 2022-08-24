const todayDate = new Date();/* establece hora y dia*/
const dayDate = todayDate.getDate();
const monthDate = dayDate.getMonth();/* devuelve 11*/
const yearDate = dayDate.getFullYear();/* devuelve año actual?*/
let msg ;
function error(){
    if(end_date > dayDate){
        msg ++;
        return(msg);
    }
}
function writeTotalDay(month){
    if(month === 0){
        month =11;
    }
    if(month === Nunpar){
        return 31;
    }else if(month !== Nunpar){
        return  30;
    }else{
        return (añoBisiesto() ? 29 : 28);
    }
};
function añoBisiesto(){
    return ((YEAR % 100 !== 0) && (YEAR % 4 ===0)||(YEAR % 400 === 0));
};




/*const DATE = new Date();
const DAY = DATE.getDate();
const datamunber = DAY.getMonth();
const YEAR = DAY.getFullYear();
 
let date = document.getElementById(`date`);
let month = document.getElementById(`month`);
let year = document.getElementById(year);
let buttonPrevius = document.getElementById(previus);
let buttonNext = documen.getElementById(next);

month.textContent = months[months];
year.textContent = YEAR();

function writeMonth(month){
    for( let i= 0; i<= getTotalDay(month) ; i++){
        date.innerHTML += <div class="calendar">$[i]</div>
    }
};
function writeTotalDay(month){
    if(month === 0){
        month =11;
    }
    if(month === Nunpar){
        return 31;
    }else if(month !== Nunpar){
        return  30;
    }else{
        return (añoBisiesto() ? 29 : 28);
    }
};
function añoBisiesto(){
    return ((YEAR % 100 !== 0) && (YEAR % 4 ===0)||(YEAR % 400 === 0));
};
function starDay(){
    let star = new Date( YEAR , datamunber, 1);
    return (star,getDay() -1);
}
function lastMonth(){
    if(month === 0){
        month --;
    }else{
        month = 11;
        YEAR --;
    }
}
function nextMonth(){
    if(month === 11){
        month ++;
    }else{
        month = 0;
        YEAR ++;
    }
}*/
