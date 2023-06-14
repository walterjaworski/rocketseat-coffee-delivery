import { useState } from 'react'
import * as S from './styles'
import { Bank, CreditCard, Money } from 'phosphor-react'

export function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState('')

  const handlePaymentChange = (event: any) => {
    setPaymentMethod(event.target.value)
  }

  console.log('PaymentMethod', paymentMethod)

  return (
    <S.Wrapper>
      <S.Label className={paymentMethod === 'credit' ? 'active' : ''}>
        <S.Input
          type="radio"
          name="paymentmethod"
          value="credit"
          checked={paymentMethod === 'credit'}
          onChange={handlePaymentChange}
        />
        <CreditCard size={16} /> Cartão de crédito
      </S.Label>
      <S.Label className={paymentMethod === 'debit' ? 'active' : ''}>
        <S.Input
          type="radio"
          name="paymentmethod"
          value="debit"
          checked={paymentMethod === 'debit'}
          onChange={handlePaymentChange}
        />
        <Bank size={16} /> Cartão de débito
      </S.Label>
      <S.Label className={paymentMethod === 'money' ? 'active' : ''}>
        <S.Input
          type="radio"
          name="paymentmethod"
          value="money"
          checked={paymentMethod === 'money'}
          onChange={handlePaymentChange}
        />
        <Money size={16} /> Dinheiro
      </S.Label>
    </S.Wrapper>
  )
}