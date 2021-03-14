import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  @Column()
  telefone: string;

  @Column('date')
  data_de_nascimento: Date;

  @Column()
  logadouro: string;

  @Column()
  numero: string;

  @Column()
  estado: string;

  @Column()
  cidade: string;

  @Column()
  usuario: string;

  @Column()
  ponto_de_referencia: string;

  @Column()
  senha: string;

  @Column()
  is_root: number;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.senha = bcrypt.hashSync(this.senha, 8);
  }
}

export default User;