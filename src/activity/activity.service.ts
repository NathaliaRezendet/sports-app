import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from './activity.entity';
import { CreateActivityDto, UpdateActivityDto } from './activity.dto';

@Injectable()
export class ActivityService {
  private readonly logger = new Logger(ActivityService.name);

  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}

  findAll(): Promise<Activity[]> {
    this.logger.log('Retrieving all activities');
    return this.activityRepository.find();
  }

  findOne(id: number): Promise<Activity> {
    this.logger.log(`Retrieving activity with id: ${id}`);
    return this.activityRepository.findOneBy({ id });
  }

  create(createActivityDto: CreateActivityDto): Promise<Activity> {
    this.logger.log('Creating new activity');
    const activity = this.activityRepository.create(createActivityDto);
    return this.activityRepository.save(activity);
  }

  async update(id: number, updateActivityDto: UpdateActivityDto): Promise<void> {
    this.logger.log(`Updating activity with id: ${id}`);
    await this.activityRepository.update(id, updateActivityDto);
  }

  async remove(id: number): Promise<void> {
    this.logger.log(`Removing activity with id: ${id}`);
    await this.activityRepository.delete(id);
  }
}
