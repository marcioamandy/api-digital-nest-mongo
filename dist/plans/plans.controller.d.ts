import { PlanService } from './services/plans.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
export declare class PlanController {
    private readonly planService;
    constructor(planService: PlanService);
    create(createPlanDto: CreatePlanDto, request: any): Promise<unknown>;
    findAll(): Promise<import("./interfaces/plan.interface").IPlan[]>;
    findOne(id: string): Promise<import("./interfaces/plan.interface").IPlan>;
    update(id: string, updatePlanDto: UpdatePlanDto): Promise<import("./interfaces/plan.interface").IPlan>;
    delete(id: string): Promise<boolean>;
}
