// YOUR CODE HERE
const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const JSONRESPONSE = { "ping": "pong" }
const PRODUCTS = require('./data/db.json')



app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
app.use(express.urlencoded({ extend:false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send(JSONRESPONSE)
});

app
    .route('/store')
    .get((req,res) => { res.status(200).send(PRODUCTS)})
    .post((req, res)=> { 


        // id - the new id of the purchase should be equal to one more than the current number of existing purchases
        // name - the name of the user making the purchase
        // email - the email of the user making the purchase
        // order - the shoppingCart value sent in the POST request
        // total - the calculated total of the order
        // createdAt - a string representation of the date and time when the order was placed

        let id = PRODUCTS.purchases.length +1
        let name = req.body.user[0]
        let email = req.body.user[1]
        let order = req.body.shoppingCart
        let total = 0
        let createdAt = new Date().toLocaleString()

        
        
        const updateSubtotal = (cart) => {
            let currentCart = cart;
            let cartTotal = 0;
        
            // Iterate through each item in the cart and sum total cost by item price and quantity selected
            currentCart.forEach((item) => {
              cartTotal += item.quantity * PRODUCTS.products[item.itemId - 1].price;
            });
            total = cartTotal;
          };

        updateSubtotal(req.body.shoppingCart);


        let reciept = `Thank you for your purchase ${name}! Your order of $${total} worth of items at ${createdAt} from the student store was successful. You will be recieving a confirmation email to ${email} shortly.`


        let purchase = {"id": id, "name": name, "email":email,"order": order, "total": total,"createdAt": createdAt, 'reciept': reciept}

        PRODUCTS.purchases.push(purchase)
        res.status(201).send(reciept)});


app.get('/purchases', (req,res) => {
    
    res.status(200).send(PRODUCTS.purchases)
})

  app.get('/store/:productId', (req, res) => {
    res.status(200).send(PRODUCTS.products.find((item) => item.id === parseInt(req.params.productId)))
  });
  
module.exports = app;