
const email = document.querySelector("#email"),
id = document.querySelector("#id");
registerBtn = document.querySelector("#button");
registerBtn.addEventListener("click",find_psword);



function find_psword(){

    if(!email.value){
        return alert("정보를 입력하세요");
        }

    const req = {
        id : id.value,
        email : email.value,
    };

    fetch("/find_psword",{
        method : "POST",
        headers :{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
        .then((res) => res.json())
        //여기서 response받음
        .then((res) => {
            if(res.success){
                fetch("/make_token",{
                    method : "POST",
                    headers :{
                        "Content-Type" : "application/json",
                    },
                    body : JSON.stringify(res),
    
                })         
        }else{
            alert("일치하는 비밀번호를 찾을 수 없습니다");
       }
    })


    .catch((err) => {
        console.error(new Error("비밀번호 찾기 중 에러 발생"));
    });
}

