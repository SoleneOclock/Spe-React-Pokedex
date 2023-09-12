import { Pokemon } from '@/@types/pokemon';
import Link from 'next/link';

interface SinglePokemonProps {
  params: {
    name: string;
  }
}

const getPokemonData = async (name: string) => {
  const result = await fetch(`https://api-pokemon-fr.vercel.app/api/v1/pokemon/${name}`);
  return result.json();
};

async function SinglePokemon({ params }: SinglePokemonProps) {
  const pokemon = await getPokemonData(params.name) as Pokemon;

  return (
    <main className="min-h-screen p-4">
      <h2 className="text-pink-500 hover:text-cyan-500">
        {pokemon.name.fr}
      </h2>

      <Link href="/">← Accueil</Link>

      <img
        src={pokemon.sprites.shiny || pokemon.sprites.regular}
        alt={pokemon.name.fr}
      />
    </main>
  );
}

export default SinglePokemon;
