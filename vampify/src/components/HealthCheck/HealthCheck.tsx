import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react';

// * modules
import { useTranslation } from 'react-i18next';
import { FetchContext } from 'services/FetchService/FetchProvider';

export const HealthCheck: FunctionComponent = props => {
  const { t } = useTranslation();
  const { healthCheck } = useContext(FetchContext);
  const [healthStatus, setHealthStatus] = useState('Loading');

  /* @TODO The health status needs to be update every 2 seconds. */

  useEffect(() => {
    const interval = setInterval(() => {
      setHealthStatus('I dont know anymore!!');
    }, 3000);
    return () => clearInterval(interval);
  }, [healthStatus]);

  healthCheck
    .getHealth()
    .then((results: any) => {
      // @TODO Update the value of health status from here.
      console.log({ results });
    })
    .catch((e: any) => {
      console.log({ e });
    });

  return <div className="text-4xl">{`Health: ${healthStatus}`}</div>;
};
