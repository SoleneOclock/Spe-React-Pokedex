'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const getData = async () => {
      const resultJson = await fetch('https://api-pokemon-fr.vercel.app/api/v1/pokemon');
      const result = await resultJson.json();
      console.log(result);
    };
    getData();
  }, []);

  return (
    <main className="min-h-screen p-4">
      <h2 className="text-pink-500 hover:text-cyan-500">
        Pokedex
      </h2>
      <p className="">
        ici nos pokemons
      </p>
    </main>
  );
}
