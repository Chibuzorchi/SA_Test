import { faker } from '@faker-js/faker';

const user = {
    username: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName()
};

export default user;
