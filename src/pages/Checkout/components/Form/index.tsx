import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import * as S from './styles'
import { useContext, useEffect } from 'react'
import { CheckoutBox } from '../CheckoutBox'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { CartContext } from '../../../../contexts/CartContext'

const addressFormValidationSchema = zod.object({
  cepfield: zod
    .string()
    .nonempty('Campo obrigatório')
    .min(8, 'O CEP deve conter 8 números')
    .max(8, 'O CEP deve conter 8 números'),
  streetfield: zod
    .string()
    .nonempty('Campo obrigatório')
    .min(1, 'Digite um endereço válido'),
  numberfield: zod.string().nonempty('Campo obrigatório'),
  complementfield: zod.string(),
  neighborhoodfield: zod
    .string()
    .nonempty('Campo obrigatório')
    .min(1, 'Digite um Bairro válido'),
  cityfield: zod
    .string()
    .nonempty('Campo obrigatório')
    .min(1, 'Digite uma Cidade válido'),
  statefield: zod
    .string()
    .nonempty('Campo obrigatório')
    .min(1, 'Digite um Estado válido')
    .toUpperCase(),
  paymentMethod: zod.string({
    invalid_type_error: 'Selecione uma forma de pagamento',
  }),
})

type AddressFormData = zod.infer<typeof addressFormValidationSchema>

export function Form() {
  const { setDisableConfirmButton } = useContext(CartContext)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
  })

  function onSubmit(data: any) {
    console.log('onSubmit', data)
  }

  useEffect(() => {
    setDisableConfirmButton(!isValid)
  }, [isValid, setDisableConfirmButton])

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <CheckoutBox
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber o seu pedido."
        icon={<MapPinLine size={22} />}
        iconColor="primaryDark"
      >
        <S.AddressWrapper>
          <S.InputGroup className="cepfield">
            <S.CepField
              className={errors.cepfield && 'hasError'}
              type="text"
              placeholder="CEP"
              {...register('cepfield')}
            />
            <ErrorMessage errors={errors} name="cepfield" as="p" />
          </S.InputGroup>
          <S.InputGroup className="streetfield">
            <S.StreetField
              className={errors.streetfield && 'hasError'}
              type="text"
              placeholder="Rua"
              {...register('streetfield')}
            />
            <ErrorMessage errors={errors} name="streetfield" as="p" />
          </S.InputGroup>
          <S.InputGroup className="numberfield">
            <S.NumberField
              className={errors.numberfield && 'hasError'}
              type="text"
              placeholder="Número"
              {...register('numberfield')}
            />
            <ErrorMessage errors={errors} name="numberfield" as="p" />
          </S.InputGroup>
          <S.InputGroup className="complementfield">
            <S.ComplementField
              className={errors.complementfield && 'hasError'}
              type="text"
              placeholder="Complemento"
              {...register('complementfield')}
            />
            <span className="opt">Opcional</span>
            <ErrorMessage errors={errors} name="complementfield" as="p" />
          </S.InputGroup>
          <S.InputGroup className="neighborhoodfield">
            <S.NeighborhoodField
              className={errors.neighborhoodfield && 'hasError'}
              type="text"
              placeholder="Bairro"
              {...register('neighborhoodfield')}
            />
            <ErrorMessage errors={errors} name="neighborhoodfield" as="p" />
          </S.InputGroup>
          <S.InputGroup className="cityfield">
            <S.CityField
              className={errors.cityfield && 'hasError'}
              type="text"
              placeholder="Cidade"
              {...register('cityfield')}
            />
            <ErrorMessage errors={errors} name="cityfield" as="p" />
          </S.InputGroup>
          <S.InputGroup className="statefield">
            <S.StateField
              className={errors.statefield && 'hasError'}
              type="text"
              placeholder="UF"
              {...register('statefield')}
            />
            <ErrorMessage errors={errors} name="statefield" as="p" />
          </S.InputGroup>
        </S.AddressWrapper>
      </CheckoutBox>
      <CheckoutBox
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja
            pagar."
        icon={<CurrencyDollar size={22} />}
        iconColor="secondaryDark"
      >
        <S.PaymentMethodWrapper>
          <S.Label
            className={watch('paymentMethod') === 'credit' ? 'active' : ''}
          >
            <S.Radio
              {...register('paymentMethod')}
              type="radio"
              name="paymentMethod"
              value="credit"
            />
            <CreditCard size={20} /> Cartão de crédito
          </S.Label>
          <S.Label
            className={watch('paymentMethod') === 'debit' ? 'active' : ''}
          >
            <S.Radio
              {...register('paymentMethod')}
              type="radio"
              name="paymentMethod"
              value="debit"
            />
            <Bank size={20} /> Cartão de débito
          </S.Label>
          <S.Label
            className={watch('paymentMethod') === 'money' ? 'active' : ''}
          >
            <S.Radio
              {...register('paymentMethod')}
              type="radio"
              name="paymentMethod"
              value="money"
            />
            <Money size={20} /> Dinheiro
          </S.Label>
        </S.PaymentMethodWrapper>
        <ErrorMessage errors={errors} name="paymentMethod" as="p" />
      </CheckoutBox>
    </S.Wrapper>
  )
}
