import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoItem } from 'src/todo/todo-item.entity';
import { TodoController } from 'src/todo/todo.controller';
import { TodoService } from 'src/todo/todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([TodoItem])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
