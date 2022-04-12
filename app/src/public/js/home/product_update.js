// const sellerID = document.querySelector("#sellerID"),
const productName = document.querySelector("#productName"),
    price = document.querySelector("#price"),
    info = document.querySelector("#info"),
    // date = new Date(+new Date() + 3240 * 10000).toISOString().replace("T", " ").replace(/\..*/, '');
    productid = document.querySelector("#productid"),

 registerBtn = document.querySelector("#button");
 registerBtn.addEventListener("click",update_function);


function update_function(){
    const req = {
        productName : productName.value,
        info : info.value,
        price : price.value,
        productid : productid.value
    };

    console.log(req);
    fetch("/product_update",{
        method : "POST",
        headers :{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
            console.log("상품수정완료")
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("상품 수정 중 에러 발생"));
    });


}

