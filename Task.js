import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function Task(props) {
    return (
        <View style = {styles.item}>
            <View style = {styles.itemLeft}>
                <View style = {styles.square}>

                </View>
                <Text style = {styles.itemText}> {props.text}</Text>
            </View>
            <View style = {{marginEnd: -200}}>
            <TouchableOpacity style = {styles.actions}>
            <MaterialIcons name="done" size={24} color="#fff" />

            </TouchableOpacity>
            </View>
                    <View style = {styles.circular}></View>
        </View>
    );
}

const styles = StyleSheet.create({
            item:{
                backgroundColor: "#FFF",
                padding: 15,
                borderRadius: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 20,

            },
        itemLeft: {
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
        

        },
        square: {
            width: 24,
            height: 24,
            backgroundColor: "#55BCF6",
            opacity: 0.4,
            borderRadius: 5,
            marginRight: 15,


        },
        itemText: {
            maxHeight: "80%",
            

        },
        // // direct: {
        // //     flex: 1,
        // //     marginLeft: 200,

        // },
        actions: {
        width: 25,
        height: 25,
        backgroundColor: 'green',
        borderRadius: 3,
        flexDirection: "row-reverse",
            },
            

    
})

export default Task;