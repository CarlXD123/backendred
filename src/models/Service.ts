import { DataTypes, ModelDefined, Optional } from "sequelize";
import db from "../config/config.database";

export type ServiceAtributos = {
    id: number,
    name: string,
    descriptioin: string
}
type ServiceCreateAtributos = Optional<ServiceAtributos, 'id'>;
const Service: ModelDefined<ServiceAtributos, ServiceCreateAtributos> = db.define("Services", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING
})
export default Service;