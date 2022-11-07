import { QueryTypes } from 'sequelize';
import db from '../config/config.database';
import { saveFile } from '../global/fileSystem';
import Headquarter from '../models/Headquarter';
class HeadquarterServicios {
    constructor() {
    }
    public static async getAllHeadquarter() {
        return await Headquarter.findAll();
    }
    public static async getHeadquarter(id: any) {
        const headquarter = await Headquarter.findByPk(id);
        if (!headquarter) {
            //console.log("Error");
        }
        return headquarter;
    }
    public static async HeadquarterByIdquery(UserId: any) {
        let headquarter = (await db.query<any>(`SELECT h.*
        FROM public."Employees" e
        left join public."Headquarters" h on h.id = e."HeadquarterId"
        where "UserId"=${UserId}`, { type: QueryTypes.SELECT }))[0];
        if (!headquarter) {
            //console.log("Error");
        }
        return headquarter;
    }
    public static async updateHeadquarter(id: any, data: any, img: any) {
        if (img) {
            const headquarterUrl = saveFile(img, "headquarter");
            data.urlImage = headquarterUrl;
        }
        await Headquarter.update(data, { where: { id: id } });
    }
    public static async createHeadquarter(data: any, img: any) {
        if (img) {
            const headquarterUrl = saveFile(img, "headquarter");
            data.urlImage = headquarterUrl;
        }
        await Headquarter.create(data);
    }
}
export default HeadquarterServicios;