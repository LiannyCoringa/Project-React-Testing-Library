import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Testando a pagina About', () => {
  renderWithRouter(<App />, { route: '/about' });

  const h2 = screen.getByRole('heading', { name: 'About Pokédex' });
  const pOne = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémon');
  const pTwo = screen.getByText('One can filter Pokémon by type, and see more details for each one of them');
  const img = screen.getByAltText('Pokédex');

  expect(h2).toBeInTheDocument();
  expect(pOne).toBeInTheDocument();
  expect(pTwo).toBeInTheDocument();
  expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
