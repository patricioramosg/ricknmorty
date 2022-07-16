import { Context } from "../Store/appcontext";
import { useContext } from 'react';
import CardsCharacters from "../Components/CardsCharacters";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Personajes = () => {

    const { store, actions } = useContext(Context);

    return (
        <>
            <Navbar />
            <CardsCharacters />
            <Footer />
            <div>
                <h1>counter:{store.counter}</h1>
                <button onClick={() => { actions.increase() }}>aumentar</button>
            </div>
        </>
    )
}

export default Personajes;