import { Context } from "../Store/appcontext";
import { useContext } from 'react';
import CardsCharacters from "../Components/CardsCharacters";
import Navbar from "../Components/Navbar";
import Form from "../Components/Form";
import Footer from "../Components/Footer";


const CreateUser = () => {

    const { store, actions } = useContext(Context);

    return (
        <>
            <Navbar />
            <Form />
            <Footer />
            <div>
                <h1>counter:{store.counter}</h1>
                <button onClick={() => { actions.increase() }}>aumentar</button>
            </div>
        </>
    )
}

export default CreateUser;