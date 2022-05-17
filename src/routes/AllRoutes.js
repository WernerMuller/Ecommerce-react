import Home from '../Pages/Home/Home';
import List from '../Pages/CoinList/List';


const userRoutes = [
    {path: "/", component: <Home />},
    {path: "/list", component: <List />},
]

export {userRoutes};