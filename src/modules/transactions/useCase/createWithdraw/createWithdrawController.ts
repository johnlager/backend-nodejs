import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateWithdrawUseCase } from "./createWithdrawUseCase";

class CreateWithdrawController {
  async execute(request: Request, response: Response): Promise<Response> {
    const { id, value } = request.body;

    const createWithdraw = container.resolve(CreateWithdrawUseCase)
 
    const depositTransaction = await createWithdraw.handle(id, value)

    return response.status(201).json(depositTransaction)
  }
}

export { CreateWithdrawController };

