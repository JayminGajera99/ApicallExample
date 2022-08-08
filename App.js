{
  /*All method are like Fetch Networking */
}

// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   TouchableOpacity,
// } from 'react-native';
// import React from 'react';

// const App = () => {
//   //GET Request using Fetch method Example//
//   const getDataUsingGet = () => {
//     //get request

//     fetch('https://jsonplaceholder.typicode.com/posts/1', {
//       method: 'GET', //Request Type
//     })
//       .then(response => response.json())

//       //If response is in json then in success
//       .then(responseJson => {
//         //Success
//         alert(JSON.stringify(responseJson));
//         console.log(responseJson);
//       })

//       //If response is in json then in error
//       .catch(error => {
//         //Error
//         alert(JSON.stringify(error));
//         console.log(error);
//       });
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <View style={styles.container}>
//           {/*Running GET Request */}
//           <TouchableOpacity
//             style={styles.buttonStyle}
//             onPress={getDataUsingGet}>
//             <Text style={styles.textStyle}> Get Data Using GET </Text>
//           </TouchableOpacity>
//         </View>
//         <Text
//           style={{
//             fontSize: 18,
//             textAlign: 'center',
//             color: 'grey',
//           }}>
//           React Native Fetch
//         </Text>
//         <Text
//           style={{
//             fontSize: 16,
//             textAlign: 'center',
//             color: 'grey',
//           }}>
//           www.aboutreact.com
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   buttonStyle: {
//     alignItems: 'center',
//     backgroundColor: '#f4511e',
//     padding: 10,
//     marginVertical: 10,
//   },
//   textStyle: {
//     fontSize: 18,
//     color: 'white',
//   },
// });

// export default App;

//POST Request using Fetch method Example//
// import React from 'react';
// import {View} from 'react-native';
// import PostRequestExample from './components/PostRequestExample';

// const App = () => {
//   return (
//     <View>
//       <PostRequestExample />
//     </View>
//   );
// };

// export default App;

{
  /* All method are like Axios Networking */
}

import React from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const App = () => {
  //GET Request using Axios method example//
  const callGetUsersList = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        //handle success//
        console.log('Response:', response?.data);
      })
      .catch(error => {
        //handle error//
        console.log('Error:', error);
      });
  };

  //POST Request using Axios method example//
  const callAddUser = () => {
    let params = {
      userId: 1,
      userId: 2,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    };
    axios
      .post('https://jsonplaceholder.typicode.com/posts', params)
      .then(response => {
        //handle success//
        console.log('Response:', response?.data);
      })
      .catch(error => {
        //handle error//
        console.log('Error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonStyle} onPress={callGetUsersList}>
        <Text>Get data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress={callAddUser}>
        <Text>Create data</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#d44a6a',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});

export default App;
