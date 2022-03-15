const React = require('react')

class Show extends React.Component {
    render() {
        const { product } = this.props
        return (
            <body>
                <h1>{product.name}</h1>
                <img src = {product.img}/><br/>
                Price: ${product.price} Quantity: {product.qty > 0 ? product.qty : 'Out of Stock'} <br/>
                <h3>Product description:</h3>
                {product.description}<br/>
                <a href = '/products'>Back</a> <a href = {`/products/${this.props.product._id}/edit`}>Edit</a><br/>
                <form action = {`/products/${this.props.product._id}?_method=DELETE`} method = 'POST'>
                    <input type = 'submit' value = 'Delete this product'/>
                </form>
                <form action = {`/products/${this.props.product._id}?_method=PATCH`}  method = 'POST'>
                    {product.qty > 0 ? <input type = 'submit' value = 'Buy'/> : null}
                </form>
            </body>
        )
    }
}

module.exports = Show