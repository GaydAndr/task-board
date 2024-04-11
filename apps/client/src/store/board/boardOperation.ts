// import {createAsyncThunk} from "@reduxjs/toolkit";
// import {instance} from "../../api/axios.api.ts";
// import { IPostBoard, IResponseBoardsList} from "../../types/types.ts";
// import {IBoard} from "../../types/board.types.ts";
//
// export const boardGetAll =
//   createAsyncThunk<IResponseBoardsList[] | void>(
//     'board/all',
//     async () => {
//       const {data} = await instance.get<IResponseBoardsList[]>('board/all')
//       return data
//     }
//   )
//
// export const getBoard = createAsyncThunk<IBoard | void, string>(
//   'board:id',
//   async (boardId: string) => {
//     try {
//       const {data} = await instance.get<IBoard>(`board/${boardId}`)
//       return data
//     } catch (error: any) {
//       console.error(error)
//     }
//   }
// )
//
// export const postBoard = createAsyncThunk<
//   IPostBoard,
//   { boardTitle: string; boardId: string }
// >(
//   'board',
//   async ({boardTitle, boardId}) => {
//     try {
//       const {data} = await instance.post<IPostBoard>(
//         `board`,
//         {
//           name: boardTitle,
//           id: boardId
//         })
//       return data.board
//     } catch (error: any) {
//       console.error(error)
//     }
//   }
// )