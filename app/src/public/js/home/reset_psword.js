const token = document.querySelector("#token"),
new_psword = document.querySelector("#new_psword");
resetBtn = document.querySelector("#button");
resetBtn.addEventListener("click",reset_psword);

function reset_psword(){

    const req = {
        token : token.value,
        new_psword : new_psword.value,
    };

    fetch("/reset_psword",{
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
                alert("비밀번호가 변경 되었습니다. 다시 로그인하세요")
                location.href = "/login" 
                                  
        }else{
            alert("일치하는 토큰을 찾을 수 없습니다");
       }
    })
    .catch((err) => {
        console.error(new Error("비밀번호 리셋 중 에러 발생"));
    });
}
