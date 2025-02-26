import { NODE_ENV, PORT } from '#utils/env.config.js';
import app from './src/app.js';
import { basename } from 'node:path';
import sequelize from '#database/conexion.js';

if (
  basename(import.meta.url) === basename(process.argv[1]) &&
  NODE_ENV !== 'test'
) {
  const port = PORT || 3000;

  await sequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) =>
      console.error('Unable to connect to the database:', error),
    );

  app.listen(port, () => {
    console.log(`App.js is running on port ${port}, mode: ${NODE_ENV}`);
  });
}
