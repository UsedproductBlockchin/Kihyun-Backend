"use srtict"

const id = document.querySelector("#userid"),
name = document.querySelector("#name"),
 psword = document.querySelector("#password"),
 confirmPsword = document.querySelector("#confirm-password"),
 phone_num = document.querySelector("#phone_num"),
 email = document.querySelector("#email"),
 
registerBtn = document.querySelector("#button");
registerBtn.addEventListener("click",register);

function register(){

    if(!id.value){
        return alert("아이디를 입력하세요");
        }
    if(psword.value !== confirmPsword.value){
        return alert("비밀번호가 일치하지 않습니다");
    }
    const req = {
        usertype : usertype.value,
        userid : userid.value,
        name : name.value,
        password : password.value,
        // phone_num : phone_num.value,
        // email : email.value,
    };

    fetch("/register",{
        method : "POST",
        headers :{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                console.log("회원가입완료")
            location.href = "/login";
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    });


}

