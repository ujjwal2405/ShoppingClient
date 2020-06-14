import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {Picker} from '@react-native-community/picker';
class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: 'Electronics',
    };
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{flexDirection:"row"}}>
          
          <View style={{marginTop:90,marginLeft:30}}>
          <Text style={{fontSize:15,marginTop:30}}>Select Category</Text>
          </View>
          <View style={{marginLeft:40}}>
          <Picker
            selectedValue={this.state.product}
            style={{height:50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({product: itemValue})
            }>
            <Picker.Item label="Electronics" value="Electronics" />
            <Picker.Item label="Gupta" value="js" />
          </Picker>
          </View>
        </View>


        <View style={{flexDirection:"row"}}>
          
          <View style={{marginTop:90,marginLeft:30}}>
          <Text style={{fontSize:15,marginTop:30}}>Super Category</Text>
          </View>
          <View style={{marginLeft:40}}>
          <Picker
            selectedValue={this.state.product}
            style={{height:50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({product: itemValue})
            }>
            <Picker.Item label="Electronics" value="Electronics" />
            <Picker.Item label="Gupta" value="js" />
          </Picker>
          </View>
        </View>

        <View style={{flexDirection:"row"}}>
          
          <View style={{marginTop:90,marginLeft:30}}>
          <Text style={{fontSize:15,marginTop:30}}>Sub Category</Text>
          </View>
          <View style={{marginLeft:60}}>
          <Picker
            selectedValue={this.state.product}
            style={{height:50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({product: itemValue})
            }>
            <Picker.Item label="Electronics" value="Electronics" />
            <Picker.Item label="Gupta" value="js" />
          </Picker>
          </View>
        </View>

        <View style={{flexDirection:"row"}}>
          
          <View style={{marginTop:90,marginLeft:30}}>
          <Text style={{fontSize:15,marginTop:30}}> Category</Text>
          </View>
          <View style={{marginLeft:90}}>
          <Picker
            selectedValue={this.state.product}
            style={{height:50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({product: itemValue})
            }>
            <Picker.Item label="Electronics" value="Electronics" />
            <Picker.Item label="Gupta" value="js" />
          </Picker>
          </View>
        </View>


        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Feature');
          }}>
          <View
            style={{
              backgroundColor: 'black',
              alignItems: 'center',
              marginHorizontal: 60,
              paddingVertical: 15,
              marginTop: 45,
              borderRadius: 100 / 2,
            }}>
            <Text style={{color: 'white'}}>Next Page</Text>
          </View>
        </TouchableOpacity>




      </SafeAreaView>
    );
  }
}
export default Category;
