import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Testa se nao tem pokemon favoritado', () => {
  renderWithRouter(<App />, { route: '/favorites' });

  const p = screen.getByText('No favorite Pokémon found');
  expect(p).toBeInTheDocument();
});

test('Testa se so sao exibidos os favoritos', async () => {
  const { user } = renderWithRouter(<App />, { route: '/pokemon/25' });

  const input = screen.getByLabelText('Pokémon favoritado?');
  const linkFavorite = screen.getByRole('link', { name: 'Favorite Pokémon' });
  await user.click(input);
  await user.click(linkFavorite);
  expect(screen.getByRole('heading', { name: 'Favorite Pokémon' })).toBeInTheDocument();
  const img = screen.getByAltText('Pikachu is marked as favorite');
  expect(img).toHaveAttribute('src', '/star-icon.svg');
});
