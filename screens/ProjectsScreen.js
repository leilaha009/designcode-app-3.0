import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

class ProjectsCreen extends React.Component {
  static navigationOptions = {
    headerShowm: false,
  };
  render() {
    return (
      <Container>
        <Text>Projects Screen</Text>
      </Container>
    );
  }
}

export default ProjectsCreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
