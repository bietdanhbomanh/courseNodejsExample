const mongooes = require('mongoose');

async function conntect() {
    try {
        await mongooes.connect('mongodb://localhost:27017/blog_t', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('ok');
    } catch (error) {
        console.log('failure');
    }
}

module.exports = conntect;
