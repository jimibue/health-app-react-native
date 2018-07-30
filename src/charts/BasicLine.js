import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { LineChart, Grid, XAxis } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop } from 'react-native-svg'

const defaultData = [1,3,0,5,0,2,3,4,0,3,4,2,5,3,4,5,1,1,3,0,0,1,3,0,5,0,2,3,4,0,3,4,2,0,1,4,5,1,0,0,0  ]

//const Gradient = () => (

//     <Defs key={'gradient'}>
//     <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'0%'} y2={'100%' }>
//         <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'}/>
//         <Stop offset={'20%'} stopColor={'rgb(66, 64, 244)'}/>
//         <Stop offset={'40%'} stopColor={'rgb(16, 234, 244)'}/>
//         <Stop offset={'60%'} stopColor={'rgb(66, 194, 44)'}/>
//         <Stop offset={'80%'} stopColor={'rgb(6, 194, 44)'}/>
//         <Stop offset={'100%'} stopColor={'rgb(256, 4, 4)'}/>
//     </LinearGradient>
// </Defs>
//)


export default class BasicLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: props.data
    };
  }

  getData = () =>{
      console.log('getData called')
      if(this.state.data){
          return  this.state.data.split('').map( item => parseInt(item))
      }
      else return defaultData
  }
  

  render() {
    return (
      <View>
                <LineChart
                style={ { height: 50, width:250 } }
                data={  this.getData() }
                contentInset={ { top: 10, bottom: 10 } }
                svg={{
                    strokeWidth: 2,
                    stroke:'black'
                    // stroke: 'url(#gradient)',
                }}
            >
             {/* <Grid/> */}
                </LineChart>
                {/* <XAxis
                    style={{ marginHorizontal: -10 }}
                    data={ this.getData() }
                    formatLabel={ (value, index) => { return index%3 == 0 ? index : '' }  }
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                /> */}
      </View>
    );
  }
}