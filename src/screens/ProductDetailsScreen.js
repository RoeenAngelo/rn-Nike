import { StyleSheet, Text, View, Image, FlatList, useWindowDimensions, ScrollView, Pressable} from 'react-native'
import products from '../data/products';

const ProductDetailsScreen = () => {
  
  const product = products[0]
  const { width } = useWindowDimensions()
  const { title, price, description, infoContainer, button, buttonText } = styles

  function addToCart() {
    alert('added to cart!')
  }
  return (
    <View>
      <ScrollView>
        {/* Image Carousel */}
        <FlatList 
          data={product.images}
          renderItem={({ item }) => 
            <Image style={{ width, aspectRatio: 1}} source={{ uri: item }}/>
          }
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={infoContainer}>
          <Text style={title}>{product.name}</Text>
          <Text style={price}>${product.price}</Text>
          <Text style={description}>{product.description}</Text>
        </View>
      </ScrollView>
      
      {/* Add to cart button */}
      <Pressable onPress={addToCart} style={button}>
        <Text style={buttonText}>Add to cart</Text>
      </Pressable>

    </View>
  )  
}

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },

  price: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
  },

  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300',
  },

  infoContainer: {
    padding: 15
  },

  button: {
    position: 'absolute',
    backgroundColor: 'rgba(10, 10, 10, 1)',
    bottom: 30,
    alignSelf: 'center',
    width: '90%',
    padding: 20,
    alignItems: 'center',
    borderRadius: 100

  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },

});

export default ProductDetailsScreen
