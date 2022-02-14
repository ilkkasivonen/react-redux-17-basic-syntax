import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./Counter";
import RUser from "./RUser";
import Layout from "./Layout";
import HookUser from "./hookUser";
import PrivateRoute from "./PrivateRoute";
import Filter from "./Filter";
import Exercises from "./exercises";
import StateCounter from "./stateCounter";
import HideAndShow from "./HideAndshow";
import Form from "./Form";
import Pokemons from "./Pokemons";

const App = () => {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Counter />}></Route>
                            <Route
                                index
                                path="/counter"
                                element={<Counter />}
                            ></Route>
                            <Route path="/ruser" element={<RUser />}></Route>
                            <Route path="/hookuser" element={<PrivateRoute />}>
                                <Route
                                    exact
                                    path="/hookuser"
                                    element={<HookUser />}
                                />
                            </Route>
                            <Route path="/exercises" element={<Exercises />}>
                                <Route
                                    index
                                    path="/exercises/filter"
                                    element={<Filter />}
                                ></Route>
                                <Route
                                    index
                                    path="/exercises/statecounter"
                                    element={<StateCounter />}
                                ></Route>
                                <Route
                                    index
                                    path="/exercises/hideshow"
                                    element={<HideAndShow />}
                                ></Route>
                                <Route
                                    index
                                    path="/exercises/form"
                                    element={<Form />}
                                ></Route>
                                <Route
                                    index
                                    path="/exercises/pokemons"
                                    element={<Pokemons />}
                                ></Route>
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
