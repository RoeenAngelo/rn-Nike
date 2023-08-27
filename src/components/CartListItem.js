import { View, Text, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
// import { useDispatch } from 'react-redux';
// import { cartSlice } from '../store/cartSlice';

const CartListItem = ({ cartItem }) => {
  
  // Styles
  const { container, contentContainer, name, size, itemTotal, quantity, footer, image } = styles
  

  function increaseQuantity() {

  };

  function decreaseQuantity() {

  };

  return (
    <View style={container}>
      <Image source={{ uri: cartItem.product.image }} style={image} />

      <View style={contentContainer}>
        <Text style={name}>{cartItem.product.name}</Text>
        <Text style={size}>Size {cartItem.size}</Text>

        <View style={footer}>
          <Feather
          onPress={decreaseQuantity}
            name="minus-circle"
            size={24}
            color="gray"
          />
          <Text style={quantity}>{cartItem.quantity}</Text>
          <Feather
            onPress={increaseQuantity}
            name="plus-circle"
            size={24}
            color="gray"
          />
          <Text style={itemTotal}>
            $ {cartItem.product.price * cartItem.quantity}
          </Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: '40%',
    aspectRatio: 1,
  },
  name: {
    fontWeight: '500',
    fontSize: 18,
  },
  size: {
    fontSize: 16,
    color: 'gray',
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: 'gray',
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: 'auto',
    fontWeight: '500',
  },
});

export default CartListItem;
