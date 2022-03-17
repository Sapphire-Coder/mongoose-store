const React = require('react')

class Show extends React.Component {
    render() {
        const { product } = this.props
        return (
            <div id = 'showPg'>
                <title>{product.name}</title>
                <link rel = 'stylesheet' href = '/css/app.css'/>
                <h1>{product.name}</h1>
                <img src = {product.img} className = 'shImg'/><br/>
                Price: ${product.price} Quantity: {product.qty > 0 ? product.qty : 'Out of Stock'} <br/>
                <h3>Product description:</h3>
                {product.description}<br/><br/>
                <a href = '/products'>Back</a> <a href = {`/products/${product._id}/edit`}>Edit</a><br/><br/>
                <form action = {`/products/${product._id}?_method=DELETE`} method = 'POST'>
                    <input type = 'submit' value = 'Delete this product'/>
                </form>
                <br/>
                <form action = {`/products/${product._id}?_method=PATCH`}  method = 'POST'>
                    {product.qty > 0 ? <input type = 'submit' value = 'Buy'/> : null}
                </form>
            </div>
        )
    }
}

module.exports = Show