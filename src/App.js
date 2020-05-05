import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchBar from './components/SearchBar';
import DayCard from './components/DayCard';
import DayDetails from './components/DayDetails';
import sampleData from './data/sample.json';

console.log(sampleData);

const App = () => {
  const [data, setData] = useState({
    days: [],
    location: '',
    selectedDay: null,
    searchTerm: '',
  });

  const { days, location, selectedDay, searchTerm } = data;

  return (
    <Container>
      <Row>
        <Col md={7}>
          <h1>Weather for City, ST</h1>
        </Col>
        <Col md={5}>
          <SearchBar />
        </Col>
      </Row>
      <Row>
        {sampleData.data.map((day) => (
          <DayCard />
        ))}
      </Row>
      <Row>
        <Col>
          <DayDetails />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
