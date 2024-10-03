import { 
    Controller, 
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    ParseIntPipe, 
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from '@prisma/client';
import { CreateProjectDto } from './dto'
import { UpdateProjectDto } from './dto'
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';


@ApiTags('projects')
@Controller('projects')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {}

    // GET /projects
    @Get()
    @ApiOperation({ summary: 'Get all projects' })
    @ApiResponse({ status: 200, description: 'List of project retrieved successfully' })
    async getAllProjects(): Promise<Project[]> {
        return this.projectService.getAllProjects();
    }

    // GET /projects/:id
    @Get(':id')
    @ApiOperation({ summary: 'Get project by ID' })
    @ApiParam({ name: 'id', description: 'Project ID' })
    @ApiResponse({ status: 200, description: 'Project retrieved successfully', 
        schema: {
            example: {
            id: 1,
            name: 'Kitchen Renovation',
            description: 'Complete kitchen overhaul with modern appliances.',
            startDate: '2024-01-01T00:00:00.000Z',
            endDate: '2024-03-01T00:00:00.000Z',
            budget: 15000,
            clientId: 1,
            contractorId: 2,
            client: {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                contact: '123-456-7890'
            },
            contractor: {
                id: 2,
                firstName: 'Bob',
                lastName: 'Builder',
                email: 'bob.builder@example.com',
                contact: '555-555-5555'
            }
            }
        } 
    })
    @ApiResponse({ status: 404, description: 'Project not found' })
    async getProjectById( 
        @Param('id', ParseIntPipe) id: number
    ): Promise<Project | null> {
        return this.projectService.getProjectById(id);
    }

    // Create new project - POST /projects
    @Post()
    @ApiOperation({ summary: 'Create a new project' })
    @ApiResponse({ status: 201, description: 'Project created successfully' })
    @ApiResponse({ status: 400, description: 'Bad request' })
    async createProject( 
        @Body() dto: CreateProjectDto 
    ): Promise<Project> {
        return this.projectService.createProject(dto);
    }

    // Update project - PUT /projects/:id
    @Put(':id')
    @ApiOperation({ summary: 'Update project by ID' })
    @ApiParam({ name: 'id', description: 'Project ID' })
    @ApiResponse({ status: 200, description: 'Project updated successfully' })
    @ApiResponse({ status: 404, description: 'Project not found' })
    async updateProject(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateProjectDto,
    ): Promise<Project> {
        return this.projectService.updateProject(id, dto);
    }

    // Delete project - DELETE /projects/:id
    @Delete(':id')
    @ApiOperation({ summary: 'Delete project by ID' })
    @ApiParam({ name: 'id', description: 'Project ID' })
    @ApiResponse({ status: 200, description: 'Project deleted successfully' })
    @ApiResponse({ status: 404, description: 'Project not found' })
    async deleteProject(
        @Param('id', ParseIntPipe) id: number
    ): Promise<Project> {
        return this.projectService.deleteProject(id);
    }

}
