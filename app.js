const express = require("express");
const logger = require("morgan");

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(logger("dev"));

app.all("/", (req, res) => {
    console.log(`Headers: \n${JSON.stringify(req.headers, null, 2)}\n`);
    console.log(`Query: \n${JSON.stringify(req.query, null, 2)}\n`);
    console.log(`Body: \n${JSON.stringify(req.body, null, 2)}\n`);

    res.status(200).send(true);
});

app.listen(port, () => {
    console.log("API is Online!");
    console.log(`==> Port: ${port}`);
});
