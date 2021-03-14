import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  produto: string;

}

export default Product;