import React from "react";
export default function useLocalStorageState(key, defaultValue=''){
    const [state, setState] = React.useState(
      () => parseInt(window.localStorage.getItem(key)) || defaultValue,
       );
     React.useEffect(() => {
       window.localStorage.setItem(key, state), [state]
     })
     return [state, setState]
  
  }