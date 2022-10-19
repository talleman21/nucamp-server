import { campsite, Prisma } from "@prisma/client";

export class CreateCampsiteDto implements Omit<campsite,'id'> {
    name: string;
    image: string;
    featured: boolean;
    elevation:number;
    description:string;
}
