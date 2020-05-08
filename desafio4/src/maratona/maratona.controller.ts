import {
  Get,
  Controller,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { MaratonaService } from './maratona.service';
import { Maratona } from './maratona.entity';

@Controller('maratona')
export class MaratonaController {
  constructor(private readonly maratonaService: MaratonaService) {}

  @Get()
  index(): Promise<Maratona[]> {
    return this.maratonaService.index();
  }

  @Post()
  async create(@Body() maratona: Maratona): Promise<Maratona> {
    return this.maratonaService.create(maratona);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() maratona: Maratona): Promise<any> {
    maratona.id = Number(id);
    return this.maratonaService.update(maratona);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<any> {
    return this.maratonaService.delete(id);
  }
}
