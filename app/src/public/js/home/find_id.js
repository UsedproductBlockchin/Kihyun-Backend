const name = document.querySelector("#name"),
 phone_num = document.querySelector("#phone_num"),
registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click",find_id);

function find_id(){

    if(!name.value){
        return alert("정보를 입력하세요");
        }

    const req = {
        name : name.value,
        phone_num : phone_num.value,
    };

    fetch("/find_id",{
        method : "POST",
        headers :{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                alert("찾으시는 아이디는 " +res.msg+"입니다");
        }else{
            alert("아이디를 찾을 수 없습니다");
        
        }
    })
    .catch((err) => {
        console.error(new Error("아이디 찾기 중 에러 발생"));
    });


}