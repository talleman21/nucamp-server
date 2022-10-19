import { partner } from "@prisma/client";

export class CreatePartnerDto implements Omit<partner,'id'>{
    name: string;
    image:string;
    featured:boolean;
    description:string;
}
