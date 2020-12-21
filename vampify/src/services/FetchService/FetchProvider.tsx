import React, { FunctionComponent } from 'react';
import { HelmetProps } from 'react-helmet';
import FetchContext from './FetchContext';
import * as healthCheck from './APIs/healthCheck';
import * as joinNow from './APIs/joinNow';

const FetchProvider: FunctionComponent<HelmetProps> = props => {
  return (
    <FetchContext.Provider
      value={{
        healthCheck,
        joinNow,
      }}
    >
      {props.children}
    </FetchContext.Provider>
  );
};

export { FetchProvider, FetchContext };
