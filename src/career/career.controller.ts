import { Controller, Get } from '@nestjs/common';
import { CareerService } from './career.service';
import { GrpcMethod } from '@nestjs/microservices';
import { CareerGrpcClient } from './career-grpc-client';

@Controller()
export class CareerController {
    constructor(
        private careerService: CareerService,
        private careerGrpcClient: CareerGrpcClient
    ) {}

    @Get('career')
    async findAllCareer() {
        return await this.careerGrpcClient.findManyCareers();
    }

    @Get('subject')
    async findAllSubjects() {
        return await this.careerGrpcClient.findManySubjects();
    }

    @Get('subject/prerequisites-map/objects')
    async findAllSubjectsPrerequisitesMap() {
        return await this.careerGrpcClient.findMapObjects();
    }

    @Get('subject/prerequisites-map')
    async findAllSubjectsPrerequisites() {
        return await this.careerGrpcClient.findPreRequisite();
    }

    @Get('subject/postrequisites-map')
    async findAllSubjectsPostrequisites() {
        return await this.careerGrpcClient.findPostRequisite();
    }


}
