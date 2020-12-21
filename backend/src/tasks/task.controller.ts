import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getTasks() {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(id);
  }

  @Patch(':id')
  patchTask(@Param('id') id: string, @Body() body: Task) {
    return this.taskService.patchTask(id, body);
  }
  @Post()
  postTask(@Body() task: Task) {
    return this.taskService.postTask(task);
  }
}
