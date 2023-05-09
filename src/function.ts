// normal function
function add(num1:number, num2:number):number {
    return num1 + num2;
}

// arrow function

const addArrow = (num1:number, num2:number):number=> num1 + num2;


const arr = [1, 2, 3];
const newArr = arr.map((el:number)=> el * el);

const person = {
    name:"Arif",
    amount:10,
    addAmount(money:number):number{
        return this.amount + money;
    }
}