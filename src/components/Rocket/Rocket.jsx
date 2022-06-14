import { useState, useEffect } from "react";
import activeIcon from '../../assets/rocketActive.svg';
import destroyedIcon from '../../assets/rocketDeactivate.svg';
import unknownIcon from '../../assets/rocketUnknown.svg';
import styles from './rocket.module.css';

export default function Rocket({ serial, details, status }) {
  const [pic, setPic] = useState();

  useEffect(() => {
    if (status === 'active') {
      setPic(activeIcon);
    } else if (status === 'retired' || status === 'destroyed') {
      setPic(destroyedIcon);
    } else {
      setPic(unknownIcon);
    }
  }, [status])

  return (
    <article>
      <span>
        <h3>{serial}</h3>
        <img src={pic} alt='rocket status icon' className={styles.cardIcon}></img>
      </span>
      <p>{details}</p>
    </article>
  )
}
