import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import Contato from './contact.entitie';
import { getRounds, hashSync } from 'bcryptjs';

@Entity('clientes')
class Cliente {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nomeCompleto: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column()
  telefone: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @CreateDateColumn({ type: "date" })
  dataRegistro: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }

  @OneToMany(() => Contato, (contato) => contato.cliente)
  contatos: Contato[];
}

export default Cliente;