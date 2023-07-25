import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import Cliente from "./cliente.entitie";

@Entity("contatos")
class Contato {
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

  @ManyToOne(() => Cliente, (cliente) => cliente.contatos)
  cliente: Cliente;
}

export default Contato;
