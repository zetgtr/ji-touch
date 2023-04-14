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

export default createStore({
    state: {
      isAuth: false,
    },
    modules: {
        first: firstModule,
        services: servicesModule,
        portfolio: portfolioModule,
        company: companyModule,
        contact: contactModule,
        order: orderModule,
        reviews: reviewsModule,
        jobs: jobsModule,
        about: aboutModule,
    }
})
