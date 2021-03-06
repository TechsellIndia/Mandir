import React from "react";
import { Image } from 'react-native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Aaj from '../components/BottomTabScreen/Aaj'
import Sangeet from "../components/BottomTabScreen/Sangeet";
import Coustom from "../components/BottomTabScreen/Coustom";
import Mahabhandaar from "../components/BottomTabScreen/Mahabhandaar";
import Samudaya from "../components/BottomTabScreen/Samudaya";
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import coustom1 from '../assets/coustom1.png';



const Tab = createBottomTabNavigator();

function BottomTab({ }) {
    return (


        <Tab.Navigator
            initialRouteName="Coustom"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'आज के सुझाव') {
                        iconName = focused ? 'view-agenda' : 'view-agenda';


                    } else if (route.name === 'संगीत संग्रह') {
                        iconName = focused ? 'music-note' : 'music-note';



                    } else if (route.name === 'महाभंडार') {
                        iconName = focused ? 'auto-stories' : 'auto-stories';

                    } else if (route.name === 'Samudaya') {
                        iconName = focused ? 'vertical-distribute' : 'vertical-distribute';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: '#ff751a',
                tabBarInactiveTintColor: 'black',
                tabBarShowLabel: false,
                // headerShown: false,
                headerTitleAlign: 'center',

                tabBarStyle: {
                    backgroundColor: '#F7B02D',
                    height: 60,


                },
                headerStyle: {
                    backgroundColor: '#F7B02D'
                }


            })}


        >

            <Tab.Screen name="आज के सुझाव" component={Aaj} />
            <Tab.Screen name="संगीत संग्रह" component={Sangeet} />
            <Tab.Screen name="Welcome 🙏" component={Coustom} options={{
                tabBarIcon: () => (<Image source={coustom1} style={{ width: 45, height: 45, }} />)
            }} />
            <Tab.Screen name="महाभंडार" component={Mahabhandaar} />
            <Tab.Screen name="Samudaya" component={Samudaya} headerShown="false" options={{ headerShown: false }} />


        </Tab.Navigator>






    );
}

export default BottomTab;



