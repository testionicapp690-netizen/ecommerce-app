import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function CartScreen() {
  const items = useSelector((state: RootState) => state.cart.items);
  return (
    <View style={{ padding: 20 }}>
      <Text>Cart items: {items.length}</Text>
    </View>
  );
}
