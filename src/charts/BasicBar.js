import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { BarChart, } from 'react-native-svg-charts'
//import { Defs, LinearGradient, Stop } from 'react-native-svg'

export default class BasicBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const data = [ 1, 4, 8, 9, 5, 2 ]
    return (
      <View>
            <BarChart
                style={{ flex: 1, marginLeft: 8 , height: 50, width:50 }}
                data={data}
                horizontal={false}
                showGrid={false}
                numberOfTicks={0}
                svg={{ fill: this.props.barColor }}
                contentInset={{ top: 10, bottom: 10 }}
                ticks={0}
                gridMin={0}
            >
    </BarChart>
      </View>
    );
  }
}
