const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
    helmet({
        noCache: true,
        permittedCrossDomainPolicies: true
    })
);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
} else if (app.get('env') === 'development') {
    const logger = require('morgan');
    app.use(logger('dev'));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});
