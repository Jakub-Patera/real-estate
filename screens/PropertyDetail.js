import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Linking
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PropertyIcons, PropertyLists } from "./PropertyList";
import Emoji from "react-native-emoji";
import { TailwindProvider } from "tailwindcss-react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMugSaucer,
  faShower,
  faBed,
  faSquarePlus
} from "@fortawesome/free-solid-svg-icons";
import phonecall from "react-native-phone-call";

const handleCall = () => {
  const args = {
    number: phoneNumber, // Telefonní číslo, na které se má volat
    prompt: true // Zobrazit dialogové okno s potvrzením volání (nastavení na false volá automaticky)
  };

  // Spuštění hovoru pomocí react-native-phone-call
  phonecall(args);
};

const phoneNumber = "123-456-7890"; // Nahraďte skutečným telefonním číslem

const PropertyDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true
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

  const property = findProperty(PropertyLists, "id", propertyId);
  const name = findProperty(PropertyLists, "propertyName", propertyName);
  const address = findProperty(PropertyLists, "address", propertyAddress);
  const detail = findProperty(PropertyLists, "detail", propertyDetail);
  const image = findProperty(PropertyLists, "image", propertyImage);
  const bed = findProperty(PropertyLists, "bed", propertyBeds);
  const bathroom = findProperty(PropertyLists, "bathroom", propertyBathroom);
  const area = findProperty(PropertyLists, "area", propertyArea);
  const price = findProperty(PropertyLists, "price", propertyPrice);
  const gallery = findProperty(PropertyLists, "gallery", propertyGallery);

  // gallery
  const galleryImages = propertyGallery;

  const PropertyListItem = ({ gallery }) => (
    <View>
      <View
        style={{
          width: 400,
          height: 250,
          overflow: "hidden",
          alignSelf: "center"
        }}>
        <Image
          className="h-48 w-full justify-center flex drop-shadow-lg"
          resizeMode="cover"
          source={gallery}
        />
      </View>
    </View>
  );

  // Zde můžete zobrazit detaily nemovitosti
  return (
    <SafeAreaView>
      <View>
        <View>
          <FlatList
            data={galleryImages}
            horizontal
            renderItem={({ item }) => <PropertyListItem gallery={item} />}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />

          {/* <Image source={propertyImage}
         className='h-48 w-full justify-center flex drop-shadow-lg'
         contentFit="cover" 
         height={30}
         width={30}/> */}
        </View>
        <View className="h-32 flex justify-start mx-7">
          <Text className="font-sans font-bold text-[28px]">
            {propertyPrice}
          </Text>
          <Text className="font-semibold text-[18px] pb-4">{propertyName}</Text>
          <Text className="">{propertyAddress}</Text>

          <View className="flex-row justify-between items-center mx-3 top-8">
            <FontAwesomeIcon icon={faBed} />
            <Text className="">{propertyBeds}</Text>
            <FontAwesomeIcon icon={faShower} />
            <Text className="">{propertyBathroom}</Text>
            <FontAwesomeIcon icon={faSquarePlus} />
            <Text className="">{propertyArea}</Text>
          </View>
          <View className="flex justify-center  my-3 top-20">
            <Text className=" text-[18px] mb-2">Description:</Text>

            <Text className="text-[14px] h-64 text-justify">
              {propertyDetail}
            </Text>
          </View>
          <View className=" mt-8  bg-slate-600 justify-center items-center rounded-xl">
            <TouchableOpacity
              onPress={handleCall}
              className="w-full h-10 justify-center rounded-xl overflow-hidden">
              <Text style={{ color: "white", textAlign: "center" }}>
                Contact Agent
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PropertyDetail;
