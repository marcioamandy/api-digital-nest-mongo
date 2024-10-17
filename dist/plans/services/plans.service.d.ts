import { CreatePlanDto } from '../dto/create-plan.dto';
import { UpdatePlanDto } from '../dto/update-plan.dto';
import { PlanRepository } from '../repository/plan.repository';
export declare class PlanService {
    private readonly repo;
    constructor(repo: PlanRepository);
    create(createPlanDto: CreatePlanDto, userId: string): Promise<unknown>;
    findAll(): Promise<import("../interfaces/plan.interface").IPlan[]>;
    findOne(id: string): Promise<import("../interfaces/plan.interface").IPlan>;
    update(id: string, updatePlanDto: UpdatePlanDto): Promise<import("../interfaces/plan.interface").IPlan>;
    delete(id: string): Promise<boolean>;
}
