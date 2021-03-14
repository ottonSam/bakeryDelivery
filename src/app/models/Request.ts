import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('requests')
class Request {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  produto: string;

  @Column()
  dia: string;

  @Column()
  user: string;

}

export default Request;