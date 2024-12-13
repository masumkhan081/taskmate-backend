import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      role: 'ADMIN',
    },
  ];

  getTasks(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.tasks.filter((task) => task.role === role);
    }
    return this.tasks;
  }

  getSingleTask(id: number) {
    const task = this.tasks.find((task) => task.id === id);

    return task;
  }

  createTask(task: {
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    const tasksByHighestId = [...this.tasks].sort((a, b) => b.id - a.id);
    const newTask = {
      id: tasksByHighestId[0].id + 1,
      ...task,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(
    id: number,
    updatedTask: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...updatedTask };
      }
      return task;
    });

    return this.getSingleTask(id);
  }

  deleteTask(id: number) {
    const removedTask = this.getSingleTask(id);

    this.tasks = this.tasks.filter((task) => task.id !== id);

    return removedTask;
  }
}
