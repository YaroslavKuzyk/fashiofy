import { Interface } from "readline";

export interface IConfigReponse {
  data: {
    status: number;
    is_login: boolean;
    message: string;
    data: IConfig;
  };
}

export interface IConfig {
  sales: ISales;
  intro: IIntro[];
  short_news: IShortNews[];
  home_products: {
    new: IShortProduct[];
    top: IShortProduct[];
  };
}

export interface ISales {
  active: boolean;
  percent: number;
}

export interface IIntro {
  title?: string;
  text?: string;
  image: string;
}

export interface IShortNews {
  title: string;
  link: string;
}

export interface IShortProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  brend: string;
  image: string;
}
