import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export function SettingsScreen({ route, navigation }) {
  function handleHomePress() {
    navigation.navigate("Home");
  }
  return (
    <ScrollView>
    <View style={styles.mainView}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>Prve postave</Text>
      </View>
      <View style={styles.screen}>

        <View style={styles.leftView}>
          <Text style={styles.paddingText}>10</Text>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={styles.image}
          />
          <Text>Brozovic M.</Text>
        </View>

        <View style={styles.rightView}>
          <Text>(Mostovoy A.)</Text>
          <Image
            source={require("../assets/izlaz.png")}
            style={styles.imageTwo}
            />
          <Text>Bakaev Z.</Text>
          <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.paddingText}>10</Text>
        </View>

      </View>

      <View style={styles.screen}>

        <View style={styles.leftView}>
          <Text style={styles.paddingText}>8</Text>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={styles.image}
          />
          <Text>Grbić I. (G)</Text>
          <Image
            source={require("../assets/zuti_karton.jpg")}
            style={styles.imageTwo}
            />
        </View>

        <View style={styles.rightView}>
          <Text>Barinov D.</Text>
          <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.paddingText}>11</Text>
        </View>

      </View>

      <View style={styles.screen}>

<View style={styles.leftView}>
  <Text style={styles.paddingText}>6</Text>
  <Image
    source={{
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
    }}
    style={styles.image}
  />
  <Text>Gvardiol J.</Text>
</View>

<View style={styles.rightView}>
  <Text>Diveyev I.</Text>
  <Image
    source={{
      uri:
        "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
    }}
    style={styles.image}
  />
  <Text style={styles.paddingText}>16</Text>
</View>

</View>

