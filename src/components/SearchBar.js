import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const SearchBar = () => {
  const [locations, setLocations] = useState([]);
  const [applianceType, setApplianceType] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    axios.get('https://www.creative-tim.com/product/argon-dashboard').then(response => {
      setLocations(response.data);
    });
  }, []);

  const handleSearch = (e) => {
    setApplianceType(e.target.value);
    if (e.target.value.length > 2) {
      axios.get(`/api/appliance-suggestions?q=${e.target.value}`).then(response => {
        setSuggestions(response.data);
      });
    }
  };

  return (
    <Form inline className="justify-content-center">
      <Form.Control as="select" className="mr-sm-2" custom>
        {locations.map(location => (
          <option key={location.id} value={location.name}>
            {location.name}
          </option>
        ))}
      </Form.Control>
      <FormControl
        type="text"
        placeholder="Search appliance type"
        className="mr-sm-2"
        onChange={handleSearch}
        value={applianceType}
      />
      <Button variant="outline-success">Search</Button>
      <div>
        {suggestions.map(suggestion => (
          <div key={suggestion.id}>{suggestion.name}</div>
        ))}
      </div>
    </Form>
  );
};

export default SearchBar;
