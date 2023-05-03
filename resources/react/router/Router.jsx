import React, {lazy, Suspense, useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "../pages/home/Home";
import {ROUTER} from "./constants";
import {setPagesAction, setRouterAction} from "../store/router/actions";
import {routerSelector} from "../store/router/selector";
import {useDispatch, useSelector} from "react-redux";
import {setPageData} from "../api/router";


export const Router = () => {
    const dispatch = useDispatch();
    const { routers } = useSelector(routerSelector);
    const { pages } = useSelector(routerSelector);

    const setRouterPage = (routers, parentUrl = "") => {
        return routers.map(el => {
            const url = `${parentUrl}/${el.url}`;

            let importString = ""
            if(el.page)
                importString = `../pages/panels/${el.page.title}Page`
            else
                importString = `../pages/panels/${el.alias}Page`

            const PageComponent = lazy(() =>
                import(/* @vite-ignore */ importString)
            );

            let childRoutes = null;
            if (el.children) {
                childRoutes = setRouterPage(el.children, url);
            }
            return (
                <>
                    <Route key={url} path={url} element={<PageComponent />} />
                    {childRoutes}
                </>
            );
        });
    };

    useEffect(() => {
        setPageData(dispatch,setPagesAction)
    }, []);
    // if(routers.length === 0) return false
    return (
      <BrowserRouter>
          {/*<LinkRoute />*/}
          <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                  {setRouterPage(routers)}
                  {setRouterPage(pages)}
                  <Route path={ROUTER.HOME} element={<Home />} />
              </Routes>
          </Suspense>
      </BrowserRouter>
    );
};
