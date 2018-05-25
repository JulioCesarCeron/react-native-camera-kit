import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import CameraScreenBase from './CameraKitCameraScreenBase';

export default class CameraFrameScreen extends CameraScreenBase {
	constructor(props) {
		super(props);
	}

	renderGap() {
        let { width, height } = Dimensions.get('window');

        const frameWidth = Number((width * ((this.props.frameWidth ? this.props.frameWidth : 56.73) / 100)).toFixed(0))
        const frameHeight = Number((height * ((this.props.frameHeight ? this.props.frameHeight : 70.92) / 100)).toFixed(0))
		const halfFrameWidth = frameWidth / 2;
        const halfFrameHeight = frameHeight / 2;
        const offsetHeight = Number((height * ((this.props.offsetHeight ? this.props.offsetHeight : 5.67) / 100)).toFixed(0));
        
		return (
			<View style={styles.renderGap}>
				<View style={[ styles.frameTop, { height: (height - frameHeight) / 2 - offsetHeight } ]} />
				<View
					style={[
						styles.frameCenter,
						{
							left: width / 2 - halfFrameWidth,
							top: height / 2 - (halfFrameHeight + offsetHeight),
							width: frameWidth,
							height: frameHeight,
							borderColor: this.props.frameBorderColor ? this.props.frameBorderColor : 'blue',
							borderWidth: this.props.frameBorderWidth ? this.props.frameBorderWidth : 2
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
