import React from "react";
import useGetCountries, {
  ResponseType as countriesType,
} from "./apiCalls/useGetCountries";
import styles from "./App.module.css";
import Card from "./components/card";
import Header from "./components/header";
import Search from "./components/search";

const App = () => {
  const { loading, countries, error } = useGetCountries();

  const [filteredCountries, setFilteredCountries] = React.useState<
    countriesType | undefined
  >(countries);
  const ref = React.useRef(false);
  React.useEffect(() => {
    ref.current = false;
  }, []);
  React.useEffect(() => {
    if (countries) setFilteredCountries([...countries]);
  }, [countries]);

  const handleOnSearch = (searchedCountry: string) => {
    const filteredValues = countries?.filter((country) =>
      country.name.toLowerCase().includes(searchedCountry)
    );
    if (filteredValues?.length) setFilteredCountries([...filteredValues]);
    else setFilteredCountries(undefined);
  };

  if (loading) return <div id={styles.loading_and_error}>Loading...</div>;
  if (error)
    return (
      <div id={styles.loading_and_error}>Opps....Something went wrong!</div>
    );
  return (
    <div className={styles.App}>
      <Header />
      <br />
      <div id={styles.search_bar}>
        <Search handleSearch={handleOnSearch} />
      </div>
      <div id={styles.cards_container}>
        {filteredCountries ? (
          filteredCountries?.map(({ name, flag, capital, region }) => (
            <Card name={name} flag={flag} capital={capital} region={region} />
          ))
        ) : ref.current ? (
          <div>There is no country!</div>
        ) : undefined}
      </div>
    </div>
  );
};

export default App;
