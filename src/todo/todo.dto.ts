import { IsNotEmpty, IsString } from 'class-validator';

export class AddTodoItemInput {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
