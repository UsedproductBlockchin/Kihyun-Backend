
const { json } = require("express/lib/response");
const db = require("../config/db");
class DeliverStorage{

   
    static getDeliver(deliverID){
        //데이터베이스에 접근 후 유저 정보 반환
    return new Promise((resolve,reject) => {
         const query = "SELECT * FROM deliverInfo where deliverrID = ?;";
        db.query(query,[deliverID.deliverID],(err,data) =>{
            if(err) reject(err);
            console.log(data);
           
     });
    });


 }
}
module.exports = DeliverStorage;