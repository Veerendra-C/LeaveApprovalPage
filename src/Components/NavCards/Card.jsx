import React from 'react'
import './Card.css'
export default function Card({label,icon,onClick,toggle}) {
  return (
    <button className={toggle ? 'card center':'card'} onClick={onClick}>
        <div className='icon'>{icon}</div>
        <p>{toggle || label}</p>
    </button>
  );
}
