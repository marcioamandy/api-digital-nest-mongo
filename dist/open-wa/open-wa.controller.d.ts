import { Response } from 'express';
import { OpenWASession } from './open-wa.service';
export declare class OpenWAController {
    private readonly openWASession;
    constructor(openWASession: OpenWASession);
    getQRCode(res: Response): Promise<void>;
}
