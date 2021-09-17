import { AccountType } from '../infra/typeorm/entity/Account';

interface ICreateAccountDTO {
  accountType: AccountType;
}

export { ICreateAccountDTO };
