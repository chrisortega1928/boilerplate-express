let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  //res.send("Hello Express");
  res.sendFile(absolutePath = __dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  if (process.env['MESSAGE_STYLE'] === "uppercase") {
  res.json({
    message: "Hello json".toUpperCase()
  });
} else {
  res.json({
    message: "Hello json"
  });
}
});

console.log("Hello World");






































 module.exports = app;
