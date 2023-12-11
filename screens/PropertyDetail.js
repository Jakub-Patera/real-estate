import React, { useEffect } from 'react';
import { View, Text,Image, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PropertyIcons, PropertyLists } from './PropertyList';
import Emoji from 'react-native-emoji';



const PropertyDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);


  const findProperty = (propertyList, key, value) => {
    return propertyList.find((property) => property[key] === value);
  };
  

const propertyId = route.params.propertyId;
const propertyName = route.params.propertyName;
const propertyAddress = route.params.address;
const propertyDetail = route.params.detail;
const propertyImage = route.params.image;
const propertyBeds = route.params.bed;
const propertyBathroom = route.params.bathroom;
const propertyArea = route.params.area;
const propertyPrice = route.params.price;
const propertyGallery = route.params.gallery;

const property = findProperty(PropertyLists, 'id', propertyId);
const name = findProperty(PropertyLists, 'propertyName', propertyName);
const address = findProperty(PropertyLists, 'address', propertyAddress);
const detail = findProperty(PropertyLists, 'detail', propertyDetail);
const image = findProperty(PropertyLists, 'image', propertyImage);
const bed = findProperty(PropertyLists, 'bed', propertyBeds);
const bathroom = findProperty(PropertyLists, 'bathroom', propertyBathroom);
const area = findProperty(PropertyLists, 'area', propertyArea);
const price = findProperty(PropertyLists, 'price', propertyPrice);
const gallery = findProperty(PropertyLists, 'gallery', propertyGallery)



// gallery
const PropertyListItem = ({ title, gallery }) => (
  <View className='flex flex-row justify-evenly items-center px-2 ml-3 rounded-xl border-2 border-gray-300'>
    <FlatList
      data={gallery}
      
      renderItem={({ gallery }) => (
        <Image
          source={gallery}
          className='h-48 w-full justify-center flex drop-shadow-lg'
          contentFit='cover'
          height={150}
          width={230}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 60 }}
    />
    <Text className='p-3'>{title}</Text>
  </View>
);


  // Zde můžete zobrazit detaily nemovitosti
  return (
    <SafeAreaView>

<View>
 <View>

 

  <Image source={propertyImage}
         className='h-48 w-full justify-center flex drop-shadow-lg'
         contentFit="cover" 
         height={30}
         width={30}/>
 </View>
          <Text>Property Name: {propertyName}</Text>
          <Text>Address: {propertyAddress}</Text>
          <Text>Detail:{propertyDetail}</Text>
          <Text>Beds: {propertyBeds}</Text>
          <Text>Bathrooms: {propertyBathroom}</Text>
          <Text>Price: {propertyPrice}</Text>

          {/* Zde můžete zobrazit další detaily nemovitosti */}
        </View>
  {/* // gallerie */}
        <View>
<View>
<View>

<View>
  <PropertyListItem title={propertyName} gallery={gallery} />
</View>
  </View>
     
  </View>          


        </View>
    
      
    </SafeAreaView>
  );
};


export default PropertyDetail;
