// normal function
function add(num1:number, num2:number=10):number {
    return num1 + num2;
}

// arrow function

const addArrow = (num1:number, num2:number):number=> num1 + num2;


const arr = [1, 2, 3];
const newArr = arr.map((el:number)=> el * el);

const person:{
    name:string;
    amount:number;
    addAmount(money:number):number
} = {
    name:"Arif",
    amount:10,
    addAmount(money:number):number{
        return this.amount + money;
    }
}


// spreed operator

const friends = ["Binu", "Arif", "Shahin"];

const [wife] = friends;

console.log(wife);

const bestFriend = {
    fullName:"Shahin",
    age:22,
    gender:"male",
    mobile:"01786824152"
};

const {fullName, mobile, gender, age} = bestFriend;

console.log(mobile, fullName, gender, age);

const newFriends = ["Nurani", "Nazrul", "Borhan", "Naim", "Shuvo"];

friends.push(...newFriends);

// console.log(friends);

const greetingFriend = (friends:string[]) => {
    friends.forEach(friend => {
        console.log(`Hi ${friend}`);
    })
}

greetingFriend(friends);