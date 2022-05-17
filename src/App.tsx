import useGetCountries from "./apiCalls/useGetCountries";
import styles from "./App.module.css";
import Card from "./components/card";
import Header from "./components/header";

const App = () => {
  const { loading, countries, error } = useGetCountries();
  if (loading) return <div>loading</div>;
  if (error) return <div>opps....something went wrong!</div>;
  return (
    <div className={styles.App}>
      <Header />
      <div id={styles.cards_container}>
        {countries?.map((country) => (
          <Card
            name={country.name}
            flag={country.flag}
            capital={country.capital}
            region={country.region}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
