alert('Hello World');
console.log('Hello World');

// let, const

const age=30;

console.log(age);

// String, Numbers, Boolean, null, undefined

const name='John';
const rating= 4.5;
const isCool= true;
const x= null;
const y= undefined;
let z;

console.log(typeof name);
console.log(typeof x);
console.log(typeof isCool);

const person= {

    firstName:'John',
    lastName:'Doe',
    age:'30',
    hobbies:['music','movies','sports'],
    address:{
        streets:'50 main st',
        city:'Boston',
        state:'MA'
    }
}

console.log(person);
console.log(person.name, person.address);
console.log(person.hobbies[1]);

const todos=[
{
    id:1,
    text: 'Take out trash',
    isCompleted: true
},
{
    id:2,
    text:'Meeting with boss',
    isCompleted: true
},
{
    id:3,
    text: 'Dentist appt',
    isCompleted: false
}

];

const todoJSON= JSON.stringify(todos);
console.log(todoJSON);

// For
for(let i=0; i<todos.length; i++){
    console.log(todos[i].text);
}
for(let i=0; i<10;i++){
    console.log(i);
    console.log('For Loop Number:${i}');
}

// forEach, map, filter
todos.map(function(todo) {
    console.log(todo.text);
});

todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText= todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

const todoCompleted= todos.filter(function(todo) {
    return todo.isCompleted=== true;
}).map(function(todo) {
    return todo.text;
})
console.log(todoCompleted);





// While
let i=0;
while(i<10){
    console.log('While Loop Number: ${i}');
    i++;
}