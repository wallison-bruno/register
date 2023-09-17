import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

//mudar any para tipos mais espesíficos
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

interface OccorrenceData {}

const storegeKey = "@gofinacens:Transactons";

export const OccorrenceContext = createContext<OccorrenceData>(
  {} as OccorrenceData
);

export function OccorrenceProvider({ children }: OccorrenceProviderProps) {
  const [information, setInformation] = useState<Information>();
  const [patrolling, setPatrolling] = useState<Patrolling>();
  const [seizures, setSeizures] = useState<Seizures>();

  function handleInformation(information: Information) {
    setInformation(information);
  }

  //fazer os outros dois handles da corroencia

  async function handleSaveOccorrence(
    inform: Information,
    patrolling: Patrolling,
    seizures: Seizures
  ) {
    // Veririficar se todos os parametros passados por esste método não estão null
    const newOccorrence = {
      Informação: inform,
      Patrulha: patrolling,
      apreencoes: seizures,
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
    <OccorrenceContext.Provider value={{}}>
      {children}
    </OccorrenceContext.Provider>
  );
}

export function useOccorrence() {
  const context = useContext(OccorrenceContext);
  return context;
}
