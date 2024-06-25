import { createContext } from "react";

const initialMovieState

export const MovieContext = createContext<{
    state: MovieState,
    dispatch: React.Dispatch<MovieAction>
}>(
    state: initialMovieState,
    dispatch: () => ()
) 