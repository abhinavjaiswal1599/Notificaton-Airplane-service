const express=require('express')

const {PORT} =require('./config');
const {ServerConfig,Logger}=require('./config');
const apiRoutes=require('./routes')
const app=express();

app.use('/api',apiRoutes);


app.listen(ServerConfig.PORT,()=>{
    console.log(`listening on port:${ServerConfig.PORT}`);
})
