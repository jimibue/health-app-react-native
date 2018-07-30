import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { BarChart, XAxis, Labels } from 'react-native-svg-charts'
//import { Defs, LinearGradient, Stop } from 'react-native-svg'
const defaultData = [ 1, 4, 8, 9, 5, 2 ]

const CUT_OFF = 20
// const Labels = ({ x, y, bandwidth, data }) => (
//     data.map((value, index) => (
//         <Text
//             key={ index }
//             x={ x(index) + (bandwidth / 2) }
//             y={ value < CUT_OFF ? y(value) - 10 : y(value) + 15 }
//             fontSize={ 14 }
//             fill={ value >= CUT_OFF ? 'white' : 'black' }
//             alignmentBaseline={ 'middle' }
//             textAnchor={ 'middle' }
//         >
//             {value}
//         </Text>
//     ))
// )

export default class BasicBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }


getData = () =>{
  console.log('get data from barchart calles')
    if(this.state.data){
        let array = this.state.data.split('').map( item => parseInt(item))
        const data = [0,0,0,0,0,0]

        array.forEach(element => {
          data[element] +=1
        });
        return data
    }
   
    else return defaultData
}

  render() {
    console.log('barchart rendered')
    return (
      <View>
            <BarChart
                style={{ flex: 1, marginLeft: 8 , height: 50, width:80 }}
                data={this.getData()}
                horizontal={false}
                showGrid={false}
                numberOfTicks={0}
                svg={{ fill: this.props.barColor }}
                contentInset={{ top: 5, bottom: 5 }}
                ticks={0}
                gridMin={0}
            >
    </BarChart>
    {/* {this.getLabels()} */}
    <XAxis
                    style={{ marginHorizontal: -10 }}
                    data={ this.getData() }
                    formatLabel={ (value, index) => { return  index  }  }
                    contentInset={{ left: 20, right: 20 }}
                    svg={{ fontSize: 8, fill: 'black' }}
                />
      </View>
    );
  }
}
