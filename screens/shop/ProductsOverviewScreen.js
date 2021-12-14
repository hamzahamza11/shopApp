import React from 'react';
import { FlatList, Text,Button } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import Colors from '../../constants/Colors';
import { CommonActions } from '@react-navigation/native';

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData =>  <ProductItem
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        price={itemData.item.price}
        onSelect={() => {
          // selectItemHandler(itemData.item.id, itemData.item.title);

        }}
      >
         <Button
            color={Colors.primary}
            title="View Details"
            onPress={()=>{
              props.navigation.dispatch(
                CommonActions.navigate({
                  name: 'ProductDetails',
                  params: {
                    ProductId:itemData.item.id,
                  },
                })
              )
            }}
           
          />
          <Button
            color={Colors.primary}
            title="To Cart"
            
          />
      </ProductItem>}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products'
};

export default ProductsOverviewScreen;
