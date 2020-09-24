import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  SectionList,
  FlatList,
  Image
} from "react-native";
import {
  scaleValueBasedOnHeight,
  scaleValueBasedOnWidth
} from "./src/utils/scaleHelper";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

const AdminActivityListItem = ({ any }) => {
  console.log(any);
  return (
    <View style={styles.cardBody}>
      {/* Image Container */}
      <View style={[styles.imageContainer]}>
        {/* Image */}
        <Image
          style={styles.activityImage}
          source={require("./src/assests/images/cover.jpg")}
          resizeMode="cover"
        />
      </View>

      {/* Footer Container */}
      <View style={styles.footerContainer}>
        <View style={{ flex: 0.95, paddingRight: scaleValueBasedOnWidth(10) }}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.mapName}>
            {any}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.mapAuthor}>
            Hello
          </Text>
        </View>
        <View style={{ flex: 0.05 }} />
      </View>
    </View>
  );
};

const renderSectionItem = ({ section: { data } }) => {
  console.log(`renderSectionItem : ${JSON.stringify(data)}`);

  return (
    <View
      style={{
        height: scaleValueBasedOnHeight(188),
        marginBottom: scaleValueBasedOnHeight(10)
      }}
    >

<Text style={{width:'100%', height:'100%'}}>
{JSON.stringify(data)}
</Text>

      {/* <FlatList
        horizontal
        ItemSeparatorComponent={() => (
          <View style={{ width: scaleValueBasedOnWidth(30) }} />
        )}
        renderItem={({ data: listItem }) => (
          <AdminActivityListItem key={listItem} />
        )}
        data={data}
        keyExtractor={(item, index) => item}
      /> */}
    </View>
  );
};

const renderSectionHeader = () => {
  return null;
};

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex:1}}>
        <SectionList
          style={[styles.styleSectionList,]}
          renderItem={renderSectionItem}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: "bold" }}>{title}</Text>
          )}
          sections={[
            { title: "Title1", data: ["item1", "item2", "item3"] },
            { title: "Title2", data: ["item3", "item4"] },
            { title: "Title3", data: ["item5", "item6"] }
          ]}
          keyExtractor={(item, index) => item + index}
        />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: "absolute",
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  },
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: Colors.lighter
  },
  styleSectionList: {
    marginLeft: scaleValueBasedOnWidth(30),
    marginRight: scaleValueBasedOnWidth(30),
    marginTop: scaleValueBasedOnHeight(24),
    flex: 1
  },
  logo: {
    opacity: 0.2,
    overflow: "visible",
    resizeMode: "cover",
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192
  },
  text: {
    fontSize: 40,
    fontWeight: "600",
    textAlign: "center",
    color: Colors.black
  },
  mapName: {
    marginTop: scaleValueBasedOnHeight(5),
    color: "#353741CC",
    fontSize: scaleValueBasedOnHeight(15),
    fontWeight: "600"
  },

  mapAuthor: {
    marginTop: scaleValueBasedOnHeight(3),
    color: "#47484c",
    fontSize: scaleValueBasedOnHeight(12),
    fontWeight: "300"
  },
  footerContainer: {
    flex: 0.3,
    marginLeft: scaleValueBasedOnWidth(10),
    marginRight: scaleValueBasedOnWidth(10),
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  cardBody: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    borderWidth: 1,
    borderColor: "#CBCFD6",
    borderRadius: scaleValueBasedOnHeight(5),
    overflow: "hidden",
    width: scaleValueBasedOnWidth(155)
  },
  imageContainer: {
    flex: 0.7
  },

  activityImage: {
    width: "100%",
    height: "100%"
  }
});

export default App;
