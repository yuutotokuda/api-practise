const express = require("express");
const app = express();

app.use(express.json());


app.get("/", (req, res) =>{
    res.send("Emma Watson!");
})

const customers =[
    {title: "Tsuchiya", id: 1},
    {title: "Scarlet", id: 2},
    {title: "Suzu", id: 3},
];


app.get("/api/customers", (req,res) => {
    res.send(customers);
});

app.get("/api/customers/:id", (req,res) =>{
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    res.send(customer);
})

app.post("/api/customers", (req,res) =>{
    const customer = {
        title: req.body.title,
        id: customers.length + 1,
    };
    customers.push(customer);
    res.send(customers);

})

app.put("/api/customers/:id", (req,res) =>{
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    customer.title = req.body.title;
    res.send(customer);
});

app.delete("/api/customers/:id", (req, res)=>{
    const customer = customers.find((c) => c.id === parseInt(req.params.id));
    const index = customers.indexOf(customer);
    customers.splice(index, 1)

    res.send(customer);
})

app.listen(3000, console.log("Server has started on port 3000"));
