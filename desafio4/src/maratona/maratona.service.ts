import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { Maratona } from './maratona.entity';

@Injectable()
export class MaratonaService {
  constructor(
    @InjectRepository(Maratona)
    private readonly maratonaRepository: Repository<Maratona>,
  ) {}

  async index(): Promise<Maratona[]> {
    return await this.maratonaRepository.find();
  }

  async create(maratona: Maratona): Promise<Maratona> {
    return await this.maratonaRepository.save(maratona);
  }

  async update(maratona: Maratona): Promise<UpdateResult> {
    return await this.maratonaRepository.update(maratona.id, maratona);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.maratonaRepository.delete(id);
  }
}
