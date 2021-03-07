const express = require('express') // express module을 가져온다
const app = express() // function을 이용해 새로운 express app을 만든다
const port = 5000  // 5000변 port를 백서버로 설정한다

const config = require('./config/key');

const bodyParser = require('body-parser');
const {USER} = require("./models/user");


// application/x-ww-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());


const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! Nice to meet you!')
})
// root directory에 오면 Hello world가 출력되게 한다


app.post('/register', (req, res) => {
  // 회원가입 시 필요한 정보들을 client에서 가져오면 그것들을 데베에 넣어준다
  const user = new USER(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// 5000번 port에서 이 앱을 실행하는 것