import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { BarChart, Grid,LineChart } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop } from 'react-native-svg'

export default class MonthlyTrackerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
        const data = [ 50, 10, 40, 95, 85 ]
        const data1 = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                    <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'}/>
                    <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'}/>
                </LinearGradient>
            </Defs>
        )

        return (
          <View style={{flex:1}}>
            <View style={{ flexDirection: 'row', height: 80, width:80, paddingVertical: 16 }}>
                <BarChart
                    style={{ flex: 1, marginLeft: 8 , height: 50, width:50 }}
                    data={data}
                    horizontal={false}

                    showGrid={false}
                    numberOfTicks={0}
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)', }}
                    contentInset={{ top: 10, bottom: 10 }}
                    ticks={0}
                    gridMin={0}
                >
                    <Grid direction={Grid.Direction.VERTICAL}/>
                </BarChart>
                </View>
                <LineChart
                style={ { height: 50, width:50 } }
                data={ data }
                showGrid={false}
                numberOfTicks={0}
                ticks={0}
                contentInset={ { top: 10, bottom: 10 } }
                svg={{
                    strokeWidth: 3,
                    stroke: 'url(#gradient)',
                }}
            >
                <Grid/>
                <Gradient/>
            </LineChart>
            </View>
  
    )
  }
}
