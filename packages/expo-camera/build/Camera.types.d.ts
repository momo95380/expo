import { ViewProps } from 'react-native';
import { PermissionResponse, PermissionStatus, PermissionExpiration } from 'unimodules-permissions-interface';
export declare type CameraPictureOptions = {
    quality?: number;
    base64?: boolean;
    exif?: boolean;
    skipProcessing?: boolean;
    onPictureSaved?: Function;
    id?: number;
    fastMode?: boolean;
};
export declare type CameraRecordingOptions = {
    maxDuration?: number;
    maxFileSize?: number;
    quality?: number | string;
    mute?: boolean;
    mirror?: boolean;
};
export declare type CameraCapturedPicture = {
    width: number;
    height: number;
    uri: string;
    base64?: string;
    exif?: any;
};
export declare type CameraMountError = {
    message: string;
};
export declare type BarCodeScanningResult = {
    type: string;
    data: string;
};
export declare type FaceDetectionResult = {
    faces: any[];
};
export declare type CameraProps = ViewProps & {
    zoom?: number;
    ratio?: string;
    focusDepth?: number;
    type?: number | string;
    onCameraReady?: Function;
    useCamera2Api?: boolean;
    flashMode?: number | string;
    whiteBalance?: number | string;
    autoFocus?: string | boolean | number;
    pictureSize?: string;
    videoStabilizationMode?: number;
    onMountError?: (event: CameraMountError) => void;
    barCodeScannerSettings?: object;
    onBarCodeScanned?: (scanningResult: BarCodeScanningResult) => void;
    faceDetectorSettings?: object;
    onFacesDetected?: (faces: FaceDetectionResult) => void;
};
export declare type CameraNativeProps = {
    pointerEvents?: any;
    style?: any;
    ref?: Function;
    onCameraReady?: () => void;
    onMountError?: (event: {
        nativeEvent: CameraMountError;
    }) => void;
    onBarCodeScanned?: (event: {
        nativeEvent: BarCodeScanningResult;
    }) => void;
    onFacesDetected?: (event: {
        nativeEvent: FaceDetectionResult;
    }) => void;
    onFaceDetectionError?: (event: {
        nativeEvent: Error;
    }) => void;
    onPictureSaved?: (event: {
        nativeEvent: {
            data: CameraCapturedPicture;
            id: number;
        };
    }) => void;
    type?: number | string;
    flashMode?: number | string;
    autoFocus?: string | boolean | number;
    focusDepth?: number;
    zoom?: number;
    whiteBalance?: number | string;
    pictureSize?: string;
    barCodeScannerSettings?: object;
    barCodeScannerEnabled?: boolean;
    faceDetectorEnabled?: boolean;
    faceDetectorSettings?: object;
    ratio?: string;
    useCamera2Api?: boolean;
};
export { PermissionResponse, PermissionStatus, PermissionExpiration };
