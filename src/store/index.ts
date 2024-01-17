import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { users } from "../services/users";

export function makeStore() {
    return configureStore({
        reducer: {
            [users.reducerPath]: users.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                users.middleware,
            ),
    });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>;

export default store;
