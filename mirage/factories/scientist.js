import { Factory } from 'miragejs';
import faker from 'faker';

export default Factory.extend({
  name: () => `${faker.name.firstName()} ${faker.name.lastName()}`,
});
