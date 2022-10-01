import useState from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    setSearch({ ...search, [name]: value });
  };

  return (
    <div className="component-search-input">
      <div>
        <input type="text" onChange={onChange} />
      </div>
    </div>
  );
};

export default SearchInput;
