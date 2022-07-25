

const product=[
    {
        productName: "iPhone",
        Price:54000,
        brand:"Apple",
    },
  
    {
        productName: "iPhone",
        Price:40000,
        brand:"Apple",
    },


    {
        productName: "A7",
        Price:20000,
        brand:"Samsung",
    },


    {
        productName: "note10",
        Price:18000,
        brand:"Redmi",
    },



    {
        productName: "charger",
        Price:3000,
        brand:"Oneplus",
    },


    {
        productName: "Airpods",
        Price:24000,
        brand:"realme",
    },


    
];
console.log(product);

let productuser =prompt("Enter Brand Name");

const filterproduct= product.filter(rsp => {

if(productuser == rsp.brand){
    console.log(rsp);
}

});

const userPrice= Number(prompt("enter price "));

const find = product.filter(qr =>{
    if( userPrice >15000 && qr.Price > 15000){
        console.log(qr);
    }
     else if(userPrice<15000 && qr.Price<15000){
        console.log(qr);    
    }
});

//product.filter(function(x) { return x.Price>=20000 && x.Price<=15000});


