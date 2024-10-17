export interface ICustomer {
    id?: string;
    name: string;
    whatsapp: string;
    login: string;
    password: string;
    serviceId: string;
    planId: string;
    invoice: string;
    comment?: string;
    validateDate: Date;
    sendNotificationOn: ISendNotificationOn;
    userId: string;
    createAt: Date;
    updateAt: Date;
    deleted: boolean;
}
export interface ISendNotificationOn {
    fiveDaysBefore: INotificationStatus;
    threeDaysBefore: INotificationStatus;
    oneDayBefore: INotificationStatus;
    EndDay: INotificationStatus;
    oneDayAfter: INotificationStatus;
}
export interface INotificationStatus {
    active: boolean;
    sended: boolean;
}
