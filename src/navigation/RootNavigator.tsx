import * as React from 'react';

export const navigationRef = React.createRef<any>();

export function navigate(name: string, extra?: any) {
    navigationRef.current?.navigate(name, extra);
}
