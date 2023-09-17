import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AtributesType {
  name: string;
  url: string;
}

interface Type {
  type: AtributesType;
}

export interface PokemonDTO {
  img: string;
  name: string;
  id: number;
  type: Type[];
  isFavorite: boolean;
}

interface PokemonProviderProps {
  children: ReactNode;
}

interface PokemonData {
  listPokemon: PokemonDTO[];
  listLikedPokemon: PokemonDTO[];
  listSearchPokemon: PokemonDTO[];
  handleSetListPokemon: (listPokemon: PokemonDTO[]) => void;
  handleAddListPokemon: (pokemon: PokemonDTO) => void;
  handleRemoveListPokemon: (pokemon: PokemonDTO) => void;
  handleAddListSearchPokemon: (pokemon: PokemonDTO) => void;
  handleLikedPokemon: (id: number) => void;
  handleDisLikedPokemon: (id: number) => void;
}

export const PokemonContext = createContext<PokemonData>({} as PokemonData);

export function PokemonProvider({ children }: PokemonProviderProps) {
  const [listPokemon, setListPokemon] = useState<PokemonDTO[]>([]);
  const [listLikedPokemon, setListLikedPokemon] = useState<PokemonDTO[]>([]);
  const [listSearchPokemon, setListSearchPokemon] = useState<PokemonDTO[]>([]);

  function handleSetListPokemon(list: PokemonDTO[]) {
    setListPokemon(list);
  }

  function handleSetLisSearchPokemon(list: PokemonDTO[]) {
    setListSearchPokemon(list);
  }

  function handleAddListPokemon(pokemon: PokemonDTO) {
    setListPokemon((oldArray) => [...oldArray, pokemon]);
  }

  function handleAddListLikedPokemon(pokemon: PokemonDTO) {
    setListLikedPokemon((oldArray) => [...oldArray, pokemon]);
  }

  function handleAddListSearchPokemon(pokemon: PokemonDTO) {
    setListSearchPokemon((oldArray) => [...oldArray, pokemon]);
  }

  function handleRemoveListPokemon(pokemon: PokemonDTO) {
    const newList = listLikedPokemon.filter((item) => pokemon.id !== item.id);
    setListLikedPokemon(newList);
  }

  function handleLikedPokemon(id: number) {
    const newList = listPokemon.map((item) => {
      if (id === item.id) {
        const pokemon = {
          ...item,
          isFavorite: true,
        };
        handleAddListLikedPokemon(pokemon);
        return pokemon;
      } else {
        return item;
      }
    });

    const newListSerch = listSearchPokemon.map((item) => {
      if (id === item.id) {
        const pokemon = {
          ...item,
          isFavorite: true,
        };
        handleAddListLikedPokemon(pokemon);
        return pokemon;
      } else {
        return item;
      }
    });

    setListPokemon(newList);
    setListSearchPokemon(newListSerch);
  }

  function handleDisLikedPokemon(id: number) {
    const newList = listPokemon.map((item) => {
      if (id === item.id) {
        const pokemon = {
          ...item,
          isFavorite: false,
        };
        handleRemoveListPokemon(pokemon);
        return pokemon;
      } else {
        return item;
      }
    });

    const newListSerch = listSearchPokemon.map((item) => {
      if (id === item.id) {
        const pokemon = {
          ...item,
          isFavorite: false,
        };
        handleRemoveListPokemon(pokemon);
        return pokemon;
      } else {
        return item;
      }
    });
    setListSearchPokemon(newListSerch);
    setListPokemon(newList);
  }

  return (
    <PokemonContext.Provider
      value={{
        listPokemon,
        listLikedPokemon,
        listSearchPokemon,
        handleSetListPokemon,
        handleAddListPokemon,
        handleRemoveListPokemon,
        handleDisLikedPokemon,
        handleLikedPokemon,
        handleAddListSearchPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemons() {
  const context = useContext(PokemonContext);
  return context;
}
