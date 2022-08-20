import { useWindowDimensions } from 'react-native';
import isNil from 'lodash.isnil';

type Query = {
    maxWidth?: number;
    minWidth?: number;
    maxHeight?: number;
    minHeight?: number;
    orientation?: 'portrait' | 'landscape';
};

export function useMediaQuery(query: Query) {
    const dims = useWindowDimensions();
    const height = dims?.height;
    const width = dims?.width;

    return queryResolver(query, width, height);
}

function queryResolver(query: any, width?: number, height?: number) {
    for (const queryKey in query) {
        if (!calculateQuery(queryKey, query[queryKey], height, width)) {
            return false;
        }
    }
    return true;
}

function calculateQuery(key: string, val?: number | string, height?: number, width?: number) {
    let retval;
    if (isNil(width) || isNil(height) || isNil(val)) {
        return;
    }
    switch (key) {
        case 'maxWidth':
            retval = !isNil(val) ? width <= val : undefined;
            break;
        case 'minWidth':
            retval = !isNil(val) ? width >= val : undefined;
            break;
        case 'maxHeight':
            retval = !isNil(val) ? height <= val : undefined;
            break;
        case 'minHeight':
            retval = !isNil(val) ? height >= val : undefined;
            break;
        case 'orientation':
            if (!isNil(val)) {
                if (width > height) {
                    retval = val === 'landscape';
                } else {
                    retval = val === 'portrait';
                }
            }
            break;
        default:
            break;
    }
    return retval;
}
