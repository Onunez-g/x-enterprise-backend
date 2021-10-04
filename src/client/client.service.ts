import { Injectable } from '@nestjs/common';
import { UpdateClientDto } from './dtos/updateClient.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ClientDocument, Client } from './schemas/client.schema';
import { Model } from 'mongoose';
import { ClientEntity } from './entities/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
  ) {}

  async create(createClientDto: ClientEntity): Promise<Client> {
    const createdClient = new this.clientModel(createClientDto);
    return createdClient.save();
  }

  async findAll(): Promise<Client[]> {
    return this.clientModel.find().exec();
  }

  async findOne(id: string): Promise<Client> {
    return this.clientModel.findById({ _id: id }).exec();
  }

  async update(id: string, updateClientDto: UpdateClientDto): Promise<Client> {
    const updatedClient = this.clientModel.findByIdAndUpdate(
      id,
      updateClientDto,
    );
    return updatedClient.exec();
  }

  async remove(id: string): Promise<Client> {
    return this.clientModel.findByIdAndRemove({ _id: id }).exec();
  }
}
