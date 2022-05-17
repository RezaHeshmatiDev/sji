import React, { FC } from "react";
import Button from "../atomic/button";
import Input from "../atomic/input";

type SearchPropsType = {
  handleSearch: (searchedValue: string) => void;
};

const Search: FC<SearchPropsType> = ({ handleSearch }) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleOnchange = (value: string) => setInputValue(value);

  return (
    <div>
      <Input
        placeholder="write your text here...."
        value={inputValue}
        onChange={(e) => handleOnchange(e.target.value)}
      />
      <Button title="search" onClick={() => handleSearch(inputValue)} />
    </div>
  );
};

export default Search;
