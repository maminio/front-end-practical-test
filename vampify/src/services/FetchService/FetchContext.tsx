import React from 'react';

// TODO: figure out if there's a better default value we could use
export default React.createContext<any>({
  healthCheck: (): any => null,
  joinNow: (): any => null,
});
