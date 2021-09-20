import { Request, Response } from "express";
import { container } from "tsyringe";
import { } from '../../repository/ITransactionRepository';
import { ListTransactionsUseCase } from "./listTransactionsUseCase";

class ListTransactionsController {
  async execute(request: Request, response: Response): Promise<Response> {
    const listTransactionsUseCase = container.resolve(ListTransactionsUseCase)
    
    const transactions = await listTransactionsUseCase.handle()

    return response.status(201).json(transactions)
  }
}

export { ListTransactionsController };

