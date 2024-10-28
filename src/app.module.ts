import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { ProjectStageController } from './project-stage/project-stage.controller';
import { ProjectStageService } from './project-stage/project-stage.service';
import { GptIntegrationService } from './gpt-integration/gpt-integration.service';
import { GptIntegrationController } from './gpt-integration/gpt-integration.controller';

@Module({
  imports: [UserModule, ProjectModule],
  controllers: [
    UserController,
    ProjectStageController,
    GptIntegrationController,
  ],
  providers: [
    PrismaService,
    UserService,
    ProjectStageService,
    GptIntegrationService,
  ],
})
export class AppModule {}
