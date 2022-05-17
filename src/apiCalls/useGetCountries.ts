import React from "react";

export type responseType = {
  name: string;
  capital: string;
  altSpellings: string[];
  region: string;
  population: number;
  area: number;
  timezones: string[];
  nativeName: string;
  flag: string;
}[];

const getCountries: () => Promise<responseType> = () =>
  fetch("https://restcountries.com/v2/all").then((res) => res.json());

const useGetCountries: () => {
  loading: boolean;
  error: Error | undefined;
  countries: responseType | undefined;
  fetchCountries: () => void;
} = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | undefined>(undefined);
  const [countries, setCountries] = React.useState<responseType | undefined>(
    undefined
  );

  const fetchCountries = () => {
    setLoading(true);
    getCountries()
      .then((res) => setCountries(res))
      .catch((err) => setError(err))
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
