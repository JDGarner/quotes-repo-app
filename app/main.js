import React, { Component } from "react";
import { AppRegistry, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import style from "./styling";
import Quote from "./components/quote/quote";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      quoteIndex: 0,
      quotesLoaded: false
    };
  }

  componentDidMount() {
    this.getQuotes();
  }

  async getQuotes() {
    try {
      let response = await fetch(
        "https://quotes-repo-api.herokuapp.com/quotes"
      );
      let responseJson = await response.json();
      this.setState({
        quotes: responseJson,
        quotesLoaded: true
      });
    } catch (error) {
      console.error(error);
    }
  }

  onClickNewQuote() {
    this.setState({
      quoteIndex: (this.state.quoteIndex + 1) % this.state.quotes.length
    });
  }

  renderQuote() {
    const { content, author } = this.state.quotes[this.state.quoteIndex];

    return (
      <Quote
        quote={content}
        author={author}
        onClickNewQuote={() => this.onClickNewQuote()}
      />
    );
  }

  render() {
    return (
      <LinearGradient
        colors={["#E8CBC0", "#636FA4"]}
        style={style.linearGradient}
      >
        {this.state.quotesLoaded ? (
          this.renderQuote()
        ) : (
          <Text>Loading Quotes...</Text>
        )}
      </LinearGradient>
    );
  }
}

AppRegistry.registerComponent("App", () => App);
