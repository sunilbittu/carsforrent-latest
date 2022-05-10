export interface ICar {
    carId: string;
    carName: string;
    brand: string;
    fuelType: string;
    transmission: string;
    price: number;
    status: boolean;
    seatsCnt: number;
    rating: string;
    deliveryType: string;
    farePolicy: string;
    cancellationPolicy: string;
    agreementPolicy: string;
    carImage: string[];
    tenant: string;
    createdBy: string;
    updatedBy: string;
    importHash: string;
    createdAt: Date;
    updatedAt: Date;
}
