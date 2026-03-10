import {Button} from 'antd'
import { useSelector } from "react-redux";

const SeeCoachesButton = () => {
  const { access_token } = useSelector((state) => state.auth);
  return (access_token ? 
    <div>
      <Button style={{backgroundColor: '#000000', fontFamily: 'roboto', fontSize: '16px', fontWeight: 'bold', color: 'white', border: 'none'}}>View coaches</Button>
    </div> : null
  )
}

export default SeeCoachesButton