import { Context } from "../Store/appcontext";
import { useContext } from "react";
import Navbar from "../Components/Navbar";
import Episodes from "../Components/Episodes";
import Seasons from "../Components/Seasons";

const Episodios = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <Navbar />
            <Seasons />
            <Episodes />
            <div>
                <h1>counter:{store.counter}</h1>
                <button
                    onClick={() => {
                        actions.increase();
                    }}
                >
                    aumentar
                </button>
            </div>
        </>
    );
};

export default Episodios;
