const mongoose = require('mongoose');

const { Schema } = mongoose;
const requiredString = {
  type: String,
  required: true,
};
const logEntrySchema = new Schema({
  title: requiredString, // String is shorthand for {type: String}
  description: String,
}, {
  timestamps: true,
});


const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
