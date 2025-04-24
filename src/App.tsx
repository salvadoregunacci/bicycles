import "./scss/styles.scss";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router.tsx";
import {store} from "./redux/store.ts";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    )
}

export default App
