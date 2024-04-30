var person= [{
    "name":"Elakkiya",
    "age": "30",
    "gender":"female", 
    "batch":"FSD54WD",}];
    var count=0;
    for(var i=0;i<person.length;i++){
        count++;
        console.log(person[i]);
    }

    var person= [{
        "name":"Elakkiya",
        "age": "30",
        "gender":"female", 
        "batch":"FSD54WD",}];
        for(var a in person){
            console.log(a,person[a]);
        }