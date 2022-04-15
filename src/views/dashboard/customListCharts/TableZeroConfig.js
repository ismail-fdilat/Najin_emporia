// ** Table Columns

import { useContext, useState, useEffect } from 'react'
import { data } from "../data.js"
// ** Third Party Components
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Card, CardHeader, CardTitle } from 'reactstrap'

const basicColumns = [
  {
    name: 'Domain',
    selector: 'isp_name',
    sortable: true,
    minWidth: '100px'
  },
  { 
    name: 'Size',
    selector: 'total',
    sortable: true,
    maxWidth: '100px'
  },
  {
    name: 'Active',
    selector: 'active',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Contact Unsubscribed',
    selector: 'unsubscribes',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Complaints',
    selector: 'complaints',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Bounced',
    selector: 'bounces',
    sortable: true,
    minWidth: '100px'
  }
]
const DataTablesBasic = ({ newdata }) => {
  useEffect(() => {
    console.log(newdata)
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Volumes per domain</CardTitle>
      </CardHeader>
      <DataTable
        noHeader
        pagination
        data={newdata ? newdata : []}
        columns={basicColumns}
        className='react-dataTable'
        sortIcon={<ChevronDown size={10} />}
        paginationRowsPerPageOptions={[10, 25, 50, 100]}
      />
    </Card>
  )
}

export default DataTablesBasic
