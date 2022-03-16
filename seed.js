require('dotenv').config()
const Product = require('./models/products')

const db = require('./models/db')

const seedProducts = [
    {
        name: 'Elden Ring',
        description: 'Third person open world action RPG.',
        img: 'https://i.ytimg.com/vi/OT8if6DXOFQ/maxresdefault.jpg',
        price: 59.99,
        qty: 0
    }, 
    {
        name: 'Demon Souls',
        description: 'Third person action RPG with an emphasis on difficulty which resulted in becoming it\'s own genre.',
        img: 'https://cdn.onebauer.media/one/media/5fb5/3a35/7836/1f6c/cbda/6399/demon%20souls%20head%20copy.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill',
        price: 49.99,
        qty: 10
    }, 
    {
        name: 'Dark Souls 3',
        description: 'Third person action RPG created and developed by the team that produced Demon Souls.',
        img: 'https://assets2.ignimgs.com/2015/06/15/dark-souls-3-buttonjpg-a5759a.jpg',
        price: 19.99,
        qty: 15
    },
    {
        name: 'Minecraft',
        description: 'First/third person sandbox game with crafting, building, and exploring.',
        img: 'https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png',
        price: 29.99,
        qty: 20
    }
]

const seed = async () => {
    await Product.deleteMany({})
    await Product.insertMany(seedProducts)
}

seed().then(() => {
    db.close()
})