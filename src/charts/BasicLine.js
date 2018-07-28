import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { LineChart, } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop } from 'react-native-svg'

const data1 = [1,3,0,5,0,2,3,4,0,3,4,2,5,3,4,5,1,1,3,0,0,1,3,0,5,0,2,3,4,0,3,4,2,0,1,4,5,1,0,0,0  ]

const Gradient = () => (
    <Defs key={'gradient'}>
        <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
            <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'}/>
            <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'}/>
        </LinearGradient>
    </Defs>
)


export default class BasicLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  

  render() {
    return (
      <View>
                <LineChart
                style={ { height: 50, width:250 } }
                data={ data1 }
                showGrid={false}
                numberOfTicks={0}
                ticks={0}
                contentInset={ { top: 10, bottom: 10 } }
                svg={{
                    strokeWidth: 3,
                    stroke: 'url(#gradient)',
                }}
            >
                <Gradient/>
                </LineChart>
      </View>
    );
  }
}