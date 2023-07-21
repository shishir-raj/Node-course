const sayHi = (name) => {
    console.log('Hi I am  '+name)

} 
const var1= "This var1 is from sayHi module";

module.exports = {sayHi,var1};

//or you can simply export the function and use it directly
// module.exports = sayHi
//thats it

function fun(){
    console.log("This is a function and when you require this file, this will run automatically")
}

fun()
