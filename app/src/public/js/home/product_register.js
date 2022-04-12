// const moment = require('./moment');
// const sellerID = document.querySelector("#sellerID"),
const productName = document.querySelector("#productName"),
    price = document.querySelector("#price"),
    info = document.querySelector("#info"),
    date = new Date().toLocaleString();
//  productID = document.querySelector("#productID"),

//  date = moment().format('YYYY-MM-DD H:mm:ss');
//  date = new Date();



 registerBtn = document.querySelector("#button");
 registerBtn.addEventListener("click",register_function);


function register_function(){


     
    const req = {
        // sellerID : sellerID.value,
        productName : productName.value,
        info : info.value,
        price : price.value,
        date : date,
    };

    console.log(req);
    fetch("/product_register",{
        method : "POST",
        headers :{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
            console.log("상품등록완료")
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("상품 등록 중 에러 발생"));
    });


}

