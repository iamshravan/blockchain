import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';


@Entity('vendora')
export class Vendor {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    price:number;
}
