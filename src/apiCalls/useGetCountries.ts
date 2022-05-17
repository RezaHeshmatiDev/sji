import React from "react";

export type ResponseType = {
  name: string;
  capital: string;
  region: string;
  population: number;
  flag: string;
}[];

const getCountries: () => Promise<ResponseType> = () =>
  fetch(
    "https://restcountries.com/v2/all?fields=name,capital,region,population,flag"
  ).then((res) => res.json());

const useGetCountries: () => {
  loading: boolean;
  error: Error | undefined;
  countries: ResponseType | undefined;
  fetchCountries: () => void;
} = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | undefined>(undefined);
  const [countries, setCountries] = React.useState<ResponseType | undefined>(
    undefined
  );

  const fetchCountries = () => {
    setLoading(true);
    getCountries()
      .then((res) => {
        setCountries(res);
        setError(undefined);
      })
      .catch((err) => {
        setError(err);
        setCountries(undefined);
      })
      .finally(() => setLoading(false));
  };
  React.useEffect(() => {
    fetchCountries();
  }, []);

  return {
    loading,
    error,
    countries,
    fetchCountries,
  };
};

export default useGetCountries;
