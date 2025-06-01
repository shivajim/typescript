const converToInteger = (val)=> {
    return parseInt(val);
}

const converToString = (val)=> {
    return val.toString();
}

const calculate = (total, obtained)=> {
    return (obtained/total)*100;
}

const addSymbol = (val) => {
    return `${val}%`;
}


const compose = (conInt, cal, addSymb) => (x, y) => {
    const fv = conInt(x);
    const sv = conInt(y);
    const re = cal(fv, sv);
    return addSymb(re);
};


const calculatePercent = compose(converToInteger, calculate, addSymbol);

const re = calculatePercent("600", "420");

console.log(re);
