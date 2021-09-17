import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAccountByIdUseCase } from "./getAccountByIdUseCase";

class GetAccountByIdController {
  async execute(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getAccountByIdUseCase = container.resolve(GetAccountByIdUseCase)
    
    const account = await getAccountByIdUseCase.handle(id)

    return response.status(201).json(account)
  }
}

export { GetAccountByIdController };

