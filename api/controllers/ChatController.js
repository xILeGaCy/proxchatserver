var db=require('../../dbconnection');

var ChatController={
    getAllChats:function(callback){
        return db.query("Select * from chats",callback);
    },
    getChatById:function(id,callback){
        return db.query("select * from chats where id=?",[id],callback);
    },
    addChat:function(Chat,callback){
        return db.query("Insert into chats values(?,?,?)",[Chat.Id],callback);
    },
    deleteChat:function(id,callback){
        return db.query("delete from chats where id=?",[id],callback);
    }
};
module.exports=ChatController;