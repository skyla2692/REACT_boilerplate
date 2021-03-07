const express = require('express') // express module을 가져온다
const app = express() // function을 이용해 새로운 express app을 만든다
const port = 5000  // 5000변 port를 백서버로 설정한다


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://skylalee:Rage9327@boilerplate.eguu4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})
// root directory에 오면 Hello world가 출력되게 한다

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// 5000번 port에서 이 앱을 실행하는 것