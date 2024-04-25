import { SubListService } from './sub_list.service';
import { CreateSubListDto } from './dto/create-sub_list.dto';
import { UpdateSubListDto } from './dto/update-sub_list.dto';
import { SubList } from "./entities/sub_list.entity";
export declare class SubListController {
    private readonly subListService;
    constructor(subListService: SubListService);
    create(createSubListDto: CreateSubListDto): Promise<SubList>;
    createDefaultSubLists(id: string): Promise<SubList[]>;
    findAll(id: string): Promise<SubList[]>;
    findOne(id: string): Promise<SubList>;
    update(id: string, updateSubListDto: UpdateSubListDto): Promise<SubList>;
    swapOrder(updateSubListDto: SubList[]): Promise<SubList[]>;
    remove(id: string): Promise<{
        id: string;
    }>;
}
