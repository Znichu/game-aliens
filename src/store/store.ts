import {combineReducers, createStore} from "redux";
import {GameReducer} from "./game-reducer";


const rootReducer = combineReducers({
    game: GameReducer
});


export let store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);


//Type
export type RootState = ReturnType<typeof rootReducer>;
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U; } ? U : never;
