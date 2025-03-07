import { Stack, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "../global.css";
import { Ionicons } from '@expo/vector-icons';
import { Dimensions, Pressable, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from 'react-native-svg';
import { YogaIcon } from "../assets/icons/yoga";
const TabBarBackground = () => {
  const width = Dimensions.get('window').width;
  return (
    <Svg width={width} height={80}>
      <Path
        d={`M 0 0 
          L ${width / 2 - 90} 0 
          C ${width / 2 - 30} 0 ${width / 2 - 40} 30 ${width / 2} 30 
          C ${width / 2 + 30} 30 ${width / 2 + 40} 0 ${width / 2 + 80} 0 
          L ${width} 0 
          L ${width} 80        
          L 0 80 Z`}          // Match height
        fill="#432344"
      />
    </Svg>
  );
}


export default function RootLayout() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#161622' }} edges={['top']}>
          <View className="bg-primary h-full" style={{ flex: 1 }}>
            <StatusBar backgroundColor="light" style="dark" />
            <Tabs
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                  let icon;
                  if (route.name === 'abc') {
                    icon = <Ionicons name="alarm" size={30} color={focused ? '#FF2525' : 'white'} />;
                  } else if (route.name === 'exercises') {
                    icon = <YogaIcon color={focused ? '#FF2525' : 'white'} size={30} />;
                  }

                  return (
                    <Pressable
                      android_ripple={{ color: '#FF2525', borderless: true, radius: 25 }}
                      style={({ pressed }) => [{
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: 10,
                        opacity: pressed ? 0.7 : 1,
                      }]}
                    >
                      {icon}
                    </Pressable>
                  );
                },
                tabBarShowLabel: false,
                headerShown: false,
                tabBarBackground: () => <TabBarBackground />,
                tabBarStyle: {
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 80,
                  backgroundColor: 'transparent',
                  borderTopWidth: 0,
                  elevation: 0,
                }
              })}
            >


              <Tabs.Screen
                name="abc"
                options={{
                  tabBarIcon: ({ color }) => (
                    <View style={{
                      marginTop: 10,
                      height: '100%',
                      justifyContent: 'flex-start',
                      alignItems: 'center'
                    }}>
                      <Ionicons name="alarm" size={30} color={"white"} />
                    </View>
                  ),
                  tabBarLabel: '',
                }}
              />


              <Tabs.Screen
                name="index"
                options={{
                  tabBarIcon: ({ color }) => (
                    <View style={{
                      position: 'absolute',
                      top: -50,
                      height: 60,
                      width: 60,
                      backgroundColor: '#FF2525',
                      borderRadius: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.3,
                      shadowRadius: 5,
                      elevation: 5,
                    }}>
                      <Ionicons name="home" size={30} color={"white"} />
                    </View>
                  ),
                  tabBarLabel: '',
                }}
              />



              <Tabs.Screen
                name="exercises"
                options={{
                  tabBarIcon: ({ color }) => (
                    <View
                      style={{
                        marginTop: 10,
                        height: '100%',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                      }}
                    >
                      <YogaIcon color="white" size={30} />
                    </View>
                  ),
                  tabBarLabel: '',
                }}
              />

            </Tabs>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
