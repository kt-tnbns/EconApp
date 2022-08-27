import Currency from '../screens/Currency';
import Dashboard from '../screens/Dashboard';
import GDP from '../screens/GDP';
import GoldPrice from '../screens/GoldPrice';
import OilPrice from '../screens/OilPrice';

export const ScreenDetail = [
    {
        title:'Dashboard',
        component:Dashboard,
        drawerLabel:'Home',
        Icon:'',
    },
    {
        title:'Gross Domestic Product',
        component:GDP,
        drawerLabel:'GDP',
        Icon:'',

    },
    {
        title:'Currency',
        component:Currency,
        drawerLabel:'Currency',
        Icon:'',

    },
    {
        title:'Oil Price',
        component:OilPrice,
        drawerLabel:'Oil Price',
        Icon:'',

    },
    {
        title:'Gold Price',
        component:GoldPrice,
        drawerLabel:'Gold Price',
        Icon:'',

    },
]