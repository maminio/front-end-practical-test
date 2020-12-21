export const getApolloClientUrl = (): string | undefined => {
  return `https://${process.env.REACT_APP_BASE_URL}api${process.env.REACT_APP_STAGE}.rectified.ai/graphql`;
};

export const getAxiosUrl = (): string | undefined => {
  return `http://localhost:5000`;
};
