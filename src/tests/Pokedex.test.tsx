import { screen } from "@testing-library/react";
import App from "../App";
import renderWithRouter from "../renderWithRouter";
import pokemonList from "../data";

test('Testando Pokedex', async () => {
  const { user } = renderWithRouter(<App />);

  const h2 = screen.getByRole('heading', { name: 'Encountered Pokémon' });
  expect(h2).toBeInTheDocument();
  const buttonNext = screen.getByRole('button', { name: 'Próximo Pokémon' });
  const img = screen.getByAltText('Pikachu sprite');
  expect(img).toHaveProperty('src', 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');

  // Segundo
  await user.click(buttonNext);
  const img1 = screen.getByAltText(pokemonList[1].name + ' sprite');
  expect(img1).toHaveProperty('src', pokemonList[1].image);

  //Terceiro
  await user.click(buttonNext);
  const img2 = screen.getByAltText(pokemonList[2].name + ' sprite');
  expect(img2).toHaveProperty('src', pokemonList[2].image);

  //Quarto
  await user.click(buttonNext);
  const img3 = screen.getByAltText(pokemonList[3].name + ' sprite');
  expect(img3).toHaveProperty('src', pokemonList[3].image);

  //Quinto
  await user.click(buttonNext);
  const img4 = screen.getByAltText(pokemonList[4].name + ' sprite');
  expect(img4).toHaveProperty('src', pokemonList[4].image);

  //Sexto
  await user.click(buttonNext);
  const img5 = screen.getByAltText(pokemonList[5].name + ' sprite');
  expect(img5).toHaveProperty('src', pokemonList[5].image);

  //Setimo
  await user.click(buttonNext);
  const img6 = screen.getByAltText(pokemonList[6].name + ' sprite');
  expect(img6).toHaveProperty('src', pokemonList[6].image);

  //Oitavo
  await user.click(buttonNext);
  const img7 = screen.getByAltText(pokemonList[7].name + ' sprite');
  expect(img7).toHaveProperty('src', pokemonList[7].image);

  //Nono
  await user.click(buttonNext);
  const img8 = screen.getByAltText(pokemonList[8].name + ' sprite');
  expect(img8).toHaveProperty('src', pokemonList[8].image);

  await user.click(buttonNext);
  const img9 = screen.getByAltText(pokemonList[0].name + ' sprite');
  expect(img9).toHaveProperty('src', pokemonList[0].image);
});

test('Testando botoes dos tipos', async () => {
  const { user } = renderWithRouter(<App />);

  const buttonType = screen.getAllByTestId('pokemon-type-button');
  expect(buttonType).toHaveLength(7);

  await user.click(buttonType[1]);
  const img = screen.getByAltText('Charmander sprite');
  expect(img).toHaveProperty('src', 'https://archives.bulbagarden.net/media/upload/0/0a/Spr_5b_004.png');

  const buttonNext = screen.getByRole('button', { name: 'Próximo Pokémon' });
  await user.click(buttonNext);
  const img2 = screen.getByAltText('Rapidash sprite');
  expect(img2).toHaveProperty('src', 'https://archives.bulbagarden.net/media/upload/5/58/Spr_5b_078.png');
  const buttonPsychic = screen.getByRole('button', { name: pokemonList[4].type });
  expect(buttonPsychic).toBeInTheDocument();

  const buttonAll = screen.getByRole('button', { name: 'All' });
  expect(buttonAll).toBeInTheDocument();
  await user.click(buttonAll);
  const imgPikachu = screen.getByAltText('Pikachu sprite');
  expect(imgPikachu).toHaveProperty('src', 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
})
