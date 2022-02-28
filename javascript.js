// Selectors
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const evalBtn = document.querySelector('#eval');
const ceBtn = document.querySelector('#ce');
let arr =[];
let historyArr =[];
let actual = document.querySelector('.result-actual');
let history = document.querySelector('.result-history');

// Functions
class Calc {
    static printActual() {
        let newNumber = this.innerHTML;
        arr.push(newNumber);
        actual.innerHTML = String(arr).replace(/,/g, '');
        eval(String(arr).replace(/,/g, ''));
    }
    // 
    static printOperator() {
        let newOper = this.id;
        arr.push(newOper);
        actual.innerHTML = newOper;
    }
    // 
    static myEval() {
            //previous
            historyArr = arr;
            let previous = String(historyArr).replace(/,/g, '')
            history.innerHTML = previous;
            //result
            let result = eval(String(arr).replace(/,/g, ''));
            result===undefined?actual.innerHTML=0:actual.innerHTML = result;
            arr = [];
            arr.push(result);
        } 
    //    
    static myClear() {
        arr=[];
        actual.innerHTML = 0;
        history.innerHTML = null;
    }
}

numbers.forEach(number=> number.addEventListener('click', Calc.printActual));
operators.forEach(operator=> operator.addEventListener('click', Calc.printOperator));
evalBtn.addEventListener('click', Calc.myEval);
ceBtn.addEventListener('click', Calc.myClear);





