import express from 'express'
import itemList from './data/item_list.json' assert {type: "json"}


const app = express()


//Product List
app.get("/api/products/list", (req, res) => {

    const size = req.query.size
    const page = req.query.page

    const start = (page - 1) * size
    const end = size * page

    const result = itemList.slice(start, end)
    const newRes = result.map(item=>{
        return{
            id:item.id,
            item_name:item.item_name,
            item_image: item.item_image,
            item_price: item.item_price
        }
    })

    res.send(newRes)
})



//Product Detail
app.get("/api/products/:id", (req, res) => {

    const id = req.params.id - 1
    res.send(itemList[id])
})




app.listen(3000, () => {
    console.log('Server is running')
})