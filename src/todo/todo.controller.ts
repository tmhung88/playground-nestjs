import { Body, Controller, Inject, Post } from '@nestjs/common';
import { TodoService } from 'src/todo/todo.service';
import { AddTodoItemInput } from 'src/todo/todo.dto';
import { TodoItem } from 'src/todo/todo-item.entity';

@Controller('todo')
export class TodoController {
  @Inject()
  private readonly todoService: TodoService;
  @Post('/items')
  async addTodoItem(@Body() input: AddTodoItemInput): Promise<TodoItem> {
    return await this.todoService.addTodoItem(input);
  }
}
