import Header from '../../components/Header'
import Summary from '../../components/Summary'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export default function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width={'50%'}>website development</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000</PriceHighlight>
              </td>

              <td>Sell</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td width={'50%'}>website development</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000</PriceHighlight>
              </td>

              <td>Sell</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td width={'50%'}>Hamburger</td>
              <td>
                <PriceHighlight variant="expense">- R$ 12.000</PriceHighlight>
              </td>
              <td>food</td>
              <td>10/04/2023</td>
            </tr>
            <tr>
              <td width={'50%'}>website development</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000</PriceHighlight>
              </td>

              <td>Sell</td>
              <td>13/04/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
