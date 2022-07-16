import { useContext } from "react";
import { Context } from "../Store/appcontext";

const Form = () => {
    const {actions, store} = useContext(Context)
    return (
        <form onSubmit={actions.handleSubmitLogin}>
            <div className="container createUserForm">
                <div className="mb-3 row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onChange={actions.handleChangeLogin} name="email" type="text" readonly className="form-control-plaintext" id="staticEmail" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onChange={actions.handleChangeLogin} name="password" type="password" className="form-control" id="inputPassword" />
                    </div>
                </div>
            </div>
            <div className="mb-3 row">
                <button type="submit" className="btn btn-primary">
                    Create user
                </button>
            </div>
        </form>
    )
}

export default Form;