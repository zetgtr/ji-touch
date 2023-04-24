import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Home} from "../pages/home/Home";
import {ROUTER} from "./constants";
import {LinkRoute} from "../components/link";


export const Router = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route exact path={ROUTER.HOME} element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
};
