import React, { useState } from 'react';
import {View,Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import AddToDo from './src/components/AddToDo/AddToDo';

const App = () => {

    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);

     const renderListItem = ({item}) =>
     <TouchableOpacity onPress={() => handleDelete(item.id)}>
     <View style={styles.list}> 
     <Text style={[styles.flatlist, item.deleted && { textDecorationLine: 'line-through' }]}>
      {item.text}
      </Text>
      </View>
      </TouchableOpacity>;

    const handleSave = (text) => {
      if(text) {
        setItems((prevItems) => [...prevItems, {id: Date.now(), text}]);
        setCount((prevCount) => prevCount +1);
      }
    };

    const handleDelete = (itemId) => {
      const updatedItems = items.map((item) => {
        if(item.id === itemId) {
          return {...item, deleted: true};
        }
        return item;
      });
      setItems(updatedItems);
      setCount((prevCount) => prevCount -1);
    }

    const renderHeader = () => {
      return(
      <View style={styles.header}>
        <Text style={styles.title} >Yapılacaklar</Text>
        <Text style={styles.counter}>{count}</Text>
      </View>
      )
    }

  return(
  <View style={styles.container} >
    <FlatList
        ListHeaderComponent={renderHeader} 
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderListItem}
        contentContainerStyle={{ marginBottom: 550, marginLeft:10, marginRight:10 }}
      />   
    <View style={styles.bottomContent} >
      <AddToDo  onSave={handleSave} />
    </View>
   
  </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  list:{
    backgroundColor:'#686F12',
    borderWidth:1,
    flexDirection:'row',
    padding:5,
    borderRadius:5,
    borderColor:'#686F12',
    marginVertical:10,
    
  },
  flatlist:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',  
    marginRight:200,
    
  },
  container:{
    flex:1, 
    backgroundColor: 'darkslategrey'
  },
  title:{
    color:'#E39505',
    fontSize:40,
    fontWeight:'bold',
  },
  counter:{
    color:'#E39505',
    fontSize:40,
    fontWeight:'bold',
    marginLeft:120
  },
  list_container:{
    flex: 1, 
    flexDirection:'row',
  },
  bottomContent: {
    padding:10,
    backgroundColor:'#37474F',
    alignItems: 'center',
    margin:10,
  },

})

export default App;

