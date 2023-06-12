/* eslint-disable react/button-has-type */
// Write your code here
import './index.css'

const DenominationItem = props => {
  const {cash, onDecrease} = props
  const {value} = cash
  const onChange = () => {
    onDecrease(value)
  }

  return (
    <li className="li">
      <button className="cash" onClick={onChange}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
