import * as mongoose from 'mongoose';

let personSchema = new mongoose.Schema({
  name: String,
  group: {
    type: Number,
    default: 0
  }
});

interface IPerson {
  name: string;
  group: number;
}

let personModel = mongoose.model<IPerson & mongoose.Document>(
  'person',
  personSchema,
  'people'
);

personModel.findOne()
  .where('name').equals('Peter')
  .exec().then((person) => {
    person.name;
  });