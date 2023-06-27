import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';

test('Testando o Pokemon Details', async () => {
  const { user } = renderWithRouter(<App />, { route: '/pokemon/25' });

  const h2Details = screen.getByRole('heading', { name: `${pokemonList[0].name} Details` });
  expect(h2Details).toBeInTheDocument();

  const h2Summary = screen.getByRole('heading', { name: 'Summary' });
  const parag = screen.getByText(pokemonList[0].summary);
  expect(h2Summary).toBeInTheDocument();
  expect(parag).toBeInTheDocument();

  const h2Loc = screen.getByRole('heading', { name: `Game Locations of ${pokemonList[0].name}` });
  expect(h2Loc).toBeInTheDocument();

  pokemonList[0].foundAt.forEach((location, index) => {
    const paragLoc = screen.getByText(location.location);
    const imgLoc = screen.getAllByAltText(`${pokemonList[0].name} location`);
    expect(paragLoc).toBeInTheDocument();
    expect(imgLoc[index]).toHaveProperty('src', location.map);
  });

  const input = screen.getByLabelText('Pokémon favoritado?');
  await user.click(input);
  const img = screen.getByAltText(`${pokemonList[0].name} is marked as favorite`);
  expect(img).toHaveAttribute('src', '/star-icon.svg');
  await user.click(input);
  expect(img).not.toBeInTheDocument();
});
