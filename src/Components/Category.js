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
      selectCategory:'',
      superCategory:'',
      subCategory:'',
      Category:''
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
              onValueChange={value => {
                this.setState({
                  selectCategory:value
                })
              }}
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
          <View style={styles.TextView}>
            <Text style={styles.Text}>Super Category</Text>
          </View>
          <View style={styles.secondaryPickerView}>
          <RNPickerSelect
             onValueChange={value => {
              this.setState({
                superCategory:value
              })
            }}
              items={[
                {label: 'Football', value: 'football'},
                {label: 'Baseball', value: 'baseball'},
                {label: 'Hockey', value: 'hockey'},
              ]}
            />
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.TextView}>
            <Text style={styles.Text}>Sub Category</Text>
          </View>
          <View style={{marginTop:55,marginLeft:55}}>
          <RNPickerSelect
              onValueChange={value => {
                this.setState({
                  subCategory:value
                })
              }}
              items={[
                {label: 'Football', value: 'football'},
                {label: 'Baseball', value: 'baseball'},
                {label: 'Hockey', value: 'hockey'},
              ]}
            />
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.TextView}>
            <Text style={styles.Text}>Category</Text>
          </View>
          <View style={{marginTop:55,marginLeft:95 }}>
          <RNPickerSelect
              onValueChange={value => {
                this.setState({
                  Category:value
                })
              }}
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
  container:{flex:1,backgroundColor:"white"},
  Text:{fontSize: 20, marginTop: 30},
  PickerView:{marginLeft: 40, marginTop: 35},
  secondaryPickerView:{marginLeft: 40, marginTop: 55},
  TextView:{marginTop:20, marginLeft: 30}
})
export default Category;
