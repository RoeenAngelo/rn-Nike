import { StyleSheet, Text, View, Image, FlatList} from 'react-native'
import products from '../data/products';

const ProductsScreen = () => {

  return (
    <FlatList 
      data={products}
      renderItem={({ item }) =>
        <View style={styles.itemContainer}>
          <Image style={styles.image} source={{ uri: item.image }} />
        </View>
      }
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  itemContainer: {
    width: '50%',
    padding: 1
  }
});

export default ProductsScreen
