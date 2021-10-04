import { Address } from './address';

export class ClientEntity {
  id!: string;
  name!: string;
  lastName!: string;
  identity!: string;
  identityType!: string;
  phone!: string;
  email!: string;
  addresses!: Address[];
}
