import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, FlatList, Pressable} from 'react-native'
import products from '../data/products';

const ProductsScreen = ({ navigation }) => {
  // We can use useNavigation hook or pass it as a prop 
  // const navigation = useNavigation()
  return (
    <FlatList 
      data={products}
      renderItem={({ item }) =>
        <Pressable onPress={() => navigation.navigate('Product Details')} style={styles.itemContainer}>
          <Image style={styles.image} source={{ uri: item.image }} />
        </Pressable>
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
