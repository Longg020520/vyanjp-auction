import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { rootReducers } from "./reducers";

const appReducer = combineReducers({
  ...rootReducers,
});

const reducerProxy = (state: any, action: AnyAction) => {
  if (action.type === "LOGOUT") {
    sessionStorage.clear();
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: reducerProxy,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
