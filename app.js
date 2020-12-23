require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const coursesRouter = require('./routes/courses');
const ordersRouter = require('./routes/orderPayment');
const mediaRouter = require('./routes/media');
const mentorRouter = require('./routes/mentors');
const chapterRouter = require('./routes/chapters');
const lessonRouter = require('./routes/lessons');
const imageCourseRouter = require('./routes/ImageCourses');
const myCourseRouter = require('./routes/myCourses');
const reviewRouter = require('./routes/review');
const webhookRouter = require('./routes/webhook');
const refreshTokensRouter = require('./routes/refreshTokens');

const verifyToken = require('./middlewares/verifyToken');
const can = require('./middlewares/permission');

const app = express();

app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/orders',verifyToken,can('admin', 'student'), ordersRouter);
app.use('/media',verifyToken,can('admin', 'student'), mediaRouter);
app.use('/refresh-tokens', refreshTokensRouter);
app.use('/mentors',verifyToken,can('admin'), mentorRouter);
app.use('/chapters',verifyToken,can('admin'), chapterRouter);
app.use('/lessons',verifyToken,can('admin'), lessonRouter);
app.use('/image-course',verifyToken,can('admin'), imageCourseRouter);
app.use('/my-course',verifyToken,can('admin', 'student'), myCourseRouter);
app.use('/review',verifyToken,can('admin', 'student'), reviewRouter);
app.use('/webhook', webhookRouter);

module.exports = app;
