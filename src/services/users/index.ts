import { GetAllUsersResponse } from './../../../types/users/index';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postRequest = (url: string, details: unknown) => ({
    url,
    method: "POST",
    body: details,
});

const getRequest = (url: string) => ({
    url,
});

export const users = createApi({
    reducerPath: "users",
    tagTypes: ["Users"],
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        fetchAllUsers: builder.query<
            GetAllUsersResponse,
            ""
        >({
            query: () =>
                getRequest("/users"),
            providesTags: ["Users"],
        }),
    }),
});

export const {
    useFetchAllUsersQuery,
} = users;
