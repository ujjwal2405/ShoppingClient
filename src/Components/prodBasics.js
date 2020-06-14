import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import data from '../Assets/data.json';
class prodBasics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'java',
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{marginLeft: 40, marginTop: 50, alignItems: 'center'}}>
          <Text style={{color: 'red', fontSize: 35, fontWeight: '500'}}>
            Product Basics
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 40, marginTop: 20}}>
          <View style={{marginTop: 20}}>
            <Text style={{fontWeight: 'bold'}}>Product {'\n'}Name </Text>
          </View>

          <View
            style={{
              marginLeft: 20,
              marginTop: 15,
              borderColor: 'grey',
              borderWidth: 1,
              width: '50%',
            }}>
            <TextInput
              style={{paddingHorizontal: 25}}
              autoCapitalize="none"
              //   onChangeText={txt => this.setState({username: txt})}
            />
          </View>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 40, marginTop: 20}}>
          <View style={{marginTop: 20}}>
            <Text style={{fontWeight: 'bold'}}>Product {'\n'}Description </Text>
          </View>

          <View
            style={{
              marginLeft: 5,
              marginTop: 15,
              borderColor: 'grey',
              borderWidth: 1,
              width: '50%',
            }}>
            <TextInput
              multiline
              style={{padding: 25}}
              autoCapitalize="none"
              //   onChangeText={txt => this.setState({username: txt})}
            />
          </View>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 40, marginTop: 20}}>
          <View style={{marginTop: 20}}>
            <Text style={{fontWeight: 'bold'}}>MRP </Text>
          </View>

          <View
            style={{
              marginLeft: 50,
              marginTop: 15,
              borderColor: 'grey',
              borderWidth: 1,
              width: '50%',
            }}>
            <TextInput
              style={{paddingHorizontal: 25}}
              autoCapitalize="none"
              //   onChangeText={txt => this.setState({username: txt})}
            />
          </View>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 40, marginTop: 20}}>
          <View style={{marginTop: 20}}>
            <Text style={{fontWeight: 'bold'}}>Sales Price </Text>
          </View>

          <View
            style={{
              marginLeft: 5,
              marginTop: 15,
              borderColor: 'grey',
              borderWidth: 1,
              width: '50%',
            }}>
            <TextInput
              style={{paddingHorizontal: 25}}
              autoCapitalize="none"
              //   onChangeText={txt => this.setState({username: txt})}
            />
          </View>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 40, marginTop: 20}}>
          <View style={{marginTop: 20}}>
            <Text style={{fontWeight: 'bold'}}>Discount </Text>
          </View>

          <View
            style={{
              marginLeft: 20,
              marginTop: 15,
              borderColor: 'grey',
              borderWidth: 1,
              width: '50%',
            }}>
            <TextInput
              style={{paddingHorizontal: 25}}
              autoCapitalize="none"
              //   onChangeText={txt => this.setState({username: txt})}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Product Image');
          }}>
          <View
            style={{
              backgroundColor: 'black',
              alignItems: 'center',
              marginHorizontal: 60,
              paddingVertical: 15,
              marginTop: 25,
              borderRadius: 100 / 2,
            }}>
            <Text style={{color: 'white'}}>Next Page</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
export default prodBasics;

{
  /* <Picker
selectedValue={this.state.language}
style={{height: 50, width: 100}}
onValueChange={(itemValue, itemIndex) =>
  this.setState({language: itemValue})
}>
<Picker.Item label="Ujjwal" value="java" />
<Picker.Item label="Gupta" value="js" />
</Picker> */
}
