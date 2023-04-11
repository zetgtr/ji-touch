import {createStore} from "vuex";
import {firstModule} from "./infusions/firstModule";
import {servicesModule} from "./infusions/servicesModule";
import {portfolioModule} from "./infusions/portfolioModule";

export default createStore({
    state: {
      isAuth: false,
    },
    modules: {
        first: firstModule,
        services: servicesModule,
        portfolio: portfolioModule,
    }
})
