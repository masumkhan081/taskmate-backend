import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  //
  @Get() //
  getTasks(@Query('status') status?: 'COMPLETE' | 'ONGOING') {
    return [status];
  }

  @Get('ongoing') //  this one has to be top of :id or 'ongoing' - gets treated as id
  getOngoingTask() {
    return [];
  }

  @Get(':id') //
  getSingleTask(@Param('id') id: string) {
    return { id: id };
  }

  @Post() // POST /task
  create(@Body() task: object) {
    return { ...task };
  }

  @Patch(':id') //
  updateTask(@Param('id') id: string, @Body() taskUpdate: object) {
    return { id, ...taskUpdate };
  }

  @Delete(':id') //
  deleteTask(@Param('id') id: string) {
    return { id: id };
  }
}
