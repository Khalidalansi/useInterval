
import * as React from 'react'

/* istanbul ignore next */
/** keep typescript happy */
const noop = () => { };


export default function useInterval(
    callback: () => void,
    delay: number | null | false,
    immediate?: boolean
) {
    const intervalId = React.useRef(null);
    const savedCallback = React.useRef(noop);
    // Remember the latest callback.
    React.useEffect(() => {
        savedCallback.current = callback;
    });
    // Execute callback if immediate is set.
    React.useEffect(() => {
        if (!immediate || delay === null || delay === false) return;
        savedCallback.current();
    }, [immediate]);

    // Set up the interval.
    React.useEffect(() => {
        if (delay === null || delay === false) return;
        const tick = () => savedCallback.current();
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
    return intervalId.current;
}

