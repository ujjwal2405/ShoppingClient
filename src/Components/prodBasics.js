import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
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
    console.log(data.name);
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.prodBasicsTextView}>
          <Text style={styles.prodBasicsText}>Product Basics</Text>
        </View>
        <View style={styles.productNameParent}>
          <View style={styles.marginTop}>
            <Text style={{fontWeight: 'bold'}}>Product {'\n'}Name </Text>
          </View>

          <View style={styles.textInputView}>
            <TextInput
              style={{paddingHorizontal: 25}}
              autoCapitalize="none"
              //   onChangeText={txt => this.setState({username: txt})}
            />
          </View>
        </View>

        <View style={styles.prodDescriptionView}>
          <View style={styles.marginTop}>
            <Text style={{fontWeight: 'bold'}}>Product {'\n'}Description </Text>
          </View>

          <View style={styles.mrpParentView}>
            <TextInput
              multiline
              style={{padding: 25}}
              autoCapitalize="none"
              //   onChangeText={txt => this.setState({username: txt})}
            />
          </View>
        </View>

        <View style={styles.mrpTextView}>
          <View style={styles.marginTop}>
            <Text style={{fontWeight: 'bold'}}>MRP </Text>
          </View>

          <View style={styles.salesPriceParent}>
            <TextInput
              style={{padding: 10}}
              autoCapitalize="none"
              //   onChangeText={txt => this.setState({username: txt})}
            />
          </View>
        </View>

        <View style={styles.parentTextView}>
          <View style={{marginTop: 20}}>
            <Text style={{fontWeight: 'bold'}}>Sales Price </Text>
          </View>

          <View style={styles.discountParent}>
            <TextInput
              style={{padding: 10}}
              autoCapitalize="none"
              //   onChangeText={txt => this.setState({username: txt})}
            />
          </View>
        </View>

        <View style={styles.discountTextView}>
          <View style={styles.marginTop}>
            <Text style={{fontWeight: 'bold'}}>Discount </Text>
          </View>

          <View style={styles.discountTextInputView}>
            <TextInput
              style={{padding: 10}}
              autoCapitalize="none"
              //   onChangeText={txt => this.setState({username: txt})}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Product Image');
          }}>
          <View style={styles.buttonView}>
            <Text style={{color: 'white'}}>Next Page</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  prodBasicsTextView: {
    marginLeft: 40,
    marginTop: 50,
    alignItems: 'center',
  },
  prodBasicsText: {
    color: 'red',
    fontSize: 35,
    fontWeight: '500',
  },
  productNameParent: {
    flexDirection: 'row',
    marginLeft: 40,
    marginTop: 20,
  },
  marginTop: {
    marginTop: 20,
  },
  textInputView: {
    marginLeft: 20,
    marginTop: 15,
    borderColor: 'grey',
    borderWidth: 1,
    width: '50%',
    marginLeft: 32,
  },
  prodDescriptionView: {
    flexDirection: 'row',
    marginLeft: 40,
    marginTop: 20,
  },
  mrpParentView: {
    marginLeft: 5,
    marginTop: 15,
    borderColor: 'grey',
    borderWidth: 1,
    width: '50%',
    marginLeft: 8,
  },
  mrpTextView: {
    flexDirection: 'row',
    marginLeft: 40,
    marginTop: 20,
  },
  salesPriceParent: {
    marginLeft: 50,
    marginTop: 15,
    borderColor: 'grey',
    borderWidth: 1,
    width: '50%',
    marginLeft: 58,
  },
  parentTextView: {
    flexDirection: 'row',
    marginLeft: 40,
    marginTop: 20,
  },
  discountParent: {
    marginLeft: 5,
    marginTop: 15,
    borderColor: 'grey',
    borderWidth: 1,
    width: '50%',
    marginLeft: 15,
  },
  discountTextView: {
    flexDirection: 'row',
    marginLeft: 40,
    marginTop: 20,
  },
  discountTextInputView: {
    marginLeft: 20,
    marginTop: 15,
    borderColor: 'grey',
    borderWidth: 1,
    width: '50%',
    marginLeft: 30,
  },
  buttonView: {
    backgroundColor: 'black',
    alignItems: 'center',
    marginHorizontal: 60,
    paddingVertical: 15,
    marginTop: 25,
    borderRadius: 100 / 2,
  },
});

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
