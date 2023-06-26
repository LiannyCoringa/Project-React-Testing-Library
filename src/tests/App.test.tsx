import App from "../App";
import renderWithRouter from "../renderWithRouter";
import { screen } from "@testing-library/react";

test('Testa os textos dos links de navegação', async () => {
  const { user } = renderWithRouter(<App />);
  const linkHome = screen.getByRole('link', {name: 'Home'});
  const linkAbout = screen.getByRole('link', {name: 'About'});
  const linkFavorite = screen.getByRole('link', {name: 'Favorite Pokémon'});

  await user.click(linkHome);
  expect(screen.getByRole('heading', {name: 'Encountered Pokémon'})).toBeInTheDocument();

  await user.click(linkAbout);
  expect(screen.getByRole('heading', {name: 'About Pokédex'})).toBeInTheDocument();

  await user.click(linkFavorite);
  expect(screen.getByRole('heading', {name: 'Favorite Pokémon'})).toBeInTheDocument();
});

test('Testa o NotFound', () => {
  renderWithRouter(<App />, {route: '/teste'});
  expect(screen.getByAltText('Pikachu crying because the page requested was not found')).toBeInTheDocument();
})
