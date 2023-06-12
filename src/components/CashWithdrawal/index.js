/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
// Write your code here
import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {Balance: 2000}

  onDecrease = value => {
    const {Balance} = this.state
    this.setState(prevStatus => ({
      Balance: prevStatus.Balance - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {Balance} = this.state
    return (
      <div className="bg-container">
        <div className="Account-profile-container">
          <div className="profile-name-container">
            <p className="logo">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance-title">Your Balance</p>
            <p className="Balance">{Balance}</p>
          </div>
          <div className="Rupees"> In Rupees</div>
          <div className="with-draw-container">
            <p className="withdraw-title">Withdraw</p>
            <p className="description">CHOOSE SUM (IN RUPEES)</p>
            <ul>
              <div className="cash-container">
                {denominationsList.map(each => (
                  <DenominationItem
                    cash={each}
                    key={each.id}
                    onDecrease={this.onDecrease}
                  />
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
