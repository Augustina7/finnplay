export interface IGame {
  id: number;
  name: string;
  provider: number;
  cover: string;
  coverLarge: string;
  date: string;
}

export interface IProvider {
  id: number;
  name: string;
  logo: string;
}

export interface IGroup {
  id: number;
  name: string;
  games: number[];
}

export interface IData {
  games: IGame[];
  providers: IProvider[];
  groups: IGroup[];
}

export interface IFilter {
  name: string;
  providers: number[];
  groups: number[];
  sort: string;
}