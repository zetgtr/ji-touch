import React, {lazy, Suspense, useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "../pages/home/Home";
import {ROUTER} from "./constants";
import {LinkRoute} from "../components/link";
import {setRouterData} from "../api/links";
import {setRouterAction} from "../store/router/actions";
import {routerSelector} from "../store/router/selector";
import {useDispatch, useSelector} from "react-redux";


export const Router = () => {
    const dispatch = useDispatch();
    const { routers } = useSelector(routerSelector);

    const setRouterPage = (routers, parentUrl = "") => {
        return routers.map((el) => {
            const url = `${parentUrl}/${el.url}`;
            const PageComponent = lazy(() =>
                import(`../pages/panels/${el.page.title}Page`)
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
        setRouterData('test',dispatch,setRouterAction)
    }, []);
    if(routers.length === 0) return false
    return (
      <BrowserRouter>
          <LinkRoute />
          <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                  {setRouterPage(routers)}
                  <Route exact path={ROUTER.HOME} element={<Home />} />
              </Routes>
          </Suspense>
      </BrowserRouter>
    );
};
