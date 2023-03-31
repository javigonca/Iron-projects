const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/iron-projects';

mongoose.connect(MONGODB_URI)
.then(() => console.info(`Successfully connect to the database ${MONGODB_URI}`))
.catch(() => console.error(`an error ocurred tryning to connect to de database`, error))
