var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PersonSchema = new Schema(
  {
    first_name: {type: String, required: true, maxlength: 100},
    family_name: {type: String, required: true, maxlength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
  }
);


// Virtual for author's full name
PersonSchema.virtual('name').get(function () {
  return this.family_name + ', ' + this.first_name;
});

// Virtual for author's lifespan
PersonSchema.virtual('lifespan').get(function () {
  return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString();
});

// Virtual for author's URL
PersonSchema.virtual('url').get(function () {
  return 'catalog/person/' + this._id;
});

//Export model
module.exports = mongoose.model('Person', PersonSchema);