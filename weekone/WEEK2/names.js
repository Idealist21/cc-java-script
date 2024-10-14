let input = prompt('Type in a name:');
let names =[];

for (;;){
    let input = prompt('Type in a name:\nType "done" to exit a program');
    if(input === 'done'){
        break;
    } else{
        names.push(input);  
    }
    
}

alert(names);