import {createStore} from "vuex";
import {firstModule} from "./infusions/firstModule";
import {servicesModule} from "./infusions/servicesModule";

export default createStore({
    state: {
      isAuth: false,
    },
    modules: {
        first: firstModule,
        services: servicesModule,
    }
})
