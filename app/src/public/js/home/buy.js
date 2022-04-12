// const sellerID = document.querySelector("#sellerID"),
const buyeradd = document.querySelector("#buyeradd"),
 productid = document.querySelector("#productid"),
 registerBtn = document.querySelector("#button");
 registerBtn.addEventListener("click",buy_function);

console.log("here buyfunction")

function buy_function(){
    const req = {
        buyeradd : buyeradd.value,
        productid : productid.value
    };
    console.log(req);
    fetch("/buy",{
        method : "POST",
        headers :{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
            console.log("상품 구매 요청")
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("상품 구매 요청 중 에러 발생"));
    });


}

