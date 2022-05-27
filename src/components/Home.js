import { useNavigate } from 'react-router-dom'
import {MessageListStore} from './Messages'
export const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      {/* <div>Home Page</div> */}
      <MessageListStore/>
      {/* <button onClick={() => navigate('order-summary')}>Place order</button> */}
    </>
  )
}
