import { CreateSubListDto } from './dto/create-sub_list.dto';
import { UpdateSubListDto } from './dto/update-sub_list.dto';
import { SubList } from "./entities/sub_list.entity";
import { Repository } from "typeorm";
export declare class SubListService {
    private subListRepository;
    constructor(subListRepository: Repository<SubList>);
    create(createSubListDto: CreateSubListDto): Promise<SubList>;
    createDefaultSubLists(id: string): Promise<SubList[]>;
    findAll(id: string): Promise<SubList[]>;
    findOne(id: string): Promise<SubList>;
    update(id: string, updateSubListDto: UpdateSubListDto): Promise<SubList>;
    remove(id: string): Promise<{
        id: string;
    }>;
    swapOrder(items: SubList[]): Promise<SubList[]>;
    isExist(id: string): Promise<void>;
    validUUID(id: string): void;
}
