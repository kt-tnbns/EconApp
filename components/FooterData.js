import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'

export const FooterData = [
    {
        title:'Home',
        iconType:Ionicons,
        iconSelected:'home',
        iconUnselect : 'home-outline',

    },
    {
        title:'GoldPrice',
        iconType:Ionicons,
        iconSelected:'prism',
        iconUnselect : 'prism-outline'
    },
    {
        title:'OilPrice',
        iconType:MaterialCommunityIcons,
        iconSelected:'gas-station',
        iconUnselect : 'gas-station-outline'
    },
    {
        title:'Currency',
        iconType:Ionicons,
        iconSelected:'logo-usd',
        iconUnselect :'logo-usd'
    },
    {
        title:'GDP',
        iconType:Ionicons,
        iconSelected:'bar-chart',
        iconUnselect : 'bar-chart-outline'
    }
]