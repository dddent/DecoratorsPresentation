import * as mongoose from 'mongoose';

let personSchema = new mongoose.Schema({
  name: String,
  group: {
    type: Number,
    default: 0
  }
});

let personModel = mongoose.model(
  'person',
  personSchema,
  'people'
);

personModel.findOne()
  .where('name').equals('Peter')
  .exec().then((person: any) => {
    person.name;
  });