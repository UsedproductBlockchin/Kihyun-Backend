const deliverID = document.querySelector("#deliverID"),

registerBtn = document.querySelector("#button");
registerBtn.addEventListener("click",get_deliver);
    

function get_deliver(){
    

    const req = {
        deliverID : deliverID.value,
    };

    fetch("/get_deliver",{
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