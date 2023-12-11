import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  FlatList
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import {
  HeroImage,
  EmptyAvatar,
  GoogleLogo,
  AppleLogo,
  FacebookLogo,
  ShowPasswordIcon,
  HidePassword,
  Property1
} from "../assets";
import { TailwindProvider } from "tailwindcss-react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Emoji from "react-native-emoji";
import {
  NativeBaseProvider,
  Box,
  Input,
  Center,
  Icon,
  ScrollView,
  StyleSheet
} from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMugSaucer,
  faShower,
  faBed,
  faSquarePlus
} from "@fortawesome/free-solid-svg-icons";
import { PropertyIcons, PropertyLists } from "./PropertyList";

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);

  const [showDetail, setShowDetail] = useState(false);

  const PropertyIconItem = ({ title, emoji }) => (
    <View className=" flex flex-row justify-evenly items-center px-2 ml-3 rounded-xl border-2 border-gray-300   ">
      <Emoji name={emoji} style={{ fontSize: 30 }} />
      <Text className="p-3 ">{title}</Text>
    </View>
  );

  const navigateToPropertyDetail = (
    propertyId,
    propertyName,
    address,
    detail,
    image,
    bed,
    bathroom,
    area,
    price,
    gallery
  ) => {
    navigation.navigate("PropertyDetail", {
      propertyId,
      propertyName,
      address,
      detail,
      image,
      bed,
      bathroom,
      area,
      price,
      gallery
    });
  };

  const propertyId = route.params;

  // Funkce pro nalezení nemovitosti podle propertyId v PropertyLists
  const findPropertyById = (propertyId) => {
    return PropertyLists.find((property) => property.id === propertyId);
  };

  const property = findPropertyById(propertyId);

  const PropertyListItem = ({
    propertyName,
    address,
    price,
    image,
    bed,
    bathroom,
    area,
    id,
    detail,
    gallery
  }) => (
    <TailwindProvider>
      <TouchableOpacity
        onPress={() =>
          navigateToPropertyDetail(
            id,
            propertyName,
            address,
            detail,
            image,
            bed,
            bathroom,
            area,
            price,
            gallery
          )
        }
        className=" pb-8 mx-3 my-4 rounded-xl border-2 border-gray-300 overflow-hidden ">
        <View className=" w-max h-max  flex justify-center items-center ">
          <Image
            className="h-48 w-full justify-center flex drop-shadow-lg"
            contentFit="cover"
            source={image}
            height={30}
            width={30}
          />
        </View>
        <View className="h-32 flex justify-start mx-7">
          <Text className=" font-sans font-bold text-[32px]">{price}</Text>
          <Text className=" font-semibold text-[24px] pb-4 ">
            {propertyName}
          </Text>
          <Text className=" ">{address}</Text>

          <View className="flex-row justify-between items-center mx-3 top-8">
            <FontAwesomeIcon icon={faBed} />
            <Text className=" ">{bed} Beds</Text>
            <FontAwesomeIcon icon={faShower} />
            <Text className="  "> {bathroom} Bathrooms</Text>
            <FontAwesomeIcon icon={faSquarePlus} />
            <Text className="  ">{area} </Text>
          </View>
        </View>
      </TouchableOpacity>
    </TailwindProvider>
  );

  return (
    <TailwindProvider>
      <SafeAreaView className="flex ">
        <View className="items-center justify-between px-8 flex-row relative">
          <Image source={EmptyAvatar} className="w-8 h-8 rounded-full" />

          <View className=" justify-center items-center">
            <View className="flex-row justify-center items-center">
              <Text>Current Location</Text>
              <Ionicons name="chevron-down-outline" size={24} color="grey" />
            </View>
            <Text className=" font-semibold">London, UK</Text>
          </View>
          <View className="border-2 rounded-full border-slate-500 h-9 w-9 justify-center items-center">
            <Ionicons
              name="notifications-outline"
              size={28}
              color="grey"
              borderRadius="3"
            />
          </View>
        </View>
        <NativeBaseProvider className="flex justify-center items-center bg-green-500">
          <Center className="py-12">
            <Input
              placeholder="Search People & Places"
              InputLeftElement={
                <Ionicons name="search-outline" size={24} color="black" />
              }
              InputRightElement={
                <Ionicons name="options-outline" size={24} color="black" />
              }
              variant="filled"
              width="80%"
              py="3"
              px="2"
              //  className='flex justify-center items-center'
            ></Input>
          </Center>
        </NativeBaseProvider>

        <FlatList
          className="flex-1 mt-24 mx-5 pr-20 h-16 mb-4"
          data={PropertyIcons}
          renderItem={({ item, emoji }) => (
            <PropertyIconItem title={item.title} emoji={item.emoji} />
          )}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 60 }}
        />

        <FlatList
          className=" "
          data={PropertyLists}
          renderItem={({ item }) => (
            <PropertyListItem
              propertyName={item.propertyName}
              address={item.address}
              price={item.price}
              image={item.image}
              bed={item.bed}
              bathroom={item.bathroom}
              area={item.area}
              detail={item.detail}
              gallery={item.gallery}
            />
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 260 }}
        />
      </SafeAreaView>
    </TailwindProvider>
  );
};

export default HomeScreen;
