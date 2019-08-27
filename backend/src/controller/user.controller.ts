import { Request, Response } from 'express';
import UserService from '../service/user.service';

const userService = new UserService();

export default class UserController {
  public findAll = async (req: Request, res: Response): Promise<any> => {
    try {
      let response = await userService.findAll();
      return res.status(response.statusCode).json(response.data);
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  };

  public findBySingleParam = async (
    req: Request,
    res: Response,
  ): Promise<any> => {
    try {
      let response = await userService.findBySingleParam(
        Object.keys(req.query)[0],
        req.query['type'],
      );
      return res.status(response.statusCode).json(response.data);
    } catch (err) {
      res.status(500).json({
        message: err,
      });
    }
  };

  public create = async (req: Request, res: Response): Promise<any> => {
    try {
      const response = await userService.create(req.body);
      return res.status(response.statusCode).json(response.data);
    } catch (err) {
      res.status(500).json({
        message: err
      });
    }
  };
}
