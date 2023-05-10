const searchPeople = (name:string|null)=>{
    if(!name){
        console.log("There is nothing to search");
    } 
    if(name) {
        console.log("Searching...");
    }
}

// searchPeople("arif");

const myCarSpeed = (speed:unknown)=> {
    if(typeof(speed) === "number"){
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`Converted speed in kmh^-1 is: ${convertedSpeed}`);
    }
    if(typeof(speed)=== "string"){
        const [value, unit] = speed.split(" ");
        const convertedSpeed = (Number(value) * 1000) / 3600;
        console.log(`Converted speed in kmh^-1 is: ${convertedSpeed}`);
    } else{
        console.log("There is wrong type");
    }
}

myCarSpeed(10);
myCarSpeed("10 kmh^-1");
myCarSpeed(true);

function throwError (message:string):never{
    throw new Error(message);
}

throwError("Error founded");