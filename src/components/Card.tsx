// on importe le composant Link de Next pour gerer une navigation
import Link from 'next/link';
import { Pokemon } from '@/@types/pokemon';
import LikeBtn from './LikeBtn';

interface CardProps{
  pokemon: Pokemon;
}

function Card({ pokemon }: CardProps) {
  return (
    <div className="bg-cyan-900 rounded-lg shadow-lg p-4 flex flex-col w-full hover:bg-cyan-800">
      <LikeBtn />
      <Link href={`/pokemon/${pokemon.name.en}`}>
        <img
          src={pokemon.sprites.shiny || pokemon.sprites.regular}
          alt={pokemon.name.fr}
        />
      </Link>
      <div className="py-2 text-center">
        <h3 className="font-bold text-cyan-400">
          {`#${pokemon.pokedexId} - ${pokemon.name.fr}`}
        </h3>
        <h4 className="text-cyan-600 text-center">
          {pokemon.name.en}
        </h4>
      </div>
      <p className="flex flex-wrap gap-2 justify-center">
        {pokemon.types?.map((type) => (
          <span key={type.name} className="flex items-center gap-2 text-sm text-slate-300">
            {type.name}
            <img src={type.image} alt={type.name} className="w-6" />
          </span>
        ))}
      </p>
    </div>
  );
}

export default Card;
