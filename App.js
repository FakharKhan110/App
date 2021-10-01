import React,{ useState} from 'react';
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './Components/Task';

export default function App() {
  const [task , setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask =  () => {
    Keyboard.dismiss();
   setTaskItems([...taskItems, task])
   setTask(null);
  } 
  const completeTask = (index) => {
    let itemCopy = [...taskItems];
    itemCopy.splice(index, 1);
    setTaskItems(itemCopy);
  }
  return (
    <View style = {styles.container}>
    
      
        <View style = {styles.taskWrap}>
        
          
              <Text style = {styles.sectionTitle}> TODO APP </Text>
              
              <View style = {styles.item} >
              
              
              
              {
              taskItems.map((item , index) => {
                 return (
                   <TouchableOpacity key = {index} onPress = {() => completeTask(index)} >

                 <Task  text = {item} />
                   </TouchableOpacity>
                 ) 
                 

              })
              }  
              {/*<Task text = {"Task 1"}/>
              <Task text = {"Task 2"}/>*/}
              
              </View>
              
        </View>

        <KeyboardAvoidingView 
        behavior = {Platform.OS === "ios" ?  "padding" : "height"}
        style = {styles.writeTask}
        > 
        <TextInput style = {styles.input} placeholder = {' Write a task'} value ={task} onChangeText = {text => setTask(text)}  />
        <TouchableOpacity onPress =  {() => handleAddTask()} >
          <View style = {styles.addWrapper} >
          
          
          <Text style = {styles.addText} >+</Text>
            
          </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",

  },
  taskWrap: {
    paddingTop: 80,
    paddingHorizontal: 20,
    
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",

  },
  item: {
    marginTop: 30,
     
  },
  writeTask: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#c0c0c0",
    borderWidth: 1,
    width: 250,
    borderRadius: 60,
    backgroundColor: "#fff",

  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
     backgroundColor: "#c0c0c0",
    borderWidth: 5,

  },
  addText: {

  },
  
});
