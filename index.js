import express from 'express'
import { PORT } from './src/Config/serverConfig.js';
import connectDB from './src/Config/dbConfig.js';
const app = express();

app.get('/ping', (req, res) => {
      console.log("req body",req.body);
      
    return res.json({  
        message:"abbas"
    })
})

app.listen(PORT, ()=>{
    console.log(`server is connect on port ${PORT}`);
    connectDB();
})
