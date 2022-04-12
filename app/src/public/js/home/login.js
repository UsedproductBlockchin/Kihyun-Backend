"use srtict"

const userid = document.querySelector("#userid"),
password = document.querySelector("#password"),
 loginBtn = document.querySelector("#button");
loginBtn.addEventListener("click",login);

function login(){
    const req = {
        userid : userid.value,
        password : password.value,
    };
    console.log(req);
    fetch("/login",{
        method : "POST",
        headers :{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    }) // 다시 response 보낸거 여기서 받아줌
        .then((res) => res.json())
        .then((res) => {
            if(res.success == 1){
                //로그인 success시 이동할 페이지
                console.log("login 성공",res.success );
                location.href = "/product_register";
            }else if(res.success == 2){
                console.log("login 성공",res.success );
                location.href = "/product_list_all";
            }else if(res.success == 3){
                console.log("login 성공",res.success );
                location.href = "/deliver_list";
            }
            else{
                alert(res.msg);
            }
    })
    .catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
    });


}

