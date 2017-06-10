//1.引入mongoose模块
let mongoose = require('mongoose');
//2.连接数据库
mongoose.connect('mongodb://127.0.0.1/201702blog');
//3.定义Schema 定义文档的属性名和属性的类型
let UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String
});
// 4.定义模型
let User = mongoose.model('User',UserSchema);
exports.User = User;