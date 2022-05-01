import React, { useContext, useState, useEffect } from 'react'
import { Row, Col, Progress, Card } from 'reactstrap'
import StatsCard from '../customListCharts/StatsCard'
import ApexDonutChart from '../customListCharts/ApexDonutChart'
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import ProgressBar from '../customListCharts/ProgressBar'
import ApexScatterChart from '../customListCharts/ApexScatterCharts'
import ApexLineChart from "../customListCharts/ApexLineChart"
// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'
import axios from 'axios'
import headers from "./headers.json"

const config = {
  method: 'get',
  url: `${process.env.REACT_APP_APIURL}/domain_volumes`,
  headers
}

class ListDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: null,
      queryData: null,
      allqueryData: null
    }
  }

  async componentDidMount() {


  }

  render() {

    return (
      <div id='dashboard-list' className="pt-5 ">
        <Row className='match-height' >
          <Col lg='7' md='7' xs='12'>
            <ApexLineChart direction='ltr' warning="#ff9d00" />
            <ApexScatterChart
              direction='ltr'
              primary="#6f61ee"
              success="#61ed7f"
              warning="#ff9d00"
            />
          </Col>
          <Col lg='5' md='5' xs='12' id="progress-bar" className="pr-5">

            <h4>Remaining Emission Limit in the Cycle</h4>
            <ProgressBar bgcolor="#61ed7f" progress='70' height={30} />

            <div style={{ textAlign: 'right', paddingRight: 20 }}>
              <small className='text-muted ' >90 days remaining</small></div>

            <ApexDonutChart />

            <ApexDonutChart />

          </Col>
        </Row>

        <Row className='match-height'>

          <Col lg='6' md='6' xs='12'>
            {/* <ApexDonutChart data={this.state.listData} /> */}
          </Col>
        </Row>

      </div>
    )
  }
}


export default ListDashboard
