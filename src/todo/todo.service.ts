import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoItem } from 'src/todo/todo-item.entity';
import { Repository } from 'typeorm';
import { AddTodoItemInput } from 'src/todo/todo.dto';

@Injectable()
export class TodoService {
  @InjectRepository(TodoItem)
  private readonly todoItemRepo: Repository<TodoItem>;

  async addTodoItem(input: AddTodoItemInput): Promise<TodoItem> {
    return await this.todoItemRepo.save({ title: input.title, description: input.description });
  }
}
