import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../../context/Cart_context'
import { Link } from 'react-router-dom'
// import { CartContent, PageHero } from '../components'
import PageHero from '../../components/PageHero/PageHero'
import CartContent from '../../components/CartContent/CartContent'

const CartPage = () => {

    const {cart } = useCartContext()
    if(cart.length < 1){
        return <Wrapper className='page-100'>
            <h2>Your cart is empty</h2>
            <Link to="/products" className='btn'>
                fill it
            </Link>
        </Wrapper>
    }

  return <main>
    <PageHero title='cart'/>
    <Wrapper className='page'>
        <CartContent/>
    </Wrapper>
  </main>
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage