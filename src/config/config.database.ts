import { Sequelize } from "sequelize"

const db = new Sequelize('railway', 'postgres', '28kWK6WV3DIiIjTwupLl', {
    host: 'containers-us-west-111.railway.app',//localhost
    dialect: 'postgres',
    logging: false,
    port:6089,
    protocol: 'postgres',
    dialectOptions: {
      ssl: process.env.DB_ENABLE_SSL && {
        require: true,
        rejectUnauthorized: false 
      }
    }
});
export default db; db;
