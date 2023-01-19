
import * as React from 'react'
/**
 * 
 * @param callback 
 * @param delay 
 */
const useInterval = (callback, delay) => {
    const intervalId = React.useRef(null);
    const savedCallback = React.useRef(callback);
    React.useEffect(() => {
        savedCallback.current = callback;
    });
    React.useEffect(() => {
        const tick = () => savedCallback.current();
        if (typeof delay === 'number') {
            intervalId.current = setInterval(tick, delay);
            return () => clearInterval(intervalId.current);
        }
    }, [delay]);
    return intervalId.current;
}

export default useInterval;
export { useInterval };