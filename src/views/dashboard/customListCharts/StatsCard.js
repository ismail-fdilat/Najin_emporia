import classnames from 'classnames'
import Avatar from '@components/avatar'
import { TrendingUp, User, Box, DollarSign, UserX, ThumbsDown, List, TrendingDown } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media } from 'reactstrap'
import { useContext, useState, useEffect } from 'react'

const StatsCard = ({ cols, newdata }) => {

  useEffect(() => { console.log(newdata) })
  const renderData = () => {
    const total = newdata ? newdata.map((x) => parseInt(x.total)) : 0
    const active = newdata ? newdata.map((x) => parseInt(x.active)) : 0
    const complaints = newdata ? newdata.map((x) => parseInt(x.complaints)) : 0
    const unsubscribed = newdata ? newdata.map((x) => parseInt(x.unsubscribes)) : 0
    const bounced = newdata ? newdata.map((x) => parseInt(x.bounces)) : 0

    const data = [
      {
        title: total ? total.reduce((a, b) => a + b, 0) : 0,
        subtitle: 'Current List Size',
        color: 'light-primary',
        icon: <List size={24} />
      },
      {
        title: active ? active.reduce((a, b) => a + b, 0) : 0,
        subtitle: 'Active Contacts',
        color: 'light-success',
        icon: <User size={24} />
      },
      {
        title: unsubscribed ? unsubscribed.reduce((a, b) => a + b, 0) : 0,
        subtitle: 'Unsubscribed',
        color: 'light-info',
        icon: <UserX size={24} />
      },
      {
        title: complaints ? complaints.reduce((a, b) => a + b, 0) : 0,
        subtitle: 'Complained',
        color: 'light-danger',
        icon: <ThumbsDown size={24} />
      },
      {
        title: bounced ? bounced.reduce((a, b) => a + b, 0) : 0,
        subtitle: 'Hard Bounced',
        color: 'light-success',
        icon: <TrendingDown size={24} />
      }
    ]

    return data.map((item, index) => {
      const margin = Object.keys(cols)
      return (
        <Col className="mb-2"
        >
          <Media>
            <Avatar color={item.color} icon={item.icon} className='mr-2' />
            <Media className='my-auto' body>
              <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
              <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
            </Media>
          </Media>
        </Col>
      )
    })
  }

  return (
    <Card className='card-statistics'>
      <CardHeader>
        <CardTitle tag='h4'>Statistics</CardTitle>
        <CardText className='card-text font-small-2 mr-25 mb-0'>Total Statistics</CardText>
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default StatsCard
