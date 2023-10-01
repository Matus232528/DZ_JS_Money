console.log(formatMoney(2565135.5));

function formatMoney(num) {
    let res = String(num);
    const arr =res.split('.');

    const fraction = arr[1];
    const int =arr[0];

    res = int.slice(-3);
    res = int.slice(-6, -3) + ',' + res;
    res = int.slice(-9,-6) +',' + res;

    res += '.' + fraction;
    
    return res;
}