import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'

// components
import Categories from '../components/Categories/Categories'
import HeaderTab from '../components/HeaderTabs/HeaderTab'
import RestaurantItem from '../components/RestaurantItem/RestaurantItem'
import SearchBar from '../components/SearchBar/SearchBar'

export default function Home() {
    return (
        <SafeAreaView style={{ paddingTop: 40, backgroundColor: "#eee", flex: 1 }}>
            {/* TopWindow */}
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTab />
                <SearchBar />
            </View>

            {/* BodyScreen */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem />
            </ScrollView>

        </SafeAreaView>
    )
}