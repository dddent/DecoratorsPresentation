import {
  Type,
  Collection,
  Model,
  Default,
  DbObject
} from 'hibergoose';

@Model('person')
@Collection('people')
class PersonDb extends DbObject<PersonDb> {
  @Type(String)
  public name: string;

  @Type(Number)
  @Default(0)
  public group: number;
}

new PersonDb().model.findOne()
  .where('name').equals('Peter')
  .exec()
  .then((person) => {
    person.name;
  });