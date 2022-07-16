const APIusers = 'http://localhost:8080/create_user';
const getState = ({setStore, getActions, getStore}) => {

    return {
        store:{
            counter: 9000,
            favoritos:[
                
            ],
            user:{
                email: '',
                password: ''
            }    
            
        },
        actions:{
            increase: () => {
                const store = getStore();
                setStore({
                    counter: store.counter + 1000
                })
            },
            decrease : () => {
                const store = getStore();
                setStore({
                    counter: store.counter - 1000
                })
            },

            addFavorito: (props) => {
                const store = getStore();
                setStore({
                    favoritos: store.favoritos.concat(props)
                })
            },

            removeFavorito: (id) => {
                const store = getStore();
                console.log('se ejecuto')
                setStore({
                    favoritos: store.favoritos.filter((elemento,index)  => elemento.id !== id)
                })
            }, 

            handleChangeLogin: (evento) => { //recoje info del formulario
                const {user} = getStore(); 
                setStore({
                    user:{ //user es un objeto
                        ...user, //mantiene todas las propiedades de user (email y password)
                        [evento.target.name]:evento.target.value // guardamos las propiedades que le agregamos en el imput del formulario
                    }
                })
            },

            handleSubmitLogin: (evento) =>{ //
                evento.preventDefault(); //evitamos que la pag vuelva a cargar.
                const {user} = getStore() //traeme el usuario del store
                fetch(APIusers,{
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json" //el lenguaje de comunicacion es json
                    },
                    body:JSON.stringify(user)
                }).then(res => res.json()).then(data => console.log(data))//convertimos la respuesta de json a js y luego le hacemos un consolelog
            }
        }
    }
}

export default getState;