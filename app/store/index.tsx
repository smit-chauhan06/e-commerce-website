import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { persistReducer } from "redux-persist";
import { useDispatch, useSelector } from "react-redux";

const createNoopStorage = () => ({
  getItem: (): Promise<null> => Promise.resolve(null),
  setItem: (_key: string, value: string): Promise<string> =>
    Promise.resolve(value),
  removeItem: (): Promise<void> => Promise.resolve(),
});

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const authPersistConfig = {
  key: "auth",
  storage: storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(authPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
