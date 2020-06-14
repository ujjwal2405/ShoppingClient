import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
class camera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
    };
  }
  chooseFile = () => {
    var options = {
      title: 'Select Image',
      //   customButtons: [
      //     { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      //   ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>

        <View style={{flexDirection: 'row'}}>
          <View style={{marginTop: 15}}>
            <Text style={{fontSize: 15}}>Select Image</Text>
          </View>

          <View style={{marginLeft: 20}}>
            <TouchableOpacity
              onPress={() => {
                this.chooseFile();
              }}>
              <View
                style={{backgroundColor: 'red', padding: 15, borderRadius: 25}}>
                <Text>Choose File</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

       
       <View style={{flexDirection:"row"}}>
       <View style={{marginTop: 15,marginLeft:40}}>
            <Text style={{fontSize: 15}}>Image Preview</Text>
          </View>

          <View style={{marginLeft:10 ,marginTop:10}}>
          <Image
          source={{
            uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
          }}
          style={{width: 100, height: 100}}
        />
          </View>


          <View style={{marginLeft:10 ,marginTop:10}}>
          <Image
          source={{
            uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
          }}
          style={{width: 50, height: 50}}
        />
          </View>

       </View>
    
        {/* <Text style={{alignItems: 'center'}}>{this.state.filePath.uri}</Text> */}


        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Category');
          }}>
          <View
            style={{
              backgroundColor: 'black',
              alignItems: 'center', 
             padding:20,    
              marginTop: 25,
              borderRadius: 20,
            }}>
            <Text style={{color: 'white'}}>Next Page</Text>
          </View>
        </TouchableOpacity>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default camera;
