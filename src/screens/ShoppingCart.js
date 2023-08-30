import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import CartListItem from '../components/CartListItem';
import { useDispatch, useSelector } from 'react-redux';
import { cartSlice, selectSubtotal, selectDeliveryFee, selectTotal } from '../store/cartSlice';


const ShoppingCartTotals = () => {
  // Styles
  const { totalsContainer, row, text, textBold } = styles
  
  const subtotal = useSelector(selectSubtotal)
  const deliveryFee = useSelector(selectDeliveryFee)
  const total = useSelector(selectTotal)


  return (
    <View style={totalsContainer}>
      <View style={row}>
        <Text style={text}>Subtotal</Text>
        <Text style={text}>{ subtotal }</Text>
      </View>
      <View style={row}>
        <Text style={text}>Delivery</Text>
        <Text style={text}>${ deliveryFee }</Text>
      </View>
      <View style={row}>
        <Text style={textBold}>Total</Text>
        <Text style={textBold}>${ total }</Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  // Styles
  const {  button, buttonText } = styles

  const dispatch = useDispatch();

  // Use Data from the cart state
  const cartItems = useSelector((state) => state.cart.items);
  
  function onCheckout() {
    alert('Checkout')
  }

  return (
    <>
      <FlatList 
        data={cartItems}
        renderItem={({ item }) =>
          <CartListItem 
            cartItem={item} //Use cartItem as a prop
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
