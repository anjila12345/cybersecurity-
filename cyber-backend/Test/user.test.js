var User = require('../models/User');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/cyber';
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});
afterAll(async () => {
    await mongoose.connection.close();
});
describe(' Testing of User Schema', () => {
    it(' Testing of Adding User', () => {
        const user = {
            'firstname': 'Sara',
            'lastname': 'Bist',
            'email': 'sara@gmail.com',
            'username':'sara123',
            'password': 'sara4444'
        };

        return User.create(user)
            .then((user) => {
                expect(user.username).toEqual('sara123');
            });
    });
});
it('Testing of User Deletion', async () => {
    const status = await User.deleteOne({ "email": "rama@gmail.com" });
    expect(status.ok).toBe(1);

});



