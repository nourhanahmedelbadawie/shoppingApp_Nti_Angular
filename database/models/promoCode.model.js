const mongoose = require('mongoose');
const mongooseSchema = new mongoose.Schema({
    promoCode:{
        require:true,
        type:String,
        trim:true,
        unique:true
    },
    startDate:{
        require:true,
        type:Date,
    },
    endDate:{
        require:true,
        type:Date,
        validate: [dateValidator, 'Start Date must be less than End Date']

    },
    discountValue:{
        require:true,
        type:Number,
    }
})
//validation function
function dateValidator(value) {
    return this.startDate <= value;
}
const PromoCode = mongoose.model('PromoCode',mongooseSchema);
module.exports = PromoCode;