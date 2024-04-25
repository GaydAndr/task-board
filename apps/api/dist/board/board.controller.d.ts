import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
export declare class BoardController {
    private readonly boardService;
    constructor(boardService: BoardService);
    create(createBoardDto: CreateBoardDto): Promise<{
        board: {
            name: string;
            id: string;
        } & import("src/board/entities/board.entity").Board;
    }>;
    findAll(): Promise<import("src/board/entities/board.entity").Board[]>;
    findOne(id: string): Promise<import("src/board/entities/board.entity").Board>;
    update(id: string, updateBoardDto: UpdateBoardDto): Promise<import("src/board/entities/board.entity").Board>;
    remove(id: string): Promise<{
        id: string;
    }>;
}
