import React from 'react'
import './DashBoard.css'
import Table from '../../TableHistory/Table'

export default function Dashboard() {
  return (
    <div className='Dashboard'>
      <div className='Left'>
          <Table/>
      </div>
    </div>
  )
}
