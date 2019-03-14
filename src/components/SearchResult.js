import React from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Text,
  Image
} from "react-native";
import { Rating } from "react-native-elements";
import ImageHeader from "../components/ImageHeader";
import Icon from "react-native-vector-icons/FontAwesome";
//import { Card, CardTitle, CardImage, CardAction } from "react-native-cards";

const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;
//const { rating } = this.props;

const cards = [
  {
    id: "5c88b77a09aa019f998fd975",
    price: "$1,039.01",
    status: "Excellent",
    rating: 4,
    distance: "5 km form Greenwich",
    review: "438 reviews",
    picture:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/13/71/8a/77/hotel-exterior.jpg",
    title: "ZILLANET",
    description:
      "Aliquip et aute et ipsum sit aute. Aute elit deserunt dolor irure. Sunt nulla ipsum dolore commodo. Exercitation sunt do adipisicing ea ad adipisicing enim nulla. In nisi amet adipisicing ad exercitation mollit ad sint incididunt exercitation.",
    latitude: "-19.946115",
    longitude: "-130.394184"
  },
  {
    id: "5c88b77aced4dbde6a4109a8",
    price: "$3,647.67",
    status: "poor",
    rating: 2,
    distance: "5 km form Stouchsburg",
    review: "794 reviews",
    picture:
      "https://media-cdn.tripadvisor.com/media/photo-o/14/94/81/9b/exterior.jpg",
    title: "BEZAL",
    description:
      "Culpa anim laborum velit ullamco aliqua sit velit sunt sunt elit ullamco sunt consequat. Nulla ipsum dolore labore sint veniam velit consequat enim. Quis ut eiusmod veniam adipisicing in exercitation do.",
    latitude: "45.008305",
    longitude: "137.41217"
  },
  {
    id: "5c88b77a15e9fb440a25cebc",
    price: "$3,414.67",
    status: "Excellent",
    rating: 5,
    distance: "5 km form Snelling",
    review: "758 reviews",
    picture:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/13/6b/30/b8/welcome-to-the-tryp-time.jpg",
    title: "IMAGEFLOW",
    description:
      "Ut sunt mollit in nisi culpa. Laborum veniam tempor sint in eiusmod deserunt nulla proident nulla ipsum irure dolore. Eiusmod qui aute occaecat sit amet excepteur. Minim aliqua pariatur aliquip deserunt incididunt et culpa sunt minim. Ad sunt aute commodo cupidatat reprehenderit sunt nostrud proident nulla.",
    latitude: "56.733675",
    longitude: "103.078642"
  },
  {
    id: "5c88b77a1c7323ed38a4363d",
    price: "$3,741.14",
    status: "poor",
    rating: 2,
    distance: "5 km form Germanton",
    review: "523 reviews",
    picture:
      "https://media-cdn.tripadvisor.com/media/photo-o/0a/34/e1/45/located-in-the-heart.jpg",
    title: "ACUSAGE",
    description:
      "Nulla minim sit anim exercitation non laborum veniam laborum mollit non incididunt proident. Sit dolore adipisicing nisi sit fugiat ipsum exercitation ex commodo nulla. Consequat elit ad consequat aliqua deserunt et sunt. Velit ut do magna eiusmod labore nostrud laboris ex dolore. Magna ad tempor elit sint sit deserunt commodo aliquip Lorem consectetur velit Lorem.",
    latitude: "-86.622899",
    longitude: "-139.259684"
  },
  {
    id: "5c88b77a713d28fdf3acc58b",
    price: "$2,852.38",
    status: "good",
    rating: 2,
    distance: "5 km form Montura",
    review: "676 reviews",
    picture:
      "https://media-cdn.tripadvisor.com/media/photo-o/0d/d6/6a/1d/the-roxy-by-night.jpg",
    title: "BUZZOPIA",
    description:
      "Minim qui cillum et labore nostrud commodo ut minim culpa mollit. Id occaecat nulla fugiat esse voluptate et nostrud velit. Officia ea deserunt cupidatat in laboris elit consequat excepteur. Culpa velit laborum qui consectetur voluptate pariatur officia officia labore incididunt. Eiusmod sint cupidatat non duis.",
    latitude: "-75.256723",
    longitude: "110.440235"
  },
  {
    id: "5c88b77a33f0f2d59d4310dd",
    price: "$1,516.90",
    status: "Excellent",
    rating: 2,
    distance: "5 km form Torboy",
    review: "501 reviews",
    picture:
      "https://media-cdn.tripadvisor.com/media/photo-s/14/8c/94/30/lobby.jpg",
    title: "VIRVA",
    description:
      "Velit est in sit eu esse mollit amet aliqua aliqua ea excepteur. Cillum duis reprehenderit minim minim voluptate consequat enim aliqua officia et. Sint velit et commodo exercitation incididunt commodo est cillum esse exercitation do cillum culpa sint. Nulla ea sunt eiusmod adipisicing. Enim elit elit pariatur adipisicing quis id voluptate aute consequat excepteur consectetur laborum magna. Culpa voluptate mollit tempor ea reprehenderit consequat eiusmod. Minim in dolore eiusmod anim exercitation magna quis et amet.",
    latitude: "-79.617871",
    longitude: "-138.983932"
  },
  {
    id: "5c88b77a030e82ff3ef3fab2",
    price: "$2,645.03",
    status: "good",
    rating: 5,
    distance: "5 km form Grazierville",
    review: "496 reviews",
    picture:
      "https://media-cdn.tripadvisor.com/media/photo-s/10/00/09/a8/swimming-pool.jpg",
    title: "MULTIFLEX",
    description:
      "Est non Lorem magna esse voluptate irure commodo consequat. Amet est sunt magna dolore amet non consequat ex cillum aliqua. Fugiat nulla anim laboris minim occaecat in enim sint mollit sint magna exercitation mollit incididunt.",
    latitude: "-75.028323",
    longitude: "-155.141093"
  },
  {
    id: "5c88b77a605a5ab14e201f41",
    price: "$2,854.75",
    status: "poor",
    rating: 3,
    distance: "5 km form Yardville",
    review: "592 reviews",
    picture:
      "https://media-cdn.tripadvisor.com/media/photo-s/08/b1/b4/fb/aria-hotel-budapest.jpg",
    title: "MAGMINA",
    description:
      "Reprehenderit eiusmod officia magna est ad enim irure officia excepteur. Ad ut cupidatat excepteur consectetur laboris anim sit aliquip ipsum ad quis ut. Fugiat tempor aliquip aliqua nisi esse proident mollit est do. Enim id sit qui ad nostrud quis nostrud eiusmod reprehenderit fugiat occaecat sit id. Reprehenderit duis aliqua velit aliquip nisi incididunt. Voluptate in exercitation et veniam irure sunt consectetur labore eu incididunt. Mollit eu culpa ipsum veniam magna commodo eu mollit labore dolor eu.",
    latitude: "-7.386666",
    longitude: "83.296342"
  },
  {
    id: "5c88b77a79cbdd08fa54540d",
    price: "$3,778.66",
    status: "good",
    rating: 5,
    distance: "5 km form Delwood",
    review: "588 reviews",
    picture:
      "https://media-cdn.tripadvisor.com/media/photo-o/14/d5/04/69/guest-room.jpg",
    title: "ZILLACON",
    description:
      "Sint commodo amet proident magna duis deserunt. Pariatur amet quis ut Lorem labore enim minim amet in do quis pariatur ut cupidatat. Deserunt culpa ipsum deserunt nostrud elit voluptate elit eiusmod consequat magna. Eiusmod ullamco id laborum do cillum ipsum laborum elit eu tempor ea ea dolor. Pariatur laborum consectetur veniam dolore. Irure reprehenderit enim exercitation deserunt amet velit qui excepteur velit deserunt.",
    latitude: "7.192915",
    longitude: "85.657497"
  }
];
export default class SearchResult extends React.Component {
  render() {
    const {
      maincontainer,
      container,
      card,
      cardImage,
      FirstTag,
      subTitle,
      SecondTag,
      ThridTag,
      subdistance,
      subreview,
      subprice,
      substatus,
      subicon,
      cardRatings
    } = styles;
    return (
      <View style={maincontainer}>
        <ImageHeader title="Search Results" />
        <View style={container}>
          <ScrollView>
            {cards.map(items => (
              <TouchableHighlight
                key={items.id}
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  this.props.navigation.navigate("Hoteldetails", {
                    itemData: items,
                    HotelTitle: items.title
                  });
                }}
              >
                <View style={card}>
                  <Image source={{ uri: items.picture }} style={cardImage} />
                  <View style={FirstTag}>
                    <Text style={subTitle}>{items.title}</Text>
                    <Rating
                      startingValue={items.rating}
                      ratingCount={5}
                      readonly
                      imageSize={15}
                      style={cardRatings}
                    />
                  </View>
                  <View style={SecondTag}>
                    <Icon
                      name="map-marker"
                      type="font-awesome"
                      color="#ccc"
                      size={18}
                      style={styles.iconleft}
                    />
                    <Text style={subdistance}>{items.distance}</Text>
                    <Text style={subreview}>{items.review}</Text>
                  </View>
                  <View style={ThridTag}>
                    <Text style={subprice}>{items.price}</Text>
                    <Text style={substatus}>{items.status}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: "15%"
  },
  maincontainer: {
    flex: 1,
    position: "relative"
  },
  card: {
    flex: 1,
    overflow: "hidden",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    margin: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  iconleft: {
    marginRight: 5
  },
  cardImage: {
    flex: 1,
    width: "auto",
    height: 150,
    resizeMode: "cover",
    borderColor: "#ddd"
  },
  FirstTag: {
    marginHorizontal: 10,
    marginVertical: 5,
    flex: 1,
    flexDirection: "row",
    marginRight: "auto"
  },

  subTitle: {
    flex: 1,
    fontSize: 16,
    color: "#5b2fc6",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "column",
    fontWeight: "bold"
  },
  cardRatings: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "column",
    marginRight: 5
  },
  SecondTag: {
    marginHorizontal: 10,
    marginBottom: 5,
    flex: 1,
    flexDirection: "row",
    marginRight: "auto"
  },
  subdistance: {
    flex: 1,
    fontSize: 14,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  subreview: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "column",
    marginRight: 5
  },
  ThridTag: {
    marginHorizontal: 10,
    flex: 1,
    marginBottom: 5,
    flexDirection: "row",
    marginRight: "auto"
  },
  subprice: {
    flex: 1,
    fontSize: 14,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "column"
  },
  substatus: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "column",
    marginRight: 5
  }
});
