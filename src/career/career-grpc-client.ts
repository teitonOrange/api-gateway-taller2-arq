import { Injectable } from "@nestjs/common";
import * as path from "path";
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

@Injectable()
export class CareerGrpcClient {
    private client_career: any;
    private client_subject: any;
    constructor() {
        const protoPath_careers = path.join(__dirname, '/proto/career.proto')
        
        const protoPath_subjects = path.join(__dirname, '/proto/subject.proto')
        
        //package para career
        const packageDefinition_careers = protoLoader.loadSync(protoPath_careers);
        const careerProto = grpc.loadPackageDefinition(packageDefinition_careers).career as any;
        //package para subject
        const packageDefinition_subjects = protoLoader.loadSync(protoPath_subjects);
        const subjectProto = grpc.loadPackageDefinition(packageDefinition_subjects).subject as any;

        const serviceUrl = process.env.CAREER_MANAGEMENT;
        if (!serviceUrl) {
            throw new Error('CAREER_MANAGEMENT environment variable is not set.');
        }
        this.client_career = new careerProto.CareerService(serviceUrl,grpc.credentials.createInsecure());
        this.client_subject = new subjectProto.SubjectService(serviceUrl,grpc.credentials.createInsecure());

    }
    
    async findManyCareers() {
        return new Promise((resolve, reject) => {
            this.client_career.FindMany(
                    {},(error, response) => {
                    if (error) {
                        reject(error);
                    } else{

                        resolve(response);
                    }
                },
            );
        });
    }

    async findManySubjects() {
        return new Promise((resolve, reject) => {
            this.client_subject.FindMany(
                    {},(error, response) => {
                    if (error) {
                        reject(error);
                    } else{

                        resolve(response);
                    }
                },
            );
        });
    }
    async findMapObjects() {
        return new Promise((resolve, reject) => {
            this.client_subject.FindMapObjects(
                    {},(error, response) => {
                    if (error) {
                        reject(error);
                    } else{

                        resolve(response);
                    }
                },
            );
        });
    }

    findPreRequisite() {
        return new Promise((resolve, reject) => {
            this.client_subject.FindPreRequisite(
                    {},(error, response) => {
                    if (error) {
                        reject(error);
                    } else{

                        resolve(response);
                    }
                },
            );
        });
    }

    findPostRequisite() {
        return new Promise((resolve, reject) => {
            this.client_subject.FindPostRequisite(
                    {},(error, response) => {
                    if (error) {
                        reject(error);
                    } else{

                        resolve(response);
                    }
                },
            );
        });
    }


}