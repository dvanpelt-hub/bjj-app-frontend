import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import "./FeaturedCoachesCard.css"

const FeaturedCoachesCard = (props) => {
  return (
 <Card
    hoverable
    style={{ width: '100%', backgroundColor: props.color, border: 'none', color: 'white' }}
    cover={<img alt="example" src={props.image} />}
  >
    <Meta title={props.coach} />
  </Card>
  )
}
 
export default FeaturedCoachesCard;