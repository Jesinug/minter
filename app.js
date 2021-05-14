require('dotenv').config();
const express = require('express');

// DB config
require('./configs/db.config');
const app = express();

// Middleware config
require('./configs/middleware.config')(app);
require('./configs/cors.config')(app);

// Session config + passport
require('./configs/session.config')(app);
require('./configs/passport.config')(app);

const announcementRouter = require('./routes/announcement.routes');
const authRouter = require('./routes/auth.routes');
const userRouter = require('./routes/users.routes')

app.use('/api/announcement', announcementRouter);
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter)

module.exports = app;

