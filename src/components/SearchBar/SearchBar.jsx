import propTypes from 'prop-types';
export const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <label>
        <p>Search by name</p>
        <input
          onChange={evt => {
            onSearch(evt.target.value);
          }}
          type="text"
        />
      </label>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: propTypes.func,
};
