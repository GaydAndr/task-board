import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from "./entities/board.entity";
import { Repository } from "typeorm";
export declare class BoardService {
    private boardRepository;
    constructor(boardRepository: Repository<Board>);
    create(createBoardDto: CreateBoardDto): Promise<{
        board: {
            name: string;
            id: string;
        } & Board;
    }>;
    findAll(): Promise<Board[]>;
    findOne(id: string): Promise<Board>;
    update(id: string, updateBoardDto: UpdateBoardDto): Promise<Board>;
    remove(id: string): Promise<{
        id: string;
    }>;
    isExist(id: string): Promise<void>;
    validUUID(id: string): void;
}
