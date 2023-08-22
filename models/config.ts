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
  intro: ISlides[];
  short_news: IShortNews[];
  home_products: {
    new: IShortProduct[];
    top: IShortProduct[];
  };
  top_categories: ITopProduct[];
  brends: ISlides[];
}

export interface ISales {
  active: boolean;
  percent: number;
}

export interface ISlides {
  title?: string;
  text?: string;
  image: string;
  link?: string;
}

export interface IShortNews {
  title: string;
  id: number;
}

export interface IShortProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  brend: string;
  image: string;
}

export interface ITopProduct {
  id: number;
  title: string;
  image: string;
}
