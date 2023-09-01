import React from 'react';
import { useAppSelector } from '../redux/store';
import Authorization from './Authorization';
import Registration from './Registration';

const Popup = () => {

  const {popupOpened, popupType} = useAppSelector(state => state.headerSlice)

  return (
    <div className={popupOpened? "popup-wrapper popup-wrapper_opened": "popup-wrapper"}>
      {
        !popupType? 
          <Authorization />:
          <Registration />
      }
    </div>
  )
}

export default Popup