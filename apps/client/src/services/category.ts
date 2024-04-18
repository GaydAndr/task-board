import {api} from "./api.ts";


export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllCategories: build.query<any, string>({
      query(boardId) {
        return {
          url: `sub-list/all/${boardId}`
        }
      },
      providesTags: ['Category']
    }),
    createDefCategories: build.mutation<any, string>({
      query(boardId) {
        return {
          url: `sub-list/create-default/${boardId}`,
          method: 'POST'
        }
      },
      invalidatesTags: ['Category']
    }),
    postCategory: build.mutation<any, any>({
      query({body, boardId}) {
        return {
          url: `sub-list/all/${boardId}`,
          method: 'POST',
          body
        }
      },
      invalidatesTags: ['Category']
    }),
    updateCategory: build.mutation<any, any>({
      query({body, boardId}) {
        return {
          url: `sub-list/${boardId}`,
          method: 'PATCH',
          body
        }
      },
      invalidatesTags: ['Category']
    }),
  })
})

export const {
  useLazyGetAllCategoriesQuery,
  useCreateDefCategoriesMutation,
  usePostCategoryMutation,
  useUpdateCategoryMutation,
} = categoryApi