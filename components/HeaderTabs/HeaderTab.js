import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTab() {

    const [selected, setSelected] = useState("Delivery");
    console.log(selected)

    return (
        <View style={{ alignSelf: "center", flexDirection: "row" }}>
            <HeaderButton
                text="Delivery"
                btnColor="black"
                textColor="white"
                activeTab={selected}
                setActiveTab={setSelected}
            />
            <HeaderButton
                text="Pickup"
                btnColor="white"
                textColor="black"
                activeTab={selected}
                setActiveTab={setSelected}
            />
        </View>
    )
}

const HeaderButton = (props) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: props.activeTab === props.text ? "black" : "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}
            onPress={() => props.activeTab !== props.text && props.setActiveTab(props.text)}
        >
            <Text style={{
                color: props.activeTab === props.text ? "white" : "black",
                fontSize: 15,
                fontWeight: "900",
            }}>{props.text}</Text>
        </TouchableOpacity>
    )
}