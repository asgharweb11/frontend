
export const userRegex = "^([a-zA-Z0-9.]+@){0,1}([a-zA-Z0-9.])+$"; // آیدی بدون فاصله 

export function currencyFormat(num) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }

export function validateEmail (email) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
}

export function ShortText(text){
    let textArr = text.substr(0,100).split(" ");
    textArr.pop();
    return textArr.join(' ') + ' ...'
}

export function toman(price){
    return new Intl.NumberFormat('ja-JP').format(price);
}