const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const Schema = mongoose

const quoteSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 140
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Quote', quoteSchema)
