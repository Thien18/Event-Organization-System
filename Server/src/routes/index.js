// Import các tệp route cho các bảng khác
const auth = require('./auth')
const user = require('./user_router')


const index = (app) => {
    app.use("/", auth);
    app.use("/", user);
   
    



};

module.exports = index;
