// //PART 1 -->> Comparing two JSON objects

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

//Comparing only data

console.log(obj1.name==obj2.name);

console.log(obj1.age==obj2.age);

//Comparing data and data type

console.log(obj1.name===obj2.name);

console.log(obj1.age===obj2.age);


//PART 2 -- >> Printing country flag in console using API link

var xhr = new XMLHttpRequest();

xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send();

xhr.onload = function() {

    if(xhr.status >= 200 && xhr.status <= 300 ){
        let data = JSON.parse(this.response);

        for (let i=0;i<data.length;i++){
            console.log(`Country: ${data[i].flag}`);
        };
    }else{
        console.log("Data is not available");
    }
};


//PART 3 -- >> Printing all countries name, region, sub region and population

var xhr = new XMLHttpRequest();

xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send();

xhr.onload = function() {

    if(xhr.status >= 200 && xhr.status <= 300 ){
        let data = JSON.parse(this.response);

        for (let i=0;i<data.length;i++){
            console.log(`Country: ${data[i].name}`);
            console.log(`Region: ${data[i].region}`);
            console.log(`Sub-region: ${data[i].subregion}`);
            console.log(`Population: ${data[i].population}`);
        };
    }else{
        console.log("Data is not available");
    }
};