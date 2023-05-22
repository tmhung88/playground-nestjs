import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('todo_items')
export class TodoItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @UpdateDateColumn({ type: 'timestamp with time zone', name: 'timestamp' })
  updatedAt: string;
}
