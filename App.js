import { View, Text, SafeAreaView } from "react-native";
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import PropertyDetail from "./screens/PropertyDetail";




const Stack = createStackNavigator()


export default function App() {
  return (
  

    <TailwindProvider>
      <NavigationContainer>

      <Stack.Navigator>

      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="PropertyDetail" component={PropertyDetail}/>
      

      </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
    
  );
}





// const PropertyIcons = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'Houses',
//     emoji:'house',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Apartment',
//     emoji:'office',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Business Prospects',
//     emoji:'department_store'
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d73',
//     title: 'Lands',
//     emoji:'snow_capped_mountain'
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d74',
//     title: 'Resorts',
//     emoji:'beach_with_umbrella'
//   },
// ];

// const PropertyLists = [
//   {
//     id: 'e9f8g7h6-i5j4k3l2-m1n0o',
//     propertyName: 'Willow Creek Manor',
//     address: '1234 Birchwood Lane, Springfield, IL',
//     price: '$2,350,000',
//     image:require('../assets/properties/3d-house-interior-2021-12-09-02-44-03-utc.jpg'),
//     bed:'3',
//     bathroom:'2',
//     area:' 100 sqft',
//     detail:"detail3",
//     },
//     {
//       id: 'a1b2c3d4-e5f6g7h8-i9j10k11',
//       propertyName: 'Pine Ridge Cottage',
//       address: '5678 Pine Street, Mountain View, CA',
//       price: '$1,800,000',
//       image: require('../assets/properties/house-2021-12-09-05-59-20-utc.jpg'),
//       bed: '2',
//       bathroom: '1.5',
//       area: '85 sqft',
//       detail:"detail2",
//     },
//     {
//       id: 'x1y2z3w4-v5u6t7s8-r9q10p11',
//       propertyName: 'Sunny Valley Villa',
//       address: '910 Sunflower Road, Phoenix, AZ',
//       price: '$3,500,000',
//       image: require('../assets/properties/house-2021-12-09-05-59-23-utc.jpg'),
//       bed: '5',
//       bathroom: '4',
//       area: '300 sqft',
//       detail:"detail1",
//     },
//     {
//       id: 'm1n2o3p4-q5r6s7t8-u9v10w11',
//       propertyName: 'Oceanfront Retreat',
//       address: '123 Ocean Avenue, Malibu, CA',
//       price: '$5,750,000',
//       image: require('../assets/properties/panorama-view-of-houses-2022-06-14-16-18-25-utc.jpg'),
//       bed: '4',
//       bathroom: '3.5',
//       area: '250 sqft',
//       detail:"detail5",
//     },
//     {
//       id: 'h1i2j3k4-l5m6n7o8-p9q10r11',
//       propertyName: 'Rustic Mountain Cabin',
//       address: '456 Cabin Lane, Aspen, CO',
//       price: '$1,200,000',
//       image: require('../assets/properties/rustic-house-2021-08-26-15-58-42-utc.jpg'),
//       bed: '2',
//       bathroom: '1',
//       area: '75 sqft',
//       detail:"detail6",
//     },
//     {
//       id: 'z1x2c3v4-b5n6m7q8-a9s10d11',
//       propertyName: 'Cityscape Loft',
//       address: '789 Urban Street, New York, NY',
//       price: '$2,950,000',
//       image: require('../assets/properties/traditional-wooden-houses-in-porvoo-finland-old-t-2022-02-02-05-07-36-utc.jpg'),
//       bed: '1',
//       bathroom: '1.5',
//       area: '120 sqft',
//       detail:"detail8",
//     },
//     {
//       id: 'e9f8g7h6-i5j4k3l2-m1f0o',
//       propertyName: 'Lakefront Oasis',
//       address: '1010 Lakeshore Drive, Seattle, WA',
//       price: '$4,200,000',
//       image: require('../assets/properties/house-2021-12-09-05-59-23-utc.jpg'),
//       bed: '6',
//       bathroom: '5',
//       area: '400 sqft',
//       detail:"detail9",
//     },
   
// ];