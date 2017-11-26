import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import style from "./quote-style";


export default class QuoteView extends Component {
  render() {
    return (
        <View style={style.app}>
          <Text style={style.quote}>"{this.props.quote}"</Text>
          <Text style={style.author}>{this.props.author.toUpperCase()}</Text>

          <TouchableOpacity
            style={style.button}
            onPress={this.props.onClickNewQuote}
          >
            <Text style={style.buttonText}>Next Quote</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

AppRegistry.registerComponent("QuoteView", () => QuoteView);
