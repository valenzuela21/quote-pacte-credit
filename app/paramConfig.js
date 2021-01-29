
let  service1 = object_name.service1;
let  service2 = object_name.service2;
let  service3 = object_name.service3;

let  month = object_name.month;

let  defaultPresing = object_name.sliderprecing;
let description = object_name.description;

let arrayService1 = [];

for(let value1  in service1){
    arrayService1.push({[value1] : service1[value1]});
}

service1 = Object.assign({}, ...arrayService1);

let arrayService2 = [];

for(let value2 in service2){
    arrayService2.push({[value2] : service2[value2]});
}

service2 = Object.assign({}, ...arrayService2);

let arrayService3 = [];

for(let value3 in service3){
    arrayService3.push({[value3] : service3[value3]});
}

service3 = Object.assign({}, ...arrayService3);


let arrayDescription = [];

for(let value4 in description){
    arrayDescription.push({[value4] : description[value4]})
}

description = Object.assign({}, ...arrayDescription);

export {service1, service2, service3, month, defaultPresing, description}
