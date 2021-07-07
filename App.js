import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";
import { Ionicons } from "@expo/vector-icons";
import { NotificationIcon } from "./components/Icons";
import Logo from "./components/Logo";
import Course from "./components/Course";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <SafeAreaView>
          <ScrollView>
            <TitleBar>
              <Avatar source={require("./assets/avatar-student.jpg")} />
              <Title>Welcome back,</Title>
              <Name>Sanna</Name>
              <NotificationIcon
                style={{ position: "absolute", right: 20, top: 5 }}
              />
            </TitleBar>

            <ScrollView
              style={{
                flexDirection: "row",
                padding: 20,
                paddingLeft: 12,
                paddingTop: 30,
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {logos.map((logo, index) => (
                <Logo key={index} image={logo.image} text={logo.text} />
              ))}
            </ScrollView>
            <Subtitle>Most Read</Subtitle>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              {cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  image={card.image}
                  subtitle={card.subtitle}
                  caption={card.caption}
                  // logo={card.logo}
                />
              ))}
            </ScrollView>
            {courses.map((course, index) => (
              <Course
                key={index}
                image={course.image}
                title={course.title}
                subtitle={course.subtitle}
                logo={course.logo}
                author={course.author}
                avatar={course.avatar}
                caption={course.caption}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.View`
  background-color: #f0f3f5;
  flex: 1;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const logos = [
  {
    image: require("./assets/logo-framerx.png"),
    text: "Kỹ năng sống",
  },
  {
    image: require("./assets/logo-figma.png"),
    text: "Tài chính",
  },
  {
    image: require("./assets/logo-studio.png"),
    text: "Studio",
  },
  {
    image: require("./assets/logo-react.png"),
    text: "Study Tips",
  },
  {
    image: require("./assets/logo-swift.png"),
    text: "Công nghệ",
  },
  {
    image: require("./assets/logo-sketch.png"),
    text: "Tình yêu",
  },
];

const cards = [
  {
    title: "3 tips giúp bạn tự tin hơn",
    image: require("./assets/background11.jpg"),
    subtitle: "3 phút đọc",
    caption: "Kỹ năng sống",
    logo: require("./assets/logo-react.png"),
  },
  {
    title: "Có 9 loại thông minh, bạn thuộc loại nào?",
    image: require("./assets/background12.jpg"),
    subtitle: "4 phút đọc",
    caption: "Kỹ năng sống",
    logo: require("./assets/logo-react.png"),
  },
  {
    title: "Cách vượt qua những lúc thất vọng",
    image: require("./assets/background13.jpg"),
    subtitle: "6 phút đọc",
    caption: "Kỹ năng sống",
    logo: require("./assets/logo-react.png"),
  },
  {
    title: "Bí quyết của một tình yêu lâu dài",
    image: require("./assets/background14.jpg"),
    subtitle: " phút đọc",
    caption: "Tình yêu",
    logo: require("./assets/logo-react.png"),
  },
];

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("./assets/background13.jpg"),
    logo: require("./assets/logo-studio.png"),
    author: "Leila Ha",
    avatar: require("./assets/avatar2.jpg"),
    caption: "Design and interactive prototype",
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("./assets/background11.jpg"),
    logo: require("./assets/logo-react.png"),
    author: "Leila Ha",
    avatar: require("./assets/avatar2.jpg"),
    caption: "Learn to design and code a React site",
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("./assets/background14.jpg"),
    logo: require("./assets/logo-framerx.png"),
    author: "Leila Ha",
    avatar: require("./assets/avatar2.jpg"),
    caption: "Create powerful design and code components for your app",
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("./assets/background6.jpg"),
    logo: require("./assets/logo-figma.png"),
    author: "Leila Ha",
    avatar: require("./assets/avatar2.jpg"),
    caption:
      "Complete guide to designing a site using a collaborative design tool",
  },
];
