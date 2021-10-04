import { ClientEntity } from '../entities/client.entity';
import { PartialType } from '@nestjs/mapped-types';
export class UpdateClientDto extends PartialType(ClientEntity) {}
