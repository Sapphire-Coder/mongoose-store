const React = require('react')
class New extends React.Component {
    render() {
        return (
            <div id = 'newPg'>
                <title>New Page</title>
                <h1>New Product</h1>
                <link rel = 'stylesheet' href = '/css/app.css'/>
                <h2>Submit a New Product</h2>
                <form action = '/products' method = 'POST'>
                    Name: <input type = 'text' name = 'name'/><br/>
                    Description: <input type = 'text' name = 'description'/><br/>
                    Image: <input type = 'text' name = 'img'/><br/>
                    Price: <input type = 'number' step = '0.01' min = '0' name = 'price'/><br/>
                    Quantity: <input type = 'number' min = '0' name = 'qty'/><br/><br/>
                    <input type = 'submit' value = 'Create Product'/>
                </form>
            </div>
        )
    }
}

module.exports = New