export interface IHistory {
  id: string;
  person: string;
  act: string;
  task_name: string;
  task_rename: string | null;
  act_from: string;
  act_to: string | null;
  transfer_date: string;
}

export interface ITasksList {
  id: string;
  task_name: string;
  status: string;
  due_date: string;
  priority: string;
  description: string;
  transfer_date: string;
}

export interface IResponseBoardsList {
  boardsList: IBoard[];
}

export interface IStoreBoard {
  currentBoard: IBoard ;
  boardsList: IBoard[] ;
}

export interface IBoard {
  id: string;
  name: string;
  createdAt: string;
  history?: IHistory[];
  tasks_list?: ITasksList[];
  sud_list?:ICategory[]
}

export interface IPostBoard {
  board: IBoard
}

export interface ICategory {
  id: string;
  name: string;
  board: IBoard
}

export interface ITask {
  id: string;
  task_name: string;
  status: string;
  due_date: string;
  priority: string;
  description: string;
  board: {
    id: string;
  };
  transfer_date: string;
}
export interface ITaskPost {
  task_name: string;
  status: string;
  due_date: string;
  priority: string;
  description: string;
  board: {
    id: string;
  };
}

export interface ITaskResponse extends ITaskPost {
  id: string;
  transfer_date: string;
}
