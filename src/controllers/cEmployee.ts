import { Request, Response } from "express";
import Helpers from "../global/helpers";
import { ExecuteResponce } from "../global/response";
import { mEmployee } from "../mapper/employee/mEmployee";
import { EmployeeMapper } from "../mapper/EmployeeMapper";
import { EmployeeAtributos } from "../models/Employee";
import sEmployee from '../services/sEmployee';
const mapper = new EmployeeMapper();
class EmployeeController {
    constructor() {
    }
    public getPagedEmployee(_req: Request, _res: Response) {
        try {
            const range = (_req.query.range as string) || '[0,9]';
            const [start, end] = JSON.parse(range)
            const limit = end - start + 1
            const query = _req.query;
            let employee = sEmployee.getPagedEmployee(start, limit, query);
            employee.then((e: any) => {
                let result = {
                    "status": true,
                    ...e
                }
                //console.log(result);
                _res.status(200).json(result);
            })
        } catch (error) {
            ExecuteResponce.makeResponseException(_res, error);
        }
    }
    public getAllEmployee(_req: Request, _res: Response) {
        try {
            const query = _req.query;
            let employee = sEmployee.getAllEmployee(query);
            employee.then((e: any) => {
                let result = {
                    "status": true,
                    "data": e
                }
                //console.log(result);

                _res.status(200).json(result);
            })
        } catch (error) {
            ExecuteResponce.makeResponseException(_res, error);
        }
    }
    public getEmployee(_req: Request, _res: Response) {
        try {
            const id = _req.params.id;
            const employee = sEmployee.getEmployee(id);
            employee.then((e: any) => {
                let result = {
                    "status": true,
                    "data": e
                }
                //console.log(result);
                _res.status(200).json(result);
            })
        } catch (error) {
            ExecuteResponce.makeResponseException(_res, error);
        }
    }
    public getEmployeeByTypeEmployee(_req: Request, _res: Response) {
        try {
            const { typeEmployeeId } = _req.params;
            let employees = sEmployee.getEmployeeByTypeEmployeeId(typeEmployeeId);
            employees.then((e: any) => {
                let result = {
                    "status": true,
                    "data": e
                }
                //console.log(result);
                _res.status(200).json(result);
            })
        } catch (error) {
            ExecuteResponce.makeResponseException(_res, error);
        }
    }
    public destroyEmployee(_req: Request, _res: Response) {
        try {
            let id = _req.params.user_id;
            sEmployee.destroyEmployee(id);
            _res.status(200).json('Delete Employee');
        } catch (error) {
            ExecuteResponce.makeResponseException(_res, error);
        }
    }
    public async updateEmployee(_req: Request, _res: Response) {
        try {
            let fields = _req.body;
            let file = _req.body.file;
            let id = _req.params.user_id;
            await sEmployee.updateEmployee(id, fields, file);
            let result = {
                "status": true,
                "message": {
                    "code": "I002",
                    "text": "Personal - Modificado exitosamente!"
                }
            }
            //console.log(result);
            _res.status(200).json(result);
        } catch (error) {
            ExecuteResponce.makeResponseException(_res, error);
        }
    }
}
const employeeController = new EmployeeController();
export default employeeController;