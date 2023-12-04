require('dotenv').config();
import server from "./server";

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});