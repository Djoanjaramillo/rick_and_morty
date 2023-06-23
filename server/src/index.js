const http = require("http")
const getChartById = require("./controllers/getChartById")

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');


   if (req.url.includes("/rickandmorty/character")){
    const {id} = req.url.split("/").at(-1)

    getChartById(res,+id)
   }

})


.listen(3001, "localhost");