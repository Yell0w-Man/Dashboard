let name = "stephen";
console.log(name);
let netWorth = 100;
console.log(netWorth);
let age = 33;
console.log(age);
console.log("add", age + netWorth);

console.log(typeof age);
console.log(typeof netWorth);

 console.log(Math.floor(netWorth));
console.log(Math.ceil(netWorth));
console.log(Math.PI)
console.log(Math.min(age,679));
console.log(Math.max(age,686));

let naax = 10;
let call = "Biscuit"
console.log(call + " is " + naax);
console.log(typeof call);

console.log(`${name} is ${age / 3}`);
let message = `${name} is ${age / 3}`;
console.log(message.length);

let isAnything = "cowboys";
console.log(isAnything);

console.log(
    isAnything
    ? "truthy"
    : "falsy"
);

let season = "winter";
let isAnythin = season == "winter";
console.log(isAnythin);


let instrument = new Array();
console.log(instrument);

let toys = ["baddie","sanns","enfriom"];
console.log(toys.length);
console.log(toys.push("hanndd"));
console.log(toys);

let list = [
    1,
    "hello",
    null,
    undefined,
    [4,"five"]
]
console.log(list[4][1]);

let desc = {
    name: 'faith',
    job: 'farmer'
};
console.log(desc.job);
console.log(`The ${desc.name} is a ${desc.job}`);


let fruit = "apple";
console.log(fruit);

 

    
let tools = [];

tools.push({
    type: "drums",
    price:499.99
});

console.log(tools);


let gay = "hanss"
console.log(gay);


function sing(phrase1 = "SHA NA NA ",phrase2 = "GA NA") {
    console.log(phrase1,phrase2);
}
sing();

const add = (a,b) =>  console.log(a + b)
   add(60,12)

const singFrom = (name) => console.log(`la la la ${name}`)

singFrom(`Florence`);

const today = new Date();
const jsBirthday = new Date("9/1/1995");

console.log(today.getFullYear());
console.log(jsBirthday.getFullYear());

const jsAge = today.getFullYear() - jsBirthday.getFullYear();
console.log(jsAge);

const question = document.getElementById("question");
console.log(question.innerText);


const inputName = document.getElementById("name");
const inputAge = document.getElementById("age");
const button = document.querySelector(
    "main>button"
);

button.click = function (){
   const result =
   inputAge.value > jsAge
   ? `${inputAge.value} is older than JS`
   : `${inputAge.value} is younger than JS`;
console.log(result);
    inputName.value = "";
    inputAge.value = "";
};






const daams = "saxx";
console.log(daams);



for(let i = 1; i <= 10; i++){
    console.log(i);
} 

