import { Test, TestingModule } from '@nestjs/testing';
import { ResumeManagementController } from './resume-management.controller';

describe('ResumeManagement Controller', () => {
  let controller: ResumeManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResumeManagementController],
    }).compile();

    controller = module.get<ResumeManagementController>(ResumeManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
