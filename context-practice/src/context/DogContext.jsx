import { useState, useEffect, createContext } from "react";

export const DogContext = createContext()

export const DogContextProvider = (props) => {
  const [dogList, setDogList] = useState([])

  const deleteDog = (id) => {
    setDogList(dogList.filter((dog) => {
      return dog.id != id
    }));
  }

  const addDog = (dog) => {
    setDogList([...dogList, dog])
  }

  return(
    <DogContext.Provider value = {{dogList, deleteDog, addDog}}>
        {props.children}
    </DogContext.Provider>
  );

}

export default DogContext
