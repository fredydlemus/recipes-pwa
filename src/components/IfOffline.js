import React from 'react'

export const IfOffline = ({children}) => {

    console.log(navigator);
    const [onLine, setOnLine] = React.useState(navigator ? navigator.onLine : true);

    const goOnline = () => setOnLine(true);
    

    const goOffline = () => setOnLine(false);
    

    React.useEffect(() =>{
        if(!window) return;
        window.addEventListener('online', goOnline);
        window.addEventListener('offline', goOffline);
        return () => {
            window.removeEventListener('online', goOnline);
            window.removeEventListener('offline', goOffline);
        }
    }, []);

  return (
    <>
    {onLine ? null: (
        <span>{children}</span>
    )}
    </>
  )
}
