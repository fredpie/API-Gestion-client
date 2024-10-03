import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Project, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectService {
    constructor(
        private prisma: PrismaService,
        private config: ConfigService
    ) {}

    // Get all projects
    async getAllProjects(): Promise<Project[]> {
        return this.prisma.project.findMany({
            include: {
                client: true,
                contractor: true,
            }
        });
    }

    // Specific project with ID
    async getProjectById(id: number): Promise<Project> {
        return this.prisma.project.findUnique({
            where: {
                id: id
            },
            include: {
                client: true,
                contractor: true,
            }
        });
    }

    // Create a new project
    async createProject(
        data: Prisma.ProjectUncheckedCreateInput
    ): Promise<Project> {
        return this.prisma.project.create({ 
            data,
            include: {
                client: true,
                contractor: true,
            },
        });
    }

    // Update a project
    async updateProject(
        id: number,
        data: Prisma.ProjectUncheckedUpdateInput
    ): Promise<Project> {
        return this.prisma.project.update({
            where: {
                id: id
            },
            data,
            include: {
                client: true,
                contractor: true,
            },
        });
    }

    // Delete a project
    async deleteProject(id: number): Promise<Project> {
        return this.prisma.project.delete({
            where: {
                id: id
            }
        });
    }


}
