var Score = require('../models/board');
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

it('Testing of User Deletion', async () => {
    const status = await Score.deleteOne({ "score": "4" });
    expect(status.ok).toBe(1);

});



