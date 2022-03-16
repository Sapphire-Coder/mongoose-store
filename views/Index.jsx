const React = require('react')

class Index extends React.Component {
    render() {
        const { products } = this.props
        return(
            <body>
                <link rel = 'stylesheet' href = '/css/app.css'/>
                <div id = 'header'>
                    <h1>Products</h1>
                    <h2><a href = '/products/new'>Submit a new item</a></h2>
                </div>
                <div id = 'container'>
                    {
                        products.map((product, i) =>{
                            return(
                                <div key = {i} className = 'games'>
                                    <h3>{product.name}</h3>
                                    <a href = {`/products/${product.id}`}><img src = {product.img} className = 'inImg'/></a><br/>
                                    Price: ${product.price}<br/>
                                    {product.qty > 0 ? `${product.qty} in stock` : 'Out of Stock'}
                                </div>
                            )
                        })
                    }
                </div>
            </body>
        )
    }
}

module.exports = Index