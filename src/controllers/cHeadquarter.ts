import { Request, Response } from "express";
import { ExecuteResponce } from "../global/response";
import { mHeadquarter } from "../mapper/headquarter/mHeadquarter";
import { HeadquarterMapper } from "../mapper/HeadquarterMapper";
import { HeadquarterAtributos } from "../models/Headquarter";
import sHeadquarter from '../services/sHeadquarter';
const mapper = new HeadquarterMapper();
class HeadQuarterController {
    constructor() {
    }
    public getAllHeadquarter(_req: Request, _res: Response) {
        try {
            const headquarters = sHeadquarter.getAllHeadquarter();
            headquarters.then((h: any) => {
                let result = {
                    "status": true,
                    "data": [undefined]
                }
                result.data = [];
                h.forEach((x: any) => {
                    let mapeado: any = {};
                    mapper.map<HeadquarterAtributos, mHeadquarter>(x, mapeado);
                    result.data.push(mapeado);
                })
                //console.log(result);

                _res.status(200).json(result);
            })
        } catch (error) {
            ExecuteResponce.makeResponseException(_res, error);
        }
    }
    public getHeadquarter(_req: Request, _res: Response) {
        try {
            const id = _req.params.id;
            const headquarter = sHeadquarter.getHeadquarter(id);
            headquarter.then((h: any) => {
                let result = {
                    "status": true,
                    "data": h
                }
                //console.log(result);
                _res.status(200).json(result);
            })
        } catch (error) {
            ExecuteResponce.makeResponseException(_res, error);
        }
    }

    public async updateHeadquarter(_req: Request, _res: Response) {
        try {
            let data = _req.body;
            //let data = JSON.parse(Helpers.getFirstPropertyOfObject(_req.body));
            //let image = Helpers.getFirstPropertyOfObject(_req.body);
            let image =_req.body.file;
            let id = _req.params.id;
            await sHeadquarter.updateHeadquarter(id, data, image);
            let result = {
                "status": true,
                "message": {
                    "code": "H002",
                    "text": "Sede - Modificada exitosamente!"
                }
            }
            //console.log(result);
            _res.status(200).json(result);
        } catch (error) {
            ExecuteResponce.makeResponseException(_res, error);
        }
    }
    public async createHeadquarter(_req: Request, _res: Response) {
        try {
            //let image = Helpers.getFirstPropertyOfObject(_req.params);
            let image =_req.body.file;
            //console.log(_req.body)
            //let data = JSON.parse(Helpers.getFirstPropertyOfObject(_req.body));
            let data = _req.body;
            await sHeadquarter.createHeadquarter(data, image);
            let result = {
                "status": true,
                "message": {
                    "code": "H002",
                    "text": "Sede - Creada exitosamente!"
                }
            }
            //console.log(result);
            _res.status(200).json(result);
        } catch (error) {
            ExecuteResponce.makeResponseException(_res, error);
        }
    }
}
const headQuarterController = new HeadQuarterController();
export default headQuarterController;