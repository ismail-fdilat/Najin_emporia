import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const areaColors = {
  series5: '#0a7505',
  series4: '#0f9404',
  series3: '#5cdc3c',
  series2: '#5cdc3c',
  series1: '#b0e86e'
}
const date = "2022-13".split('-')
console.log(date[0])
const ApexAreaCharts = ({ direction, data, allData }) => {
  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: false,
      curve: 'straight'
    },
    legend: {
      position: 'top',
      horizontalAlign: 'start'
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    colors: [areaColors.series5, areaColors.series4, areaColors.series3, areaColors.series2, areaColors.series1],

    xaxis: {
      categories: data ? data.map((x) => { const tmp = x.week.split('-'); return `${tmp[1]} / ${tmp[0]}` }) : []
    },
    fill: {
      opacity: 1,
      type: 'solid'
    },
    tooltip: {
      shared: false
    },
    yaxis: {
      opposite: direction === 'rtl'
    }
  }
  const series = [

    {
      name: 'All',
      data: data ? data.map((x) => x.total) : []
    },
    {
      name: 'Active',
      data: data ? data.map((x) => x.total) : []
    },
    {
      name: 'Complaints',
      data: data ? data.map((x) => x.total) : []
    },
    {
      name: 'Unsubscribed',
      data: data ? data.map((x) => x.total) : []
    },
    {
      name: 'Hard Bounce',
      data: data ? data.map((x) => x.total) : []
    }
  ]

  return (
    <Card>
      <CardHeader className='d-flex flex-md-row flex-column justify-content-md-between justify-content-start align-items-md-center align-items-start'>
        <div>
          <CardTitle className='mb-75' tag='h4'>
            Active Contacts
          </CardTitle>
          <CardSubtitle className='text-muted'>Growth</CardSubtitle>
        </div>

      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='area' height={400} />
      </CardBody>
    </Card>
  )
}
export default ApexAreaCharts
