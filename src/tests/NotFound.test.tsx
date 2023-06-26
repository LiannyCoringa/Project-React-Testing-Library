import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Testando a pagina NotFound quando coloca uma rota inexistente', () => {
  renderWithRouter(<App />, { route: './NotFound' });

  const h2 = screen.getByRole('heading', { name: 'Page requested not found' });
  const img = screen.getByAltText('Pikachu crying because the page requested was not found');

  expect(h2).toBeInTheDocument();
  expect(img).toHaveProperty('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
