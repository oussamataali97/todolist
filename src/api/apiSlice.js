import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({ baseUrl : 'http://localhost:8000'}),
    tagTypes:['todo'],
    endpoints: (builder)=>({
        getPost:builder.query({
            query:()=>'/todos',
            providesTags:['todo']

        }),
        getTodo:builder.query({
            query:(id)=>`/todos/${id}`,
            providesTags:['todo']

        }),
        addTodo:builder.mutation({
            query:(todo)=>({
                url:'/todos',
                method:'POST',
                body:todo
            }),
            invalidatesTags:['todo']


        }),
        deletePost:builder.mutation({
            query:(id)=>({
            url:`/todos/${id}`,
            method:'DELETE',

        }),
        invalidatesTags:['todo']

        }),
        updateTodo:builder.mutation({
            query:(todo)=>({
                url:`/todos/${todo.id}`,
                method:'PATCH',
                body:todo

            }),
            invalidatesTags:['todo']
        })
    })

})

export const {useGetPostQuery,useDeletePostMutation,useAddTodoMutation,useUpdateTodoMutation,useGetTodoQuery} = apiSlice