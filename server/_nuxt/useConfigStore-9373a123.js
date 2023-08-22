import { d as defineStore } from "../server.mjs";
const data = {
  status: 200,
  is_login: false,
  message: "success",
  data: {
    sales: {
      active: true,
      percent: 20
    },
    intro: [
      {
        title: "Головний заголовок",
        text: "Текст головного заголовка",
        image: "https://images.hdqwalls.com/wallpapers/moon-stars-reflection-70.jpg"
      },
      {
        title: "Головний заголовок",
        image: "https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?format=pjeg&auto=webp&crop=16:9"
      },
      {
        image: "https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms"
      }
    ],
    short_news: [
      {
        title: "Контент короткої новини разом із текстом",
        id: 1
      },
      {
        title: "Контент короткої новини разом із текстом",
        id: 2
      },
      {
        title: "Контент короткої новини разом із текстом",
        id: 3
      },
      {
        title: "Контент короткої новини разом із текстом",
        id: 4
      }
    ],
    home_products: {
      "new": [
        {
          id: 1,
          title: "Джинси Medicine",
          price: 1e3,
          category: "Одяг",
          brend: "Medicine",
          image: "https://content1.rozetka.com.ua/goods/images/big/328997055.jpg"
        },
        {
          id: 2,
          title: "Джинси Mango Newmom",
          price: 750,
          category: "Одяг",
          brend: "Mango Newmom",
          image: "https://content.rozetka.com.ua/goods/images/big/352041296.jpg"
        },
        {
          id: 3,
          title: "Плаття Dressa",
          price: 1100,
          category: "Одяг",
          brend: "Dressa",
          image: "https://content.rozetka.com.ua/goods/images/big/339777475.jpg"
        },
        {
          id: 4,
          title: "Чоловічі кросівки New Balance",
          price: 1300,
          category: "Взуття",
          brend: "New Balance",
          image: "https://content.rozetka.com.ua/goods/images/big/311515328.jpg"
        }
      ],
      top: [
        {
          id: 5,
          title: "Плаття Dressa",
          price: 1100,
          category: "Одяг",
          brend: "Dressa",
          image: "https://content.rozetka.com.ua/goods/images/big/339777475.jpg"
        },
        {
          id: 6,
          title: "Чоловічі кросівки New Balance",
          price: 1300,
          category: "Взуття",
          brend: "New Balance",
          image: "https://content.rozetka.com.ua/goods/images/big/311515328.jpg"
        },
        {
          id: 7,
          title: "Джинси Medicine",
          price: 1e3,
          category: "Одяг",
          brend: "Medicine",
          image: "https://content1.rozetka.com.ua/goods/images/big/328997055.jpg"
        },
        {
          id: 8,
          title: "Джинси Mango Newmom",
          price: 750,
          category: "Одяг",
          brend: "Mango Newmom",
          image: "https://content.rozetka.com.ua/goods/images/big/352041296.jpg"
        }
      ]
    },
    top_categories: [
      {
        id: 1,
        title: "Сукні",
        image: "https://img.ltwebstatic.com/images3_pi/2022/06/21/1655794195b21e129622eaffcd724d51e36a949ada_thumbnail_600x.webp"
      },
      {
        id: 2,
        title: "Сумочки",
        image: "https://images.katespade.com/is/image/KateSpade/K6576_001?$desktopProduct$"
      },
      {
        id: 3,
        title: "Взуття",
        image: "https://diverse.in.ua/uploads/product/1700/1799/613be524b79011eab62018d6c778b464_8d44e159b8be11eab62018d6c778b464.jpg"
      },
      {
        id: 4,
        title: "Джинси",
        image: "https://static.reserved.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/2/3/2309T-05J-010-1-578971_11.jpg"
      },
      {
        id: 5,
        title: "Білизна",
        image: "https://intertop.ua/load/CLN10708/412x550/MAIN.jpg"
      },
      {
        id: 6,
        title: "Окуляри",
        image: "https://cdn.tsum.ua/media/catalog/product/d/b/db_10000023000100914_1.jpg"
      }
    ],
    brends: [
      {
        title: "Головний заголовок",
        text: "Текст головного заголовка",
        image: "https://images.hdqwalls.com/wallpapers/moon-stars-reflection-70.jpg",
        link: "/"
      },
      {
        title: "Головний заголовок",
        image: "https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?format=pjeg&auto=webp&crop=16:9",
        link: "/"
      },
      {
        image: "https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms",
        link: "/"
      }
    ]
  }
};
const configMock = {
  data
};
const useConfigStore = defineStore({
  id: "core-config-store",
  state: () => ({
    config: {}
  }),
  actions: {
    async fetchConfig() {
      try {
        const response = await configMock;
        if (response.data.status === 200) {
          this.config = response.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    getConfig: (state) => state.config
  }
});
export {
  useConfigStore as u
};
//# sourceMappingURL=useConfigStore-9373a123.js.map
