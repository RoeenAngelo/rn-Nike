import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';
import ProductsScreen from './src/screens/ProductsScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import ShoppingCart from './src/screens/ShoppingCart';

export default function App() {

  return (
    <View style={styles.container}>
        {/* <ProductDetailsScreen /> */}
      <ShoppingCart />

        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },

});