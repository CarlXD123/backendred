import { DataTypes, ModelDefined, Optional } from "sequelize";
import db from "../config/config.database";

export type AppointmentAtributos = {
    id: number,
    AppointmentId: number,
    ExaminationId: number,
}
type AppointmentCreateAtributos = Optional<AppointmentAtributos, 'id'>;
const AppointmentDetail: ModelDefined<AppointmentAtributos, AppointmentCreateAtributos> = db.define("AppointmentDetails", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    AppointmentId: DataTypes.INTEGER,
    ExaminationId: DataTypes.INTEGER,
})

export default AppointmentDetail;