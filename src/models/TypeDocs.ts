import { DataTypes, ModelDefined, Optional } from "sequelize";
import db from "../config/config.database";

export type TypeDocsAtributos = {
    id: number,
    name: string,
    description: string
}
type TypeDocsCreateAtributos = Optional<TypeDocsAtributos, 'id'>;
const TypeDocs: ModelDefined<TypeDocsAtributos, TypeDocsCreateAtributos> = db.define("TypeDocs", {
    name: DataTypes.STRING,
    description: DataTypes.STRING(2000)
})
TypeDocs.addScope('defaultScope', {
    order: [['id', 'ASC']],
}, { override: true })
export default TypeDocs;