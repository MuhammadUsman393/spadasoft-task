import { movieType } from "./movieType";
import { ReactNode } from "react";

export type MovieContextProps = {
  movies: movieType[];
};

export type ExampleComponentProps = {
  children: ReactNode;
};
