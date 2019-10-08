function useResize() {
  const [size, setSize] = useState([0, 0]);
  const [isResized, setIsResized] = useState(false);

  const throttledResize = useCallback(
    throttle(() => { // You can use any throttle implementation you like
      updateSize();
    }, 200),
  );

  const updateSize = () => {
    setSize([window.innerWidth, window.innerHeight]);
    setIsResized(true);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', throttledResize);
    updateSize();
    return () => window.removeEventListener('resize', throttledResize);
  }, []);

  return ([size, isResized, setIsResized]);
}

export default useResize;
