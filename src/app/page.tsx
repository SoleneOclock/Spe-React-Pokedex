import { Pokemon } from '@/@types/pokemon';
import Card from '@/components/Card';

const getData = async () => {
  // attention quand tu vas deployer vercel merci de si tu deploi en preprod
  // prendre telle url et si tu deploi en prod en prendre une autre
  // je vais te donner l'url de l'api dans une variable d'environnement
  // ah oui et je push pas le mot de passe de connexion à l'api sur github
  // (c'est trop risqué tout le monde pourrait le voir)
  // je vais te le donner en direct dans une variable d'environnement
  const resultJson = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon`);
  const result = await resultJson.json();
  return result as Pokemon[];
};

export default async function Home() {
  const data = await getData();
  // on prend que les 10 premiers pokemons pour les afficher avec slice
  // (sans le zéro qui est le pokemon bug)
  const first10pokemons = data.slice(1, 9);

  return (
    <main className="min-h-screen p-4 bg-cyan-300">
      <h2 className="text-pink-500 hover:text-cyan-500 text-center">
        Super Soso Pokedex
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 p-2">
        {
          first10pokemons.map((pokemon) => (
            <Card pokemon={pokemon} key={pokemon.pokedexId} />
          ))
        }
      </div>
    </main>
  );
}
