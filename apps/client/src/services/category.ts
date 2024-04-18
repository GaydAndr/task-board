import {api} from "./api.ts";
import {ICategory, PostCategory} from "../types/category.types.ts";


export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllCategories: build.query<ICategory[], string>({
      query(boardId) {
        return {
          url: `sub-list/all/${boardId}`
        }
      },
      providesTags: ['Category']
    }),
    createDefCategories: build.mutation<ICategory[], string>({
      query(boardId) {
        return {
          url: `sub-list/create-default/${boardId}`,
          method: 'POST'
        }
      },
      invalidatesTags: ['Category']
    }),
    postCategory: build.mutation<ICategory, PostCategory>({
      query({boardId, name:categoryName}: PostCategory) {
        return {
          url: `sub-list/`,
          method: 'POST',
          body: {name: categoryName, board: boardId}
        }
      },
      invalidatesTags: ['Category']
    }),
    updateCategory: build.mutation<ICategory, any>({
      query({id, name}) {
        return {
          url: `sub-list/${id}`,
          method: 'PATCH',
          body: {name}
        }
      },
      invalidatesTags: ['Category']
    }),
    deleteCategory: build.mutation<{ id: string }, string>({
      query(categoryID) {
        return {
          url: `sub-list/${categoryID}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: ['Category']
    }),
    swapOrder: build.mutation<any,any>({
      query(body) {
        return{
          url: 'sub-list/swap-order',
          method: 'PUT',
          body
        }
      },
      invalidatesTags:['Category']
    })
  })
})

export const {
  useLazyGetAllCategoriesQuery,
  useCreateDefCategoriesMutation,
  usePostCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useSwapOrderMutation,
} = categoryApi