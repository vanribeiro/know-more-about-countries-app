/* eslint-disable testing-library/no-node-access */
import React from 'react';
import CardList from ".";
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('CardList component', () => {
    it('should always have the same snapshot', () => {
        const cardsInfo = [{
            flags: {
              png: "https://flagcdn.com/w320/me.png",
              svg: "https://flagcdn.com/me.svg"
            },
            name: {
              common: "Montenegro",
            },
            capital: [
              "Podgorica"
            ],
            region: "Europe",
            population: 621718
        }];
        
        const { container } = render(
          <BrowserRouter>
            <CardList cardsInfo={cardsInfo}/>
          </BrowserRouter>
        );

        // eslint-disable-next-line no-undef
        // eslint-disable-next-line testing-library/no-container
        expect(container.querySelector('section')).toMatchSnapshot();
    });
});