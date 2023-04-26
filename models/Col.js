const mongoose=require('mongoose');
const {Schema} = mongoose;

const ColSchema=new Schema({
    colname:{
        type: String,
        required: true
    },
    colcity:{
        type: String
    },
});
module.exports=mongoose.model('col',ColSchema);