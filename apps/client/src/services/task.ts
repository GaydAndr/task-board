import {api} from "./api.ts";

export const taskApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllTask: build.query<any, string>({
      query(boardId) {
        return {
          url: `task/all/${boardId}`
        }
      },
      providesTags:[]
    }),
    getOneTask:build.query<any, any>({
      query() {
        return {
          url: `task`
        }
      },
    }),
    postTask:build.mutation<any, any>({
      query() {
        return {
          url: `task`,
          method: 'POST'
        }
      },
      invalidatesTags:[]
    }),
    updateTask:build.mutation<any, string>({
      query(taskId) {
        return {
          url: `task/${taskId}`,
          method: 'PATCH'
        }
      },
      invalidatesTags:[]
    }),
    deleteTask:build.mutation<any, string>({
      query(taskId) {
        return {
          url: `task/${taskId}`,
          method: 'DELETE'
        }
      },
      invalidatesTags:[]
    }),
  })
})