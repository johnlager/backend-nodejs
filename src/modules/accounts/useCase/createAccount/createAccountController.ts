import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAccountUseCase } from "./createAccountUseCase";

class CreateAccountController {
  async execute(request: Request, response: Response): Promise<Response> {
    const { account_type: accountType } = request.body;

    const createAccount = container.resolve(CreateAccountUseCase)
 
    const account = await createAccount.handle({ accountType })
  
    return response.status(201).json(account)
  }
}

export { CreateAccountController };
