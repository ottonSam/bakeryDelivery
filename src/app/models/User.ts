import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}

export default User;