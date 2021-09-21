import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import database from "../../config/firebaseconfig";
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";

export default function Task({ navigation }) {
    const [task, setTask] = useState([]);
 
    function deleteTask(id) {
      database.collection("Tasks").doc(id).delete();
    }
   
    useEffect(() => {
      database.collection("Tasks").onSnapshot((query) => {
        const list = [];
        query.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        setTask(list);
      });
    }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={(data) => {
          return (
            <View style={styles.Tasks}>
              <TouchableOpacity
                style={styles.deleteTask}
                onPress={() => {
                  deleteTask(data.item.id);
                }}
              >
                <FontAwesome
                  name="star"
                  size={23}
                  color="#F92e6A"
                ></FontAwesome>
              </TouchableOpacity>
              <Text
                style={styles.DescriptionTask}
                onPress={() =>
                  navigation.navigate("Details", {
                    id: data.item.id,
                    description: data.item.description,
                  })
                }
              >
                {data.item.description}
              </Text>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("New Task")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
