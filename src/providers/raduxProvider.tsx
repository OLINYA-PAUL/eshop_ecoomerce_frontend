import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import {Store} from "../radux/store/store";

export const RaduxProviders = ({
  children,
}: {
  children: ReactElement;
}): React.ReactElement => {
  return <Provider store={Store}>{children}</Provider>;
};
