const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Quote schema
const quoteSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  address2: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zipCode: {
    type: Number,
  },
  doorKit: {
    type: String,
  },
  finishColor: {
    type: String,
  },
  doorDesign: {
    type: String,
  },
  handle: {
    type: String,
  },
  delivery: {
    type: String,
  },
  installation: {
    type: String,
  },
  doorMeasurements: {
    type: String,
  },
  date: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

// sets the date parameter eqaul to the current or local time
// created_at and updated_at were added to app to index entries to require effeciency
// created_at and updated_at are stored in default which is in milliseconds

Quote.pre("save", function (next) {
  now = new Date();
  this.date = now;
  if (!this.date) {
    this.date = now;
  }
  next();
});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;
