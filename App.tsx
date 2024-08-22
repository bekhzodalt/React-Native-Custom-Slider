import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import marker from './assets/images/marker.png';
import tank from './assets/images/tank.png';
import water from './assets/images/water.png';

const SourceMinimumSlider = () => {
  const [value, setValue] = useState(65); // Initial value set to 65%
  const [switchOn, setSwitchOn] = useState(true);

  const onChangeSourceMin = (min: any) => {
    if( min ) {
      min = parseInt(min);
      if( min > 100 ) setValue(100);
      else if( min < 0 ) setValue(0);
      else setValue(min);
    } else {
      setValue(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Source Minimum</Text>
      <View style={styles.sliderContainer}>
        <View style={styles.toggleContainer}>
          <TouchableHighlight 
            style={[styles.toggle, switchOn ? styles.activeToggle : '']}
            onPress={() => setSwitchOn(!switchOn)}
            underlayColor="#fff"
            activeOpacity={1}>
            <Text style={[styles.toggleText]}>PERCENTAGE</Text>
          </TouchableHighlight>
          <TouchableHighlight 
            style={[styles.toggle, switchOn ? '' : styles.activeToggle]} 
            onPress={() => setSwitchOn(!switchOn)}
            underlayColor="#fff"
            activeOpacity={1}>
            <Text style={styles.toggleText}>VOLUME</Text>
          </TouchableHighlight>
        </View>
        <Text style={styles.infoText}>
          We’ll stop the pump when your tank drops below:
        </Text>

        <View style={styles.tankContainer}>
          <Text style={styles.tankText}>{value} %</Text>
          <Image style={styles.tankImg} 
            source={tank} />
          <Image style={[styles.levelBar, { bottom: value * 1.68 }]} 
            source={marker} />
          <Image style={[styles.water, { height: value * 1.85 }]} 
            source={water} />
          <View style={styles.slider}>
            <Slider
              minimumValue={0}
              maximumValue={100}
              value={value}
              onValueChange={setValue}
              step={1}
            />
          </View>
        </View>
      </View>
      <View style={styles.sourceMinContainer}>
        <Text style={styles.sourceMinText}>
          Source Minimum
        </Text>
        <View style={styles.sourceMinInputView}>
          <TextInput
            editable
            inputMode="numeric"
            onChangeText={min => onChangeSourceMin(min)}
            value={value.toString()}
            style={styles.sourceMinInput}
          />
          <Text style={styles.valueText}>%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 70,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'semibold',
  },
  sliderContainer: {
    height: '50%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#BCE5FF',
    borderRadius: 25,
    padding: 2,
  },
  toggle: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    flex: 1,
  },
  activeToggle: {
    backgroundColor: '#BCE5FF',
    borderRadius: 25,
  },
  toggleText: {
    fontSize: 11,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'semibold',
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '500',
    padding: 20,
    maxWidth: 300,
    fontFamily: 'Montserrat-Bold',
  },
  tankContainer: {
    width: 260,
    height: 250,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  tankImg: {
    objectFit: 'contain',
    position: 'absolute',
    bottom: 36,
  },
  levelBar: {
    position: 'absolute',
    right: -30,
    zIndex: 100,
  },
  water: {
    width: 186,
    position: 'absolute',
    bottom: 45,
    left: 10,
    objectFit: 'fill',
  },
  tankText: {
    fontSize: 21,
    fontFamily: 'Montserrat-Bold',
    color: '#30324E',
    position: 'absolute',
    top: 54,
    left: 82,
    zIndex: 1000,
  },
  slider: {
    position: 'absolute',
    top: 98,
    right: -82,
    width: 180,
    height: 40,
    transform: [{ rotate: '270deg' }],
    opacity: 0,
    zIndex: 1000,
  },
  sourceMinContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
    padding: 40,
    paddingVertical: 25,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
  },
  sourceMinInputView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  sourceMinInput: {
    backgroundColor: '#F1F1F3',
    color: '#8A8B97',
    padding: 10,
    fontSize: 16,
    borderRadius: 10,
    fontFamily: 'Rubik-Regular',
  },
  sourceMinText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'semibold',
  },
  valueText: {
    fontSize: 16,
    marginLeft: 15,
    fontFamily: 'Rubik-Regular',
  },
});

export default SourceMinimumSlider;

