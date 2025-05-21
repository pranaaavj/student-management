import { app } from './app';
import { connectDb } from './db';

const PORT = 3000;

async function startServer() {
  await connectDb();
  app.listen(PORT, () => {
    console.log(`Server started running http://localhost:${PORT}`);
  });
}

startServer();
