import { Model } from 'mongoose';
import { IPlan } from '../interfaces/plan.interface';
import { UpdatePlanDto } from '../dto/update-plan.dto';
export declare class PlanRepository {
    private readonly planModel;
    constructor(planModel: Model<IPlan>);
    create(doc: IPlan): Promise<string>;
    findAll(): Promise<IPlan[]>;
    verificar(id: string): Promise<IPlan>;
    findOne(id: string): Promise<IPlan>;
    update(id: string, updatePlanDto: UpdatePlanDto): Promise<IPlan>;
    delete(id: string): Promise<boolean>;
    private isValidObjectId;
}
