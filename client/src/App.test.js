import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


test('renders learn react link', () => {
  const { queryByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = queryByText(/Henry/i);
  expect(linkElement).toBeInTheDocument();
});
