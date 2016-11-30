import { Type, Collection, Model, Default, Index, DbObject } from 'hibergoose';

@Model('person')
@Collection('people')
class PersonDb extends DbObject<PersonDb> {
  @Type(String)
  name: string;

  @Type(Number)
  @Default(0)
  group: number;
}

new PersonDb().model.findOne()
  .where('name').equals('Peter')
  .exec().then((person) => {
    person.name;
  });