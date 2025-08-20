const {objectID} = require('mongodb');

class UserModel{
    constructor(db){
        this.col = db.collection('users');
    }
}