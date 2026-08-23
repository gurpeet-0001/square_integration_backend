import app from './app.js';
import { dbConnection } from './db/db.js';

const PORT = process.env.PORT || 5001;

dbConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`);
  });
})
