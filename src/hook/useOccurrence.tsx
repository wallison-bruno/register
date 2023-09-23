import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Information {
  id: any;
  numeroOcorrencia: any;
  data: any;
  delegacia: any;
  endereco: any;
  ais: any;
  relato: any;
}

export interface Patrolling {
  vtr: any;
  comandante: {
    qra: any;
    numeral: any;
    categoria: {
      key: any;
      name: any;
    };
  };
  motorista: {
    qra: any;
    numeral: any;
    categoria: {
      key: any;
      name: any;
    };
  };
  patrulheiro: {
    qra: any;
    numeral: any;
    categoria: {
      key: any;
      name: any;
    };
  };
}

export interface Seizures {
  armas: any;
  drogas: any;
  veiculos: any;
}

interface OccorrenceProviderProps {
  children: ReactNode;
}

interface OccorrenceData {
  handleInformation: (information: Information) => void;
  handlePatrolling: (patrolling: Patrolling) => void;
  handleSeizures: (information: Seizures) => void;
}

const storegeKey = "@register:Occorrence";

export const OccorrenceContext = createContext<OccorrenceData>(
  {} as OccorrenceData
);

export function OccorrenceProvider({ children }: OccorrenceProviderProps) {
  const [information, setInformation] = useState<Information>();
  const [patrolling, setPatrolling] = useState<Patrolling>();
  const [seizures, setSeizures] = useState<Seizures>();

  // handles
  function handleInformation(information: Information) {
    console.log(information);
    setInformation(information);
  }
  function handlePatrolling(patrolling: Patrolling) {
    setPatrolling(patrolling);
  }
  function handleSeizures(information: Seizures) {
    setSeizures(seizures);
  }

  // handle save
  async function handleSaveOccorrence(
    information: Information,
    patrolling: Patrolling,
    seizures: Seizures
  ) {
    const newOccorrence = {
      information,
      patrolling,
      seizures,
    };

    try {
      const allOccorrence = await AsyncStorage.getItem(storegeKey);
      const currentOccorrence = allOccorrence ? JSON.parse(allOccorrence) : [];
      const transactions = [...currentOccorrence, newOccorrence];

      await AsyncStorage.setItem(storegeKey, JSON.stringify(transactions));
    } catch (erro) {
      console.log(erro);
    }
  }

  return (
    <OccorrenceContext.Provider
      value={{ handleInformation, handlePatrolling, handleSeizures }}
    >
      {children}
    </OccorrenceContext.Provider>
  );
}

export function useOccorrence() {
  const context = useContext(OccorrenceContext);
  return context;
}
