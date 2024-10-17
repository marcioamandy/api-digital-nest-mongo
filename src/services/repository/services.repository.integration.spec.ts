// src/services/repository/services.repository.integration.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicesRepository } from './services.repository';
import { ServiceSchema } from '../entities/service.entity';
import { NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { IService } from '../interfaces/service.interface';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

describe('ServicesRepository (Integration)', () => {
  let repository: ServicesRepository;
  let mongod: MongoMemoryServer;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(uri),
        MongooseModule.forFeature([{ name: 'Service', schema: ServiceSchema }]),
      ],
      providers: [ServicesRepository],
    }).compile();

    repository = module.get<ServicesRepository>(ServicesRepository);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongod.stop();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('findOne', () => {
    it('should return a service if found', async () => {
      const service = repository.createServiceInstance({
        name: 'Test Service',
        cost: 100,
        createAt: new Date(),
        updateAt: new Date(),
        deleted: false,
      });
      await service.save();

      const result = await repository.findOne(service._id.toString());
      expect(result).toBeDefined();
      expect(result.name).toBe('Test Service');
    });

    it('should throw a NotFoundException if service not found', async () => {
      const id = new mongoose.Types.ObjectId().toString();
      await expect(repository.findOne(id)).rejects.toThrow(NotFoundException);
    });

    it('should throw an InternalServerErrorException on error', async () => {
      const id = 'invalid-id';
      await expect(repository.findOne(id)).rejects.toThrow(
        InternalServerErrorException,
      );
    });
  });
});
