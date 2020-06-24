import { TAppController, IAppRequest } from "../../types/app";

interface IUserController {
  getUser: TAppController;
  getUserInfo: TAppController;
  createUser: TAppController;
  updateUser: TAppController;
  deleteUser: TAppController;
}

const UserController: IUserController = {
  getUser: async (request) => {
    return { status: 400, payload: "" };
  },
  getUserInfo: async (request) => {
    return { status: 400, payload: "" };
  },
  createUser: async (request) => {
    return { status: 400, payload: "" };
  },
  updateUser: async (request) => {
    return { status: 400, payload: "" };
  },
  deleteUser: async (request) => {
    return { status: 400, payload: "" };
  },
};

export default UserController;
