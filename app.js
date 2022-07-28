require("dotenv").config();
const server = require("./server")

console.log('ucup')
const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`server is running port ${port}`);
})