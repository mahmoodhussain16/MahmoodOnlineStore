const express = require('express');



const app = express();
const port = 9000;

app.set("view engine","ejs");
app.set("views", "./views");

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('productDashboard');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});