const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config')

const app = express();

// bodyparser - middleware
app.use(express.json());

// db config
const db = config.get('mongoURI');

// connect MongoDB
// userNewUrlParser kay fix ni para sa error nga deprecated
mongoose
    .connect(db, {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected successfully...'))
    .catch(err => console.log(err));

// use routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// serve static assets - productions
if(process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/dist', {
        maxAge: '1y' // caching!
    }));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    });
}

// process env for deployment, 5000 for dev
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));