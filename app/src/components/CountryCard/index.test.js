import React from 'react';
import CountryCard from ".";
import { render } from '@testing-library/react';

describe('Card component', () => {
    it('should always have the same snapshot', () => {
        const info = {
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
        }
        
        const { container } = render(<CountryCard info={info}/>);
        // eslint-disable-next-line testing-library/no-node-access
        expect(container.firstChild).toMatchSnapshot();
    });
});