import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import CartListItem from '../components/CartListItem';
import cart from '../data/cart';


const ShoppingCartTotals = () => {

  // Styles
  const { totalsContainer, row, text, textBold } = styles


  return (
    <View style={totalsContainer}>
      <View style={row}>
        <Text style={text}>Subtotal</Text>
        <Text style={text}>1526 US$</Text>
      </View>
      <View style={row}>
        <Text style={text}>Delivery</Text>
        <Text style={text}>15 US$</Text>
      </View>
      <View style={row}>
        <Text style={textBold}>Total</Text>
        <Text style={textBold}>2636 US$</Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {

  // Styles
  const {  button, buttonText } = styles
  
  async function onCheckout() {
    alert('Checkout')
  }
  return (
    <>
      <FlatList 
        data={cart}
        renderItem={({ item }) =>
          <CartListItem 
            cartItem={item}
          />
        }
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable onPress={onCheckout} style={button}>
        <Text style={buttonText}>Checkout</Text>
      </Pressable>
    </>


    
  );
}

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  textBold: {
    fontSize: 16,
    fontWeight: '500',
  },

  button: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default ShoppingCart
