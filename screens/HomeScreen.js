import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { TextInput } from 'react-native-gesture-handler';

const deviceWidth = Dimensions.get('window').width;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          {this._maybeRenderDevelopmentModeWarning()}
        </View>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={{
            flex: 1,
            alignItems: 'stretch'
          }}>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              padding: 5,
            }}>
              <Image source={require('../assets/images/nike_logo.png')}
                    style={{
                      width: 113,
                      height: 60,
                    }}
              />
              <View style={{flex: 1}}>
                <Text style={{
                    fontFamily: 'space-mono',
                    fontSize: 20,
                  }}>Nike Air Force 1 '07 SE Moto Sneaker
                </Text>
              </View>
            </View>
            <View style={{flex:1}}>
              <Image source={require('../assets/images/nike_shoes_model.jpg')}
                    style={{
                      width: deviceWidth,
                      height: deviceWidth
                    }}
              />
            </View>
          </View>

          <View style={{
            flex: 1,
            alignItems: 'stretch'
          }}>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              padding: 5,
            }}>
              <Image source={require('../assets/images/nike_logo.png')}
                    style={{
                      width: 113,
                      height: 60,
                    }}
              />
              <View style={{flex: 1}}>
                <Text style={{
                    fontFamily: 'space-mono',
                    fontSize: 20,
                  }}>Nike Air Force 1 '07 SE Moto Sneaker
                </Text>
              </View>
            </View>
            <View style={{flex:1}}>
              <Image source={require('../assets/images/nike_shoes_model.jpg')}
                    style={{
                      width: deviceWidth,
                      height: deviceWidth
                    }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
