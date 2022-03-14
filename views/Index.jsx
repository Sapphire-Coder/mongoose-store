const React = require('react')

class Index extends React.Component {
    render() {
        const { products } = this.props
        return(
            <body>
                <h1>Store name and products</h1>
                <h2><a href = '/products/new'>Submit new item</a></h2>
                <div>
                    {
                        products.map((product, i) =>{
                            return(
                                <div key = {i}>
                                    <h3>{product.name}</h3>
                                    <a href = {`/products/${product.id}`}><img src = {product.img}/></a><br/>
                                    {product.price}<br/>
                                    {`${product.qty} in stock.`}
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