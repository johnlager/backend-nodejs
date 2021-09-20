import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDepositUseCase } from "./createDepositUseCase";

class CreateDepositController {
  async execute(request: Request, response: Response): Promise<Response> {
    const { id, value } = request.body;

    const createDeposit = container.resolve(CreateDepositUseCase)
 
    const depositTransaction = await createDeposit.handle(id, value)

    return response.status(201).json(depositTransaction)
  }
}

export { CreateDepositController };

