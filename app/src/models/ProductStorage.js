
const { json } = require("express/lib/response");
const db = require("../config/db");
class ProductStorage{

   
    static async save(productinfo){
        return new Promise((resolve,reject) => {
            console.log("productstorage");
            console.log(productinfo);
            // const query = "INSERT INTO productinfo(sellerID,productName,price,info,date) Values(?,?,?,?,?);"
            const query = "INSERT INTO productinfo(sellerID,productName,price,info) Values(?,?,?,?);"
            db.query(query,[productinfo.sellerID,productinfo.productName,productinfo.price,productinfo.info],(err) =>{
               if(err) reject(`${err}`);
               resolve({success :true});

            });
        });
    }

    static async update(productinfo){
        return new Promise((resolve,reject) => {
            console.log("Here update");
            console.log(productinfo);
            // db.query(`SELECT * FROM productinfo WHERE productID=?`, [productid], function(err, rows){
            const query = "UPDATE productinfo SET productName = ?, price = ?, info = ?, date = now() WHERE productID=?;"
            db.query(query, [productinfo.productName,productinfo.price,productinfo.info,productinfo.productid],(err) =>{
                if(err) reject(`${err}`);
                resolve({success :true});
             });
        });
    }

    static async buy(productinfo){
        return new Promise((resolve,reject) => {
            console.log("Here BUY");
            console.log(productinfo);
            const tmp_state = "Reserved";
            // const query2 = "Select * from productinfo where productID=?;"
            // db.query(query2, [productinfo.productid], function(err,rows){
            //     console.log(rows);
            // });
            // const query = "UPDATE productinfo SET productName = ?, price = ?, info = ?, date = now() WHERE productID=?;"
            // db.query(query, [tmp_state,tmp_state,tmp_state,1],(err) =>{
            //     if(err) reject(`${err}`);
            //     resolve({success :true});
            //  });
            // db.query(`SELECT * FROM productinfo WHERE productID=?`, [productid], function(err, rows){
            const query = "UPDATE productinfo SET buyerAdd = ?, buyerID = ?, state = ? WHERE productID = ?;"
            db.query(query, [productinfo.buyeradd, productinfo.buyerid,tmp_state,productinfo.productid],(err) =>{
                if(err) reject(`${err}`);
                resolve({success :true});
             });
        });
    }
 }

module.exports = ProductStorage;