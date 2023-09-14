import { React } from 'react'
import DogForm from '../components/DogForm';
import DogList from '../components/DogList';
import { DogContextProvider } from '../context/DogContext';

const DogPage = () => {
  return (
    <>
        <DogForm/>
        <DogList/>
    </>
  );
}

export default DogPage
