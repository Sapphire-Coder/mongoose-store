const React = require('react')

class Edit extends React.Component {
    render() {
        return (
            <div>
                <form action = {`/products/${this.props.product._id}?_method=PUT`} method = 'POST'>
                    Name: <input type = 'text' name = 'name' defaultValue = {this.props.product.name}/><br/>
                    Description: <input type = 'text' name = 'description' defaultValue = {this.props.product.description}/><br/>
                    Image: <input type = 'text' name = 'img' defaultValue = {this.props.product.img}/><br/>
                    Price: <input type = 'number' step = '0.01' min = '0' name = 'price' defaultValue = {this.props.product.price}/><br/>
                    Quantity: <input type = 'number' min = '0' name = 'qty' defaultValue = {this.props.product.qty}/><br/>
                    <input type = 'submit' value = 'Update Product'/>
                </form>
            </div>
        )
    }
}

module.exports = Edit