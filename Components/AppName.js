import { View, Text } from 'react-native';

// PROPS & 
/* INLINE STYLING */

const AppName = (props) => {
  return (
    <View style={{
      backgroundColor: "cyan",
      borderRadius: 15, 
      padding: 7
    }}>
        <Text  style = 
        {{
          color: "#FDD017", 
          backgroundColor:"cyan",
          fontSize: 30, 
          marginBottom: 5, 
          fontWeight: "bold" 
        }}> 

           {props.title}  

        </Text>
    </View>
  );
};

export default AppName;
