const express = require("express");
const bodyParser = require("body-parser");

const messageController = require("./controllers/messages_controller");

const app = express();
app.use(express.static(__dirname + "./../public/build"));
app.use(bodyParser.json());

app.post("/api/messages", messageController.create);
app.get("/api/messages", messageController.read);
app.put("/api/messages/:id", messageController.update);
app.delete("/api/messages/:id", messageController.destroy);

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
