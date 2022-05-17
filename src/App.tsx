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
  const [filteredCountries, setFilterdCountries] = React.useState<
    countriesType | undefined
  >(undefined);

  React.useEffect(() => {
    if (countries) setFilterdCountries([...countries]);
  }, [countries]);

  const handleOnSearch = (searchedCountry: string) => {
    const filteredValue = countries?.filter((fc) =>
      fc.name.toLowerCase().includes(searchedCountry)
    );
    if (filteredValue?.length) setFilterdCountries([...filteredValue]);
    else setFilterdCountries(undefined);
  };

  if (loading) return <div>loading...</div>;
  if (error) return <div>opps....something went wrong!</div>;
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
        ) : (
          <div>there is no country!</div>
        )}
      </div>
    </div>
  );
};

export default App;
