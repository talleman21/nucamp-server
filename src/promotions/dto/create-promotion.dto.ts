import { promotion } from "@prisma/client";

export class CreatePromotionDto implements Omit<promotion,'id'> {
    name: string;
    image:string
    featured:boolean
    description:string
}
