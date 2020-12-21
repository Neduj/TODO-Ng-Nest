import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TaskService {
  #task: Task[] = [];
  #id = 1;

  getTasks() {
    return this.#task;
  }

  getTaskById(id: string) {
    return this.getTask(id)[0];
  }

  postTask(task: Task) {
    let id = this.#id++;
    task.id = id.toString();
    this.#task.push(task);
  }

  patchTask(id: string, task: Task) {
    const [index] = this.getTask(id);
    this.#task[index] = task;
    return this.#task;
  }

  getTask(id: string): [number, Task] {
    let index = this.#task.findIndex((t) => t.id === id);
    let product = this.#task[index];
    return [index, product];
  }
}
