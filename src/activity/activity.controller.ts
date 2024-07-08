import { Controller, Get, Post, Body, Put, Param, Delete, Logger } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ActivityService } from './activity.service';
import { Activity } from './activity.entity';
import { CreateActivityDto, UpdateActivityDto } from './activity.dto';

@ApiTags('activity')
@Controller('activity')
export class ActivityController {
  private readonly logger = new Logger(ActivityController.name);

  constructor(private readonly activityService: ActivityService) {}

  @ApiOperation({ summary: 'Retrieve all activities' })
  @ApiResponse({ status: 200, description: 'List of all activities' })
  @Get()
  async findAll(): Promise<Activity[]> {
    this.logger.log('GET /activity');
    return this.activityService.findAll();
  }

  @ApiOperation({ summary: 'Retrieve a single activity by ID' })
  @ApiResponse({ status: 200, description: 'Activity details' })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Activity> {
    this.logger.log(`GET /activity/${id}`);
    return this.activityService.findOne(+id);
  }

  @ApiOperation({ summary: 'Create a new activity' })
  @ApiResponse({ status: 201, description: 'Activity created' })
  @Post()
  async create(@Body() createActivityDto: CreateActivityDto): Promise<Activity> {
    this.logger.log('POST /activity');
    return this.activityService.create(createActivityDto);
  }

  @ApiOperation({ summary: 'Update an existing activity' })
  @ApiResponse({ status: 200, description: 'Activity updated' })
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateActivityDto: UpdateActivityDto): Promise<void> {
    this.logger.log(`PUT /activity/${id}`);
    return this.activityService.update(+id, updateActivityDto);
  }

  @ApiOperation({ summary: 'Delete an activity by ID' })
  @ApiResponse({ status: 200, description: 'Activity deleted' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    this.logger.log(`DELETE /activity/${id}`);
    return this.activityService.remove(+id);
  }
}
