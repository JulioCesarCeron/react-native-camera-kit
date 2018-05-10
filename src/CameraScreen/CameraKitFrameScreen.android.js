import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import CameraScreenBase from './CameraKitCameraScreenBase';

export default class CameraFrameScreen extends CameraScreenBase {
	constructor(props) {
        super(props);
	}

	renderGap() {
        const frameWidth = this.props.frameWidth ? this.props.frameWidth : 300;
        const frameHeight = this.props.frameHeight ? this.props.frameHeight : 400;
        const halfFrameWidth = frameWidth / 2;
        const halfFrameHeight = frameHeight / 2;
        const offsetHeight = this.props.offsetHeight ? this.props.offsetHeight : 0;

        let { width, height } = Dimensions.get('window');

		return (
			<View style={styles.renderGap}>
				<View style={[ styles.frameTop, { height: ((height - frameHeight) / 2) - offsetHeight } ]} />
				<View
					style={[
						styles.frameCenter,
						{
							left: width / 2 - halfFrameWidth,
							top: height / 2 - (halfFrameHeight + offsetHeight),
							width: frameWidth,
							height: frameHeight
						}
					]}
				/>
				<View style={styles.containerSides}>
					<View
						style={[
							styles.frameSide,
							{
								height: frameHeight,
								width: (width - frameWidth) / 2
							}
						]}
					/>
					<View
						style={[
							styles.frameSide,
							{
								height: frameHeight,
								width: (width - frameWidth) / 2
							}
						]}
					/>
				</View>
				<View style={styles.frameBottom} />
			</View>
		);
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'transparent' }} {...this.props}>
				{this.renderCamera()}
				{this.renderGap()}
				{this.renderBottomButtonsFrame()}
			</View>
		);
	}
}



const styles = StyleSheet.create({
	renderGap: {
		flex: 10,
		flexDirection: 'column'
	},
	frameCenter: {
		position: 'absolute',

		backgroundColor: 'transparent',
		borderColor: 'blue',
		borderWidth: 2,
		zIndex: 10
	},
	frameTop: {
		backgroundColor: '#00000077'
	},
	containerSides: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	frameSide: {
		backgroundColor: '#00000077'
	},
	frameBottom: {
		flex: 1,
		backgroundColor: '#00000077'
	}
});
