import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';

test('Testa o card do Pokemon', async () => {
  const { user } = renderWithRouter(<App />);

  const name = screen.getByText(pokemonList[0].name);
  const type = screen.getByTestId('pokemon-type');
  const weight = screen.getByText(`Average weight:
    ${pokemonList[0].averageWeight.value}
    ${pokemonList[0].averageWeight.measurementUnit}`);
  const img = screen.getByAltText(`${pokemonList[0].name} sprite`);
  expect(img).toHaveProperty('src', pokemonList[0].image);
  expect(name).toBeInTheDocument();
  expect(type).toBeInTheDocument();
  expect(weight).toBeInTheDocument();
  expect(type).toHaveTextContent(pokemonList[0].type);

  const link = screen.getByRole('link', { name: 'More details' });
  expect(link).toHaveAttribute('href', `/pokemon/${pokemonList[0].id}`);
  await user.click(link);

  const h2Details = screen.getByRole('heading', { name: `${pokemonList[0].name} Details` });
  expect(h2Details).toBeInTheDocument();

  const input = screen.getByLabelText('Pokémon favoritado?');
  await user.click(input);
  const imgFavorite = screen.getByAltText(`${pokemonList[0].name} is marked as favorite`);
  expect(imgFavorite).toHaveAttribute('src', '/star-icon.svg');
});
