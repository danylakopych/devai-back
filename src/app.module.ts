import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { ProjectService } from './project/project.service';
import { ProjectPhaseService } from './project-phase/project-phase.service';
import { GPTInteractionService } from './gpt-interaction/gpt-interaction.service';
import { DocumentService } from './document/document.service';
import { ReportsAndSuggestionsService } from './reports-and-suggestions/reports-and-suggestions.service';
import { ProjectController } from './project/project.controller';
import { ProjectPhaseController } from './project-phase/project-phase.controller';
import { GptInteractionController } from './gpt-interaction/gpt-interaction.controller';
import { DocumentController } from './document/document.controller';
import { ReportsAndSuggestionsController } from './reports-and-suggestions/reports-and-suggestions.controller';

@Module({
  imports: [],
  controllers: [
    UserController,
    ProjectController,
    ProjectPhaseController,
    GptInteractionController,
    DocumentController,
    ReportsAndSuggestionsController,
  ],
  providers: [
    PrismaService,
    UserService,
    ProjectService,
    ProjectPhaseService,
    GPTInteractionService,
    DocumentService,
    ReportsAndSuggestionsService,
  ],
})
export class AppModule {}
