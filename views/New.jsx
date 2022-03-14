const React = require('react')
class New extends React.Component {
    render() {
        return (
            <body>
                <h1>Submit a New Product</h1>
                <form action = '/products' method = 'POST'>
                    Name: <input type = 'text' name = 'name'/><br/>
                    Description: <input type = 'text' name = 'description'/><br/>
                    Image: <input type = 'text' name = 'img'/><br/>
                    Price: <input type = 'number' step = '0.01' min = '0' name = 'price'/><br/>
                    Quantity: <input type = 'number' min = '0' name = 'qty'/><br/>
                    <input type = 'submit' value = 'Create Product'/>
                </form>
            </body>
        )
    }
}

module.exports = New