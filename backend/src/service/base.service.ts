export default class BaseService {
  public findAll = async (schema: any): Promise<any> => {
    try {
      const users = await schema.find().sort({createdAt: -1});
      if (!users) {
        return {
          data: [],
          statusCode: 404,
        };
      }
      return {
        statusCode: 200,
        data: users,
      };
    } catch (err) {
      return {
        statusCode: 500,
        data: err
      };
    }
  };

  public findBySingleParam = async (schema: any, params: any): Promise<any> => {
    try {
      const user = await schema.find(params).sort({createdAt: -1});
      if (!user) {
        return {
          statusCode: 404,
          data: `${schema.toString()} not found`,
        };
      }

      return {
        statusCode: 200,
        data: user,
      };
    } catch (err) {
      return {
        statusCode: 500,
        data: err
      };
    }
  };

  public create = async (schema: any, body: any): Promise<any> => {
    try {
      const user = await schema.create(body);
      if (!user) {
        return {
          statusCode: 400,
          data: `Error saving ${schema.toString()}`,
        };
      }

      return {
        success: true,
        statusCode: 200,
        data: user,
      };
    } catch (err) {
      return {
        statusCode: 500,
        data: err,
      };
    }
  };
}
