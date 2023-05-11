import {createStore} from "vuex";
import {firstModule} from "./infusions/firstModule";
import {servicesModule} from "./infusions/servicesModule";
import {portfolioModule} from "./infusions/portfolioModule";
import {companyModule} from "./infusions/companyModule";
import {contactModule} from "./infusions/contactModule";
import {orderModule} from "./infusions/orderModule";
import {reviewsModule} from "./infusions/reviewsModule";
import {jobsModule} from "./infusions/jobsModule";
import {aboutModule} from "./infusions/aboutModule";
import {test2Module} from "./infusions/test2Module";
import {testModule} from "./testModule";
import {articleModule} from "./infusions/articleModule";
import modulesImport from "../modules";
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    plugins: [createPersistedState({
        paths: ['cartModule']
    })],
    state: {
      isAuth: false,
    },
    modules: {
        test: testModule,
        article: articleModule,
        test2: test2Module,
        first: firstModule,
        services: servicesModule,
        portfolio: portfolioModule,
        company: companyModule,
        contact: contactModule,
        order: orderModule,
        reviews: reviewsModule,
        jobs: jobsModule,
        about: aboutModule,
        ...modulesImport
    }
})
