import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAccountUseCase } from "./listAccountUseCase";

class ListAccountController {
  async execute(request: Request, response: Response): Promise<Response> {
    const listAccountUserCase = container.resolve(ListAccountUseCase)
    
    const accounts = await listAccountUserCase.handle()

    return response.status(201).json(accounts)
  }
}

export { ListAccountController };

