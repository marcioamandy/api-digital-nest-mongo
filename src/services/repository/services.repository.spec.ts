// src/services/repository/services.repository.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { ServicesRepository } from './services.repository';
import {
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { IService } from '../interfaces/service.interface';

const mockServiceModel = {
  findById: jest.fn(),
  find: jest.fn(),
  save: jest.fn(),
  findByIdAndUpdate: jest.fn(),
  deleteOne: jest.fn(),
};

describe('ServicesRepository', () => {
  let repository: ServicesRepository;
  let serviceModel: Model<IService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ServicesRepository,
        {
          provide: getModelToken('Service'),
          useValue: mockServiceModel,
        },
      ],
    }).compile();

    repository = module.get<ServicesRepository>(ServicesRepository);
    serviceModel = module.get<Model<IService> & typeof mockServiceModel>(getModelToken('Service'));
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('findOne', () => {
    it('should return a service if found', async () => {
      const id = 'valid-id';
      const service = {
        id,
        name: 'Test Service',
        cost: 100,
        createAt: new Date(),
        updateAt: new Date(),
        deleted: false,
      };
      (serviceModel.findById as jest.Mock).mockResolvedValue(service);

      const result = await repository.findOne(id);
      expect(result).toEqual(service);
    });

    it('should throw a NotFoundException if service not found', async () => {
      const id = 'valid-id';
      (serviceModel.findById as jest.Mock).mockResolvedValue(null);

      await expect(repository.findOne(id)).rejects.toThrow(NotFoundException);
    });

    it('should throw an InternalServerErrorException on error', async () => {
      const id = 'valid-id';
      (serviceModel.findById as jest.Mock).mockRejectedValue(
        new Error('Some error'),
      );

      await expect(repository.findOne(id)).rejects.toThrow(
        InternalServerErrorException,
      );
    });
  });
});
