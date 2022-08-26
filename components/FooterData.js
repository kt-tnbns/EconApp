import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'

export const FooterData = [
    {
        title:'Home',
        iconType:Ionicons,
        iconSelected:'home',
        iconUnselect : 'home-outline',
        color:'info',
    },
    {
        title:'GoldPrice',
        iconType:MaterialCommunityIcons,
        iconSelected:'gold',
        iconUnselect : 'gold',
        color:'tertiary',
    },
    {
        title:'OilPrice',
        iconType:MaterialCommunityIcons,
        iconSelected:'gas-station',
        iconUnselect : 'gas-station-outline',
        color:'warning',
    },
    {
        title:'Currency',
        iconType:Ionicons,
        iconSelected:'logo-usd',
        iconUnselect :'logo-usd',
        color:'indigo',
    },
    {
        title:'GDP',
        iconType:Ionicons,
        iconSelected:'bar-chart',
        iconUnselect : 'bar-chart-outline',
        color:'secondary'
    }
]