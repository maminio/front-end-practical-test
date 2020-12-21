import React, { FunctionComponent } from 'react';

// * modules
import { Helmet as ReactHelmet, HelmetProps } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export const Helmet: FunctionComponent<HelmetProps> = props => {
  const { t } = useTranslation();

  /*
   * Pick title from props
   */
  const { title: DocumentTitle } = props;

  function renderTitle(): string {
    if (DocumentTitle) {
      return `| ${DocumentTitle}`;
    }
    return '';
  }
  const title = `${t('Vampify')} ${renderTitle()}`;

  return <ReactHelmet title={title} />;
};
