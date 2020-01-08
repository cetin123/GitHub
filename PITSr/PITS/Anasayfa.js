import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import App from './App.js';
import sifre from './sifre.js';
import perspage from './perspage.js';
import mission from './mission.js';
import report from './report.js';
import assign from './assign.js';
import view from './view.js';



const AppNavigator=createStackNavigator(
{

    App:{screen:App},
    sifre:{screen:sifre},
perspage:{screen:perspage},
mission:{screen:mission},
report:{screen:report},
assign:{screen:assign},
view:{screen:view}


},
{
    initialRouteName:'App',
    headerMode:'none'
});
export default createAppContainer(AppNavigator);