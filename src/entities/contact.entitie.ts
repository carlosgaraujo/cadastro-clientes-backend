import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
} from "typeorm";
import User from "./user.entitie";

@Entity("contacts")
class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeCompleto: string;

    @Column()
    email: string;

    @Column()
    telefone: string;

    @CreateDateColumn({ type: "date" })
    dataRegistro: string;

    @ManyToOne(() => User, (user) => user.contacts)
    user: User;
    user: any;
}

export default Contact;
