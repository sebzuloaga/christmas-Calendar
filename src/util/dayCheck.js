const dateFormatter = (date, opposite) => {

    let dateArray = date.split('/');

    let dd = dateArray[0];
    let mm = dateArray[1]; 
    let yyyy = dateArray[2];

    if (dd < 10) {
        dd = '0' + dd;
    } 
    
    if (mm < 10) {
        mm = '0' + mm;
    } 

    if (opposite === true){
        return `${mm}/${dd}/${yyyy}`
    }else{
        return `${dd}/${mm}/${yyyy}`;
    }
}

export const dayChecker = (day) => {
    let formattedDay = dateFormatter(day);
    return formattedDay;
}

export const getToday = () => {
    let today = new Date().toLocaleDateString();
    let formattedToday = dateFormatter(today);
    return formattedToday;
}
