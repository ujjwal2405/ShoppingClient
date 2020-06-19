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

// import {Picker} from '@react-native-community/picker';
import RNPickerSelect from 'react-native-picker-select';
class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: 'Electronics',
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginLeft: 30}}>
            <Text style={styles.Text}>Select Category</Text>
          </View>
          <View style={styles.PickerView}>
            <RNPickerSelect
              onValueChange={value => console.log(value)}
              useNativeAndroidPickerStyle
              items={[
                {label: 'Electronics', value: 'electronics'},
                {label: 'Furniture', value: 'furniture'},
                {label: 'Clothing', value: 'clothing'},
              ]}
            />
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{marginTop:20, marginLeft: 30}}>
            <Text style={styles.Text}>Super Category</Text>
          </View>
          <View style={styles.secondaryPickerView}>
          <RNPickerSelect
              onValueChange={value => console.log(value)}
              items={[
                {label: 'Football', value: 'football'},
                {label: 'Baseball', value: 'baseball'},
                {label: 'Hockey', value: 'hockey'},
              ]}
            />
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{marginTop:20, marginLeft: 30}}>
            <Text style={styles.Text}>Super Category</Text>
          </View>
          <View style={styles.secondaryPickerView}>
          <RNPickerSelect
              onValueChange={value => console.log(value)}
              items={[
                {label: 'Football', value: 'football'},
                {label: 'Baseball', value: 'baseball'},
                {label: 'Hockey', value: 'hockey'},
              ]}
            />
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{marginTop:20, marginLeft: 30}}>
            <Text style={{fontSize: 20, marginTop: 30}}>Super Category</Text>
          </View>
          <View style={styles.secondaryPickerView}>
          <RNPickerSelect
              onValueChange={value => console.log(value)}
              items={[
                {label: 'Football', value: 'football'},
                {label: 'Baseball', value: 'baseball'},
                {label: 'Hockey', value: 'hockey'},
              ]}
            />
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
const styles=StyleSheet.create({
  container:{flex:1,marginTop:50},
  Text:{fontSize: 20, marginTop: 30},
  PickerView:{marginLeft: 40, marginTop: 35},
  secondaryPickerView:{marginLeft: 40, marginTop: 55}
})
export default Category;