<View style={styles.screen}>

        <View style={styles.leftView}>
          <Text style={styles.paddingText}>15</Text>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={styles.image}
          />
          <Text>Juranovic J.</Text>
          <Image
            source={require("../assets/izlaz.png")}
            style={styles.imageTwo}
            />
          <Text>(Brekalo J.)</Text>
        </View>

        <View style={styles.rightView}>
          <Text>Dzhyklija G. (C)</Text>
          <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.paddingText}>2</Text>
        </View>

      </View>

      <View style={styles.screen}>

        <View style={styles.leftView}>
          <Text style={styles.paddingText}>3</Text>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={styles.image}
          />
          <Text>Kramaric A.</Text>
          <Image
            source={require("../assets/izlaz.png")}
            style={styles.imageTwo}
            />
          <Text>(Stanisic J.)</Text>
        </View>

        <View style={styles.rightView}>
          <Text>(Glebov D.)</Text>
          <Image
            source={require("../assets/izlaz.png")}
            style={styles.imageTwo}
            />
          <Text>Fomin D. </Text>
          <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.paddingText}>18</Text>
        </View>

      </View>

      <View style={styles.screen}>

        <View style={styles.leftView}>
          <Text style={styles.paddingText}>4</Text>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={styles.image}
          />
          <Text>Lovren D.</Text>
          <Image
            source={require("../assets/zuti_karton.jpg")}
            style={styles.imageTwo}
            />
        </View>

        <View style={styles.rightView}>
          <Text>(Chistyakov D.)</Text>
          <Image
            source={require("../assets/izlaz.png")}
            style={styles.imageTwo}
            />
            <Image
            source={require("../assets/zuti_karton.jpg")}
            style={styles.imageTwo}
            />
          <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.paddingText}>5</Text>
        </View>

      </View>

      <View style={styles.screen}>

        <View style={styles.leftView}>
          <Text style={styles.paddingText}>16</Text>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={styles.image}
          />
          <Text>Modric L. (C)</Text>
        </View>

        <View style={styles.rightView}>
          <Text>(Zobnin R.)</Text>
          <Image
            source={require("../assets/izlaz.png")}
            style={styles.imageTwo}
            />
          <Text>Ionov A.</Text>
          <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.paddingText}>12</Text>
        </View>

      </View>

      <View style={styles.screen}>

        <View style={styles.leftView}>
          <Text style={styles.paddingText}>12</Text>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={styles.image}
          />
          <Text>Pasalic M.</Text>
          <Image
            source={require("../assets/izlaz.png")}
            style={styles.imageTwo}
            />
          <Text>(Livaja M.)</Text>
        </View>

        <View style={styles.rightView}>
          <Text>Karavaev V.</Text>
          <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.paddingText}>17</Text>
        </View>

      </View>

      <View style={styles.screen}>

        <View style={styles.leftView}>
          <Text style={styles.paddingText}>22</Text>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={styles.image}
          />
          <Text>Perisic I.</Text>
          <Image
            source={require("../assets/zuti_karton.jpg")}
            style={styles.imageTwo}
            />
        </View>

        <View style={styles.rightView}>
          <Text>Autogol</Text>
          <Image
            source={require("../assets/star.png")}
            style={styles.imageTwo}
            />
          <Text>Kudryashov F.</Text>
          <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.paddingText}>24</Text>
        </View>

      </View>

      <View style={styles.screen}>

        <View style={styles.leftView}>
          <Text style={styles.paddingText}>27</Text>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={styles.image}
          />
          <Text>Sosa B.</Text>
        </View>

        <View style={styles.rightView}>
          <Text>Safonov M. (G)</Text>
          <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.paddingText}>31</Text>
        </View>

      </View>

      <View style={styles.screen}>

        <View style={styles.leftView}>
          <Text style={styles.paddingText}>35</Text>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={styles.image}
          />
          <Text>Vlasic N.</Text>
          <Image
            source={require("../assets/izlaz.png")}
            style={styles.imageTwo}
            />
            <Text>(Petkovic B.)</Text>
        </View>

        <View style={styles.rightView}>
          <Text>(Zabolotnyl A.)</Text>
          <Image
            source={require("../assets/izlaz.png")}
            style={styles.imageTwo}
            />
            <Image
            source={require("../assets/zuti_karton.jpg")}
            style={styles.imageTwo}
            />
            <Text>Smolov F.</Text>
          <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.paddingText}>31</Text>
        </View>

      </View>


      <View style={styles.headingView}>
        <Text style={styles.heading}>Zamjene</Text>
      </View>

      <View style={styles.screen}>

        <View style={styles.leftView}>
          <Text style={styles.paddingText}>1</Text>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={styles.image}
          />
          <Text>Barisic B.</Text>
        </View>

        <View style={styles.rightView}>
          <Text>(Golovin A.)</Text>
          <Image
            source={require("../assets/ulaz.png")}
            style={styles.imageTwo}
            />
          <Text>Chistyakov D.</Text>
          <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.paddingText}>47</Text>
        </View>

      </View>

      <View style={styles.screen}>

        <View style={styles.leftView}>
          <Text style={styles.paddingText}>2</Text>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={styles.image}
          />
          <Text>Brekalo J.</Text>
          <Image
            source={require("../assets/ulaz.png")}
            style={styles.imageTwo}
            />
          <Text>(Juranovic J.)</Text>
        </View>

        <View style={styles.rightView}>
          <Text>Erokhin A.</Text>
          <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.paddingText}>40</Text>
        </View>

      </View>

      <View style={styles.screen}>

        <View style={styles.leftView}>
          <Text style={styles.paddingText}>7</Text>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={styles.image}
          />
          <Text>Caleta-Car D.</Text>
        </View>

        <View style={styles.rightView}>
          <Text>(Fomin D.)</Text>
          <Image
            source={require("../assets/ulaz.png")}
            style={styles.imageTwo}
            />
          <Text>Glebov D.</Text>
          <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.paddingText}>21</Text>
        </View>

      </View>

      <View style={styles.screen}>

        <View style={styles.leftView}>
          <Text style={styles.paddingText}>21</Text>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={styles.image}
          />
          <Text>Jakic K.</Text>
        </View>

        <View style={styles.rightView}>
          <Text>Gulherme (G)</Text>
          <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.paddingText}>7</Text>
        </View>

      </View>

      <View style={styles.screen}>

        <View style={styles.leftView}>
          <Text style={styles.paddingText}>10</Text>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={styles.image}
          />
          <Text>Livaja M.</Text>
          <Image
            source={require("../assets/ulaz.png")}
            style={styles.imageTwo}
            />
          <Text>Pasalic M.</Text>
          <Image
            source={require("../assets/zuti_karton.jpg")}
            style={styles.imageTwo}
            />
        </View>

        <View style={styles.rightView}>
          <Text>(Golovin A.)</Text>
          <Image
            source={require("../assets/ulaz.png")}
            style={styles.imageTwo}
            />
          <Text>Halkin N.</Text>
          <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.paddingText}>67</Text>
        </View>

      </View>

      <View style={styles.screen}>

        <View style={styles.leftView}>
          <Text style={styles.paddingText}>13</Text>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={styles.image}
          />
          <Text>Livakovic D. (G)</Text>
        </View>

        <View style={styles.rightView}>
          <Text>Krugovoy D.</Text>
          <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.paddingText}>9</Text>
        </View>

      </View>

      <View style={styles.screen}>

        <View style={styles.leftView}>
          <Text style={styles.paddingText}>19</Text>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
            }}
            style={styles.image}
          />
          <Text>Majer L.</Text>
        </View>

        <View style={styles.rightView}>
          <Text>Miranchuk A.</Text>
          <Image
            source={{
              uri:
                "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
            }}
            style={styles.image}
          />
          <Text style={styles.paddingText}>12</Text>
        </View>

      </View>

      <View style={styles.headingView}>
        <Text style={styles.heading}>Treneri</Text>
      </View>

      <View style={styles.screen}>

<View style={styles.leftView}>
  <Image
    source={{
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1200px-Flag_of_Croatia.svg.png",
    }}
    style={styles.image}
  />
  <Text>Dalic Z.</Text>
</View>

<View style={styles.rightView}>
  <Text>Karpin V.</Text>
  <Image
    source={{
      uri:
        "https://m.media-amazon.com/images/I/51KfJKnnrJL._AC_SX466_.jpg",
    }}
    style={styles.image}
  />
</View>

</View>


    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainView: {
    marginTop: 10,
    paddingHorizontal: 5,
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
  },
  paddingText: {
    padding: 10,
  },
  leftView: {
  flexDirection: "row",
  paddingRight: 30,
  padding: 5,
  },
  rightView: {
  flexDirection: "row",
  paddingRight: 30,
  padding: 5,
  },
  headingView: {
    alignItems: "center",
  },
  heading: {
    margin: 20,
    fontWeight: "bold",
  },
  image: {
    height: 20,
    width: 40,
  },
  imageTwo:{
    height: 30,
    width: 20,
  }

});