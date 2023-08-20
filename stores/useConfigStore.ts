import { defineStore } from "pinia";
import configMock from "@/helpers/configMock.json";
import { type IConfigReponse, type IConfig } from "models/config";

export const useConfigStore = defineStore({
  id: "core-config-store",
  state: () => ({
    config: <IConfig>{},
  }),
  actions: {
    async fetchConfig() {
      try {
        const response: IConfigReponse = await configMock;

        if (response.data.status === 200) {
          this.config = response.data.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getConfig: (state) => state.config,
  },
});
