function getChartById(res,id){
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(({name,gender,species,origin,image,status})=>{
        const character = {
            id,
            name,
            gender,
            species,
            origin: origin.name,
            image,
            status
        }
        return res.writeHead(200, {"content-type": "application/json"})
        .end(JSON.stringify(character))
    })
    .catch(error=>{
        return res.writeHead(500, {"content-type": "text/plain"})
        .end(error.message)
    })


}
module.exports = getCharById;




