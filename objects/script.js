const Bike={
    Company : "Kawasaki",
    BikeName : "Zx10r",
    CC: 1000,
    isFaster:true,
};
console.log(Bike.BikeName);

const Products={
    NameofProducts:"Pen Parker Jotter",
    Rate:100,
    discount:"12%Off",
    isindiscount:true,
};console.log(Products);

const Profile={
    Name:"Rahul_Rajput7895",
    Followers:120,
    following:808,
    Posts:9,
    isthisPrivate:true,
};
console.log(typeof Profile["isthisPrivate"]);


let obj={
    item :"Toy",
    cost : 200,
};
console.log("The cost of ",obj.item, "is" ,obj.cost);
console.log(typeof obj["cost"]);
console.log(typeof obj["item"]);

let objj={
    items :"Toy",
    costs : 200,
};

console.log(typeof objj["costs"]);
console.log(typeof objj["items"]);

let objs ={items:"cars", costs:200, model:2017};
let objjs=`the cost of this ${objs.items} is ${objs.costs} and bulid on ${objs.model}`;
console.log(objjs);

