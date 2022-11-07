import { Sequelize } from "sequelize"

const db = new Sequelize('d7qoicdc04he4k', 'postgres', '58c366e665f06a9f11c0177a88fe24ac7475cedb3d1107eb34055911926af44f', {
    host: 'ec2-44-205-177-160.compute-1.amazonaws.com',//localhost
    dialect: 'postgres',
    logging: false,
    port:5432,
    protocol: 'postgres',
    dialectOptions: {
      ssl: process.env.DB_ENABLE_SSL && {
        require: true
      }
    }
});
export default db;