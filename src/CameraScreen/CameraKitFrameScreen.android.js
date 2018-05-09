import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import CameraScreenBase from './CameraKitCameraScreenBase';

export default class CameraFrameScreen extends CameraScreenBase {
    renderGap() {
        return (
            <View style={styles.renderGap}>
                <View style={styles.frameTop} />
                <View style={styles.frameCenter} />
                <View style={styles.containerSides}>
                    <View style={styles.frameSide} />
                    <View style={styles.frameSide} />
                </View>
                <View style={styles.frameBottom} ></View>
            </View>
        );
    }

    render() {
        return (
            <View
                style={{ flex: 1, backgroundColor: 'transparent' }}
                {...this.props}
            >
                {this.renderCamera()}
                {this.renderGap()}
                {this.renderBottomButtonsFrame()}
            </View>
        );
    }
}

let { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    renderGap: {
        flex: 10,
        flexDirection: 'column',
    },
    frameCenter: {
        position: 'absolute',
        left: width / 2 - 150,
        top: height / 2 - 210,
        width: 300,
        height: 400,
        backgroundColor: 'transparent',
        borderColor: 'blue',
        borderWidth: 2,
        zIndex: 10,
    },
    frameTop: {
        height: ((height-400) / 2)-10,
        backgroundColor: '#00000077',
    },
    containerSides: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    frameSide: {
        height: 400,
        width: (width - 300) / 2,
        backgroundColor: '#00000077',
    },
    frameBottom: {
        flex: 1,
        backgroundColor: '#00000077',
    },
});
