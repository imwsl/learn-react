// import { render, screen } from '@testing-library/react';
// import App from './App';

import {sumTwo, sumOrders} from './funtions'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("many testing....", () => {
  test('sumTwo(1, 2)', () => {
    expect(sumTwo(1, 2)).toBe(3);
  });
  
  const orders = [
    {'name': "one", "price": 1},
    {'name': "two", "price": 2},
  ]
  
  test("sumOrders...", () => {
    expect(sumOrders(orders)).toBe(3)
  });
})
