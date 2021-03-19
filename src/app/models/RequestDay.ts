import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('requests_day')
class RequestDay {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  dia: string;

  @Column()
  user: string;

}

export default RequestDay;