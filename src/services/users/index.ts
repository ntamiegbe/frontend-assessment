import { GetAllUsersResponse, User } from './../../../types/users/index';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getRequest = (url: string) => ({
    url,
});

export const users = createApi({
    reducerPath: "users",
    tagTypes: ["Users"],
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        fetchAllUsers: builder.query<GetAllUsersResponse, "">({
            query: () => getRequest("/users"),
            providesTags: ["Users"]
        }),
        fetchUserById: builder.query<User, number>({
            query: (id) => getRequest(`/users/${id}`),
            providesTags: ["Users"]
        }),
    }),
});

export const {
    useFetchAllUsersQuery,
    useFetchUserByIdQuery
} = users;
