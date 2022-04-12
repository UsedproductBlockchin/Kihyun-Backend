"use strict";

const res = require("express/lib/response");
const DeliverStorage = require("./DeliverStorage");


class Deliver{
    constructor(body){
        this.body = body;
    }
    
    async get_deliver(){
        const client = this.body;
 
        try{
        const response = await DeliverStorage.getDeliver(client);
        return response;
        }catch(err){
            console.error(err);
        }
    }
    

    
    // async product_register() {      
    //         const product = this.body;
    //         var itemInfo = product;
    //         var recID = crypto.randomBytes(20).toString('hex');
    //         var itemInfo = { s};
    //         const response = itemTable.createRecord(itemInfo);ellerID:product.name,itemID:product.name,name:product.name,price:product.name,desc:product.name,timestamp:Date.now()
    
            
    //     }
       
    //     modifyItem() {
    //         const product = this.body;
    //         var itemID = product.name;
    //         var itemList = itemTable.getRecordSet("itemID",itemID);
    //         if(itemList.length > 0) {
    //             itemList[0].name = product.name;
    //             itemList[0].price = product.price;
    //             itemList[0].desc = product.info;
    //             itemList[0].timestamp = Date.now();
    //         }
    //         itemTable.updateRecord(itemList[0]);
    //     }
    
    
    //     registerNewItemState() {
    //         const product = this.body;
    //         var recID = crypto.randomBytes(20).toString('hex');
    //         var itemStateInfo = {sellerID:product.name,itemID:recID,state:ITEM_STATE_ONSALE,buyerID:product.name,purchaseDate:Date.now(),address:product.price,deliverymanID:null};
    //         itemStateTable.createRecord(itemStateInfo);
    //     }
    //     initTable() {
        
    //         // 판매자 테이블
    //         sellerTable.createRecord({partyID:"seller1",partyPW:"1234",name:"손흥민",balance:100000});
    //         sellerTable.createRecord({partyID:"seller2",partyPW:"1234",name:"박지성",balance:200000});
            
    //         // 구매자 테이블
    //         buyerTable.createRecord({partyID:"buyer1",partyPW:"1234",name:"장동건",balance:300000});
    //         buyerTable.createRecord({partyID:"buyer2",partyPW:"1234",name:"고소영",balance:400000});
        
    //         // 운송자 테이블
    //         deliverymanTable.createRecord({partyID:"deliveryman1",partyPW:"1234",name:"김민재"});
    //         deliverymanTable.createRecord({partyID:"deliveryman2",partyPW:"1234",name:"박완규"});
            
    //         // 물품정보 테이블
    //         // registerNewItem("seller1","Nikon Camera",500000,"hahahaha");
    //         // registerNewItem("seller1","Sony Camera",800000,"hohohoho");
    //         console.log("완료")
    //         // 판매상태 테이블
    //     }
    // }
    
    // module.exports = Product
    

}


module.exports = Deliver;

