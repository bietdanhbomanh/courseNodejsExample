const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const route = require('./routes');
const dbConnect = require('./config/db/');
const methodOverride = require('method-override');
const port = 3000;
const SortMiddleware = require('./CustormMiddlewares/SortMiddleware');

// connect to db
dbConnect();

// set static path for web
app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

// Dùng custorm sort middleware

app.use(SortMiddleware);

// Dùng middleware parse body (data) của phương thức post
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// http logger
// app.use(morgan('combined'));

// template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            sortFunction: (field, sortObject) => {
                const currentField =
                    field == sortObject.field ? sortObject.type : 'default';
                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-caret-bottom',
                    desc: 'oi oi-caret-top',
                };
                const types = {
                    default: 'asc',
                    asc: 'desc',
                    desc: 'asc',
                };
                const type = types[sortObject.type];
                const icon = icons[currentField];

                return ` <a href="?sort&field=${field}&type=${type}"><span
                class="${icon}"></span></a> `;
            },
        },
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// routes init
route(app);

app.listen(port, () => console.log(`App website at port ${port}`));
