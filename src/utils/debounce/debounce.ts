
export const debounce = (func: Function, time: number = 0): Function => {

  let timeoutId: NodeJS.Timeout;

  
  return (...args: Array<any>) => {

    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      func(...args);
    }, time)
  };
}