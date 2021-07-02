import OpenUpApi from './openUpApi';
import { useState } from 'react';

const ApiEntry = (props) => {
  const [openUp, setOpenUp] = useState(false);
  const handleApiEntryClick = () => {
    setOpenUp((prevOpenUp) => {
      return !prevOpenUp;
    })
  }
  const doNothing = () => {
    // do nothing to close popup on close click only
  }
  return (
    <div className="apiEntry" onClick={!openUp ? handleApiEntryClick : doNothing}>
      <h1>{props.data.name}</h1>
      {openUp && <OpenUpApi data={props.data} onOpenUpCloseClick={handleApiEntryClick}/>}
    </div>
  )
}
export default ApiEntry;