import {api} from "./api.ts";
import {BoardResponse, IBoard, PostBoard} from "../types/board.types.ts";

export const boardApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllBoards: build.query<IBoard[], void>({
      query: () => 'board/all',
      providesTags: ["Board"],
      transformResponse: (response: IBoard[]) => (
        response.sort(
          (a, b) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          }
        )
      )
    }),
    postBoard: build.mutation<BoardResponse, Partial<PostBoard>>({
      query(body) {
        return {
          url: 'board',
          method: 'POST',
          body
        }
      },
      invalidatesTags: [{type: 'Board', id: 'LIST'}]
    }),
    getOneBoard: build.query<IBoard, string>({
      query: (boardId) => ({
        url: `board/${boardId}`
      }),
      providesTags: ['Board']
    }),
    updateBoard: build.mutation<IBoard, PostBoard>({
      query({id, name}) {
        return {
          url: `board/${id}`,
          method: 'PATCH',
          body: {name}
        }
      },

      invalidatesTags: ["Board"]

    }),
    deleteBoard: build.mutation<{ id: string }, string>({
      query(boardId) {
        return {
          url: `board/${boardId}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: ['Board']
    }),
  })
})

export const {
  useLazyGetAllBoardsQuery,
  usePostBoardMutation,
  useLazyGetOneBoardQuery,
  useDeleteBoardMutation,
  useUpdateBoardMutation,
} = boardApi
