import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
export declare class CompaniesController {
    private readonly companiesService;
    constructor(companiesService: CompaniesService);
    create(req: any, createCompanyDto: CreateCompanyDto): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        rut: string;
    }>;
    findAll(req: any): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        rut: string;
    }[]>;
    findOne(req: any, id: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        rut: string;
    }>;
}
