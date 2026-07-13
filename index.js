const express = require('express'); // importing express
const app = express();
const PORT = 3000;


app.get("/", (req, res)=> {
    res.status(200).json({
        message: "Home Page :-)"
    })
})

app.listen(PORT,()=>{
    console.log(`API is up and runnig on http://localhost:${PORT}`);
    
})