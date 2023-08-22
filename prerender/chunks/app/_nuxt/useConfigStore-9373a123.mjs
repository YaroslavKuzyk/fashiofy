import { d as defineStore } from '../server.mjs';

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
        title: "\u0413\u043E\u043B\u043E\u0432\u043D\u0438\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
        text: "\u0422\u0435\u043A\u0441\u0442 \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0433\u043E \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430",
        image: "https://images.hdqwalls.com/wallpapers/moon-stars-reflection-70.jpg"
      },
      {
        title: "\u0413\u043E\u043B\u043E\u0432\u043D\u0438\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
        image: "https://assets.entrepreneur.com/content/3x2/2000/20200429211042-GettyImages-1164615296.jpeg?format=pjeg&auto=webp&crop=16:9"
      },
      {
        image: "https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms"
      }
    ],
    short_news: [
      {
        title: "\u041A\u043E\u043D\u0442\u0435\u043D\u0442 \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0457 \u043D\u043E\u0432\u0438\u043D\u0438 \u0440\u0430\u0437\u043E\u043C \u0456\u0437 \u0442\u0435\u043A\u0441\u0442\u043E\u043C",
        id: 1
      },
      {
        title: "\u041A\u043E\u043D\u0442\u0435\u043D\u0442 \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0457 \u043D\u043E\u0432\u0438\u043D\u0438 \u0440\u0430\u0437\u043E\u043C \u0456\u0437 \u0442\u0435\u043A\u0441\u0442\u043E\u043C",
        id: 2
      },
      {
        title: "\u041A\u043E\u043D\u0442\u0435\u043D\u0442 \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0457 \u043D\u043E\u0432\u0438\u043D\u0438 \u0440\u0430\u0437\u043E\u043C \u0456\u0437 \u0442\u0435\u043A\u0441\u0442\u043E\u043C",
        id: 3
      },
      {
        title: "\u041A\u043E\u043D\u0442\u0435\u043D\u0442 \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0457 \u043D\u043E\u0432\u0438\u043D\u0438 \u0440\u0430\u0437\u043E\u043C \u0456\u0437 \u0442\u0435\u043A\u0441\u0442\u043E\u043C",
        id: 4
      }
    ],
    home_products: {
      "new": [
        {
          id: 1,
          title: "\u0414\u0436\u0438\u043D\u0441\u0438 Medicine",
          price: 1e3,
          category: "\u041E\u0434\u044F\u0433",
          brend: "Medicine",
          image: "https://content1.rozetka.com.ua/goods/images/big/328997055.jpg"
        },
        {
          id: 2,
          title: "\u0414\u0436\u0438\u043D\u0441\u0438 Mango Newmom",
          price: 750,
          category: "\u041E\u0434\u044F\u0433",
          brend: "Mango Newmom",
          image: "https://content.rozetka.com.ua/goods/images/big/352041296.jpg"
        },
        {
          id: 3,
          title: "\u041F\u043B\u0430\u0442\u0442\u044F Dressa",
          price: 1100,
          category: "\u041E\u0434\u044F\u0433",
          brend: "Dressa",
          image: "https://content.rozetka.com.ua/goods/images/big/339777475.jpg"
        },
        {
          id: 4,
          title: "\u0427\u043E\u043B\u043E\u0432\u0456\u0447\u0456 \u043A\u0440\u043E\u0441\u0456\u0432\u043A\u0438 New Balance",
          price: 1300,
          category: "\u0412\u0437\u0443\u0442\u0442\u044F",
          brend: "New Balance",
          image: "https://content.rozetka.com.ua/goods/images/big/311515328.jpg"
        }
      ],
      top: [
        {
          id: 5,
          title: "\u041F\u043B\u0430\u0442\u0442\u044F Dressa",
          price: 1100,
          category: "\u041E\u0434\u044F\u0433",
          brend: "Dressa",
          image: "https://content.rozetka.com.ua/goods/images/big/339777475.jpg"
        },
        {
          id: 6,
          title: "\u0427\u043E\u043B\u043E\u0432\u0456\u0447\u0456 \u043A\u0440\u043E\u0441\u0456\u0432\u043A\u0438 New Balance",
          price: 1300,
          category: "\u0412\u0437\u0443\u0442\u0442\u044F",
          brend: "New Balance",
          image: "https://content.rozetka.com.ua/goods/images/big/311515328.jpg"
        },
        {
          id: 7,
          title: "\u0414\u0436\u0438\u043D\u0441\u0438 Medicine",
          price: 1e3,
          category: "\u041E\u0434\u044F\u0433",
          brend: "Medicine",
          image: "https://content1.rozetka.com.ua/goods/images/big/328997055.jpg"
        },
        {
          id: 8,
          title: "\u0414\u0436\u0438\u043D\u0441\u0438 Mango Newmom",
          price: 750,
          category: "\u041E\u0434\u044F\u0433",
          brend: "Mango Newmom",
          image: "https://content.rozetka.com.ua/goods/images/big/352041296.jpg"
        }
      ]
    },
    top_categories: [
      {
        id: 1,
        title: "\u0421\u0443\u043A\u043D\u0456",
        image: "https://img.ltwebstatic.com/images3_pi/2022/06/21/1655794195b21e129622eaffcd724d51e36a949ada_thumbnail_600x.webp"
      },
      {
        id: 2,
        title: "\u0421\u0443\u043C\u043E\u0447\u043A\u0438",
        image: "https://images.katespade.com/is/image/KateSpade/K6576_001?$desktopProduct$"
      },
      {
        id: 3,
        title: "\u0412\u0437\u0443\u0442\u0442\u044F",
        image: "https://diverse.in.ua/uploads/product/1700/1799/613be524b79011eab62018d6c778b464_8d44e159b8be11eab62018d6c778b464.jpg"
      },
      {
        id: 4,
        title: "\u0414\u0436\u0438\u043D\u0441\u0438",
        image: "https://static.reserved.com/media/catalog/product/cache/1200/a4e40ebdc3e371adff845072e1c73f37/2/3/2309T-05J-010-1-578971_11.jpg"
      },
      {
        id: 5,
        title: "\u0411\u0456\u043B\u0438\u0437\u043D\u0430",
        image: "https://intertop.ua/load/CLN10708/412x550/MAIN.jpg"
      },
      {
        id: 6,
        title: "\u041E\u043A\u0443\u043B\u044F\u0440\u0438",
        image: "https://cdn.tsum.ua/media/catalog/product/d/b/db_10000023000100914_1.jpg"
      }
    ],
    brends: [
      {
        title: "\u0413\u043E\u043B\u043E\u0432\u043D\u0438\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
        text: "\u0422\u0435\u043A\u0441\u0442 \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0433\u043E \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430",
        image: "https://images.hdqwalls.com/wallpapers/moon-stars-reflection-70.jpg",
        link: "/"
      },
      {
        title: "\u0413\u043E\u043B\u043E\u0432\u043D\u0438\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
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

export { useConfigStore as u };
//# sourceMappingURL=useConfigStore-9373a123.mjs.map
