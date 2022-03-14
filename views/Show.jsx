const React = require('react')

class Show extends React.Component {
    render() {
        const { product } = this.props
        return (
            <body>
                <h1>{product.name}</h1>
                <img src = {product.img}/><br/>
                Price: {product.price} Quantity: {product.qty} <br/>
                Product description: <br/>
                {product.description}
            </body>
        )
    }
}

module.exports = Show