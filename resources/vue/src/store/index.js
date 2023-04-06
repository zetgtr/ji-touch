import {createStore} from "vuex";
import {postModule} from "./postModule";
import {testModule} from "./testModule";

export default createStore({
    state: {
      isAuth: false,
    },
    modules: {
        post: postModule,
        test: testModule
    }
})
