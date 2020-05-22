// requiring mongoose //
const mongoose = require("mongoose");


const Schema = mongoose.Schema;

// constructing a mongoose schema of information we will need to have // 
const transactionSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter a name for transaction"
    },
    value: {
      type: Number,
      required: "Enter an amount"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);
// preparing constructor that will hold all the schema information // 
const Transaction = mongoose.model("Transaction", transactionSchema);
// exporting the schema to be used somewhere else // 
module.exports = Transaction;
