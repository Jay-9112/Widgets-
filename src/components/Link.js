import React from 'react'

function List({href , className ,children}) {

  const handleClick = (event) => {

    if(event.metaKey || event.ctrlKey){
      return;
    }

    event.preventDefault();
    window.history.pushState({},'',href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }
  

  return (
    <div>
      <a onClick={handleClick} href={href} className={className}>{children}</a>
    </div>
  )
}

export default List
