import { useEffect, FunctionComponent } from 'react';
// * components
import nrpogress from 'nprogress';
import 'nprogress/nprogress.css';

/* configure */
nrpogress.configure({ showSpinner: false });

type Props = {};

export const NprogressFallback: FunctionComponent<Props> = (
  props,
): JSX.Element | null => {
  useEffect(() => {
    nrpogress.start();

    return () => {
      nrpogress.done();
    };
  });

  return null;
};
