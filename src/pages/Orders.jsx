
import { redirect, useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'
import { customFetch } from '../utils'

import { ComplexPagination, OrderList, SectionTitle } from '../components'
import { store } from '../store'

export const loader =() => async ({request}) => {
  const user = store.getState().userState.user

  if (!user ) {
    toast.warn('You must logged in to view orders')
    redirect('/login')
  }
  const params = Object.fromEntries(
    [...new URL(request.url).searchParams.entries()]
  )
try {
  const response = await customFetch('/orders', {
    params,headers:{
      Authorization: `Bearer ${user.token}`
    }
  })
  console.log(response);
  
return {orders:response.data.data, meta: response.data.meta}
} catch (error) {
console.log(error);
const errorMessage = error?.response?.data?.error?.message || 'there was an error placing your order' ;
toast.error(errorMessage)
  if (error.response.status === 401 || 403) {
    return null
  }
}
  return null
}


const Orders = () => {
  const {meta,orders} = useLoaderData()
  console.log(meta);
  
  
  if (meta.pagination?.total < 1) {
    return <SectionTitle text='please make an order'/>
  } 
  return (
   <>
   <SectionTitle text='Your orders'/>
   <OrderList />
   <ComplexPagination/>
 
   </>
  )
}

export default Orders