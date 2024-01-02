"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./configStore/store";

type Children = {
  children: React.ReactNode;
};

const Providers = ({ children }: Children) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default Providers;
