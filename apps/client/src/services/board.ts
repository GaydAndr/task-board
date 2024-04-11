import {api} from "./api.ts";
import {BoardResponse, IBoard, PostBoard} from "../types/board.types.ts";
// import {RootState, store} from "../store/store.ts";

export const boardApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllBoards: build.query<IBoard[], void>({
      query: () => 'board/all',
      providesTags: ['Board']
    }),
    postBoard: build.mutation<BoardResponse, Partial<PostBoard>>({
      query(body) {
        // const root = (store.getState() as RootState).board.currentBoard.id
        // console.log(root)
        return {
          url: 'board',
          method: 'POST',
          body
        }
      },
      // transformResponse: (response: BoardResponse) => {
      //   console.log(response)
      //   return response.board
      // },
      invalidatesTags: ["Board"]
    }),
    getOneBoard: build.query<IBoard, string>({
      query: (boardId: string) => ({
        url: `board/${boardId}`
      })

    })
  })
})

export const {
  useLazyGetAllBoardsQuery,
  usePostBoardMutation,
  useLazyGetOneBoardQuery
} = boardApi
