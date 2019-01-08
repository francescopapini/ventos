import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Carousel from '../Carousel';

const Homepage = () => (
  <div>
    <Carousel />
    <div className="container">
      <h1>
        <FormattedMessage id="home.title" defaultMessage="Casa Ventos Do Cumbuco" />
      </h1>
      <p>
        <FormattedMessage
          id="home.description"
          defaultMessage="Located a short walk to Cumbuco, in the north of Brazil, Ventos Do Cumbuco is the perfect
                          place to spend a holiday on the beach or kitesurfing. Conveniently located within a short
                          drive from Fortaleza, you could be on the beach in less than half hour."
        />
      </p>
      <p>
        Take a look at the
        <Link to="/information"> information page </Link>
        to know more about Cumbuco and the house.
      </p>
    </div>
  </div>
);

export default Homepage;
