{
  /*POST Request using Fetch method Example*/
}

// import React, {useState, useEffect} from 'react';
// import {View, StyleSheet, Alert, Button} from 'react-native';

// const PostRequestExample = () => {
//   const requestOptions = {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({postName: 'React updates '}),
//   };

//   const postExample = async () => {
//     try {
//       await fetch('https://reqres.in/api/posts', requestOptions).then(
//         response => {
//           response.json().then(data => {
//             Alert.alert('Post created at : ', data.createdAt);
//           });
//         },
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.btn}>
//       <Button title="contained" onPress={postExample}>
//         Click to make a Post request
//       </Button>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   btn: {
//     marginTop: 60,
//     marginLeft: 30,
//     marginRight: 30,
//   },
// });

// export default PostRequestExample;
