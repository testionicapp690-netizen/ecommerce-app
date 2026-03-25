import React from 'react';
import { Text, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store';

export default function ProductScreen({ route, navigation }: any) {
  const dispatch = useDispatch();
  const { id } = route.params;
  return (
    <View style={{ padding: 20 }}>
      <Text>Product details for {id}</Text>
      <Button
        title="Add to cart"
        onPress={() => {
          dispatch(addToCart({ id }));
          navigation.navigate('Cart');
        }}
      />
    </View>
  );
}
