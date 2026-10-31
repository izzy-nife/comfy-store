import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'




import { About,Register,Cart,Checkout,Error,HomeLayout,Landing,Login,Orders,Products,SingleProduct } from './pages'
import { ErrorElement } from './components'
import { loader as landingLoader  } from './pages/Landing'
import { loader as checkoutLoader } from './pages/Checkout'

import { loader as singleProductLoader } from './pages/SingleProduct'
import { loader as ProductLoader } from './pages/Products'
import { loader as orderLoader } from './pages/Orders'

//  ACTIONS 
import { action as registerAction} from './pages/Register'
import { action as loginAction} from './pages/Login'
import { action as checkoutAction} from './components/CheckoutForm'

import { store } from './store'



   const router = createBrowserRouter([
     {
       path: '/',
       element: <HomeLayout />,
       errorElement: <Error />,
       children: [
         {
           index: true,
           element: <Landing />,
           errorElement: <ErrorElement />,
           loader: landingLoader,
         },
         {
           path: 'products',
           element: <Products />,
           loader: ProductLoader,
           errorElement: <ErrorElement />,
         },
         {
           path: 'product/:id',
           element: <SingleProduct />,
           errorElement: <ErrorElement />,
           loader: singleProductLoader,
         },
         {
           path: 'cart',
           element: <Cart />,
         },
         {
           path: 'about',
           element: <About />,
         },
         {
           path: 'checkout',
           element: <Checkout />,
           loader: checkoutLoader,
           action: checkoutAction,
         },
         {
           path: 'orders',
           element: <Orders />,
           loader: orderLoader,
         },
       ],
     },
     {
       path: '/login',
       element: <Login />,
       errorElement: <Error />,
       action: loginAction(store),
     },
     {
       path: '/register',
       element: <Register />,
       errorElement: <Error />,
       action: registerAction,
     },
   ])
const App = () => {
  return (
  
      <RouterProvider router={router} />


  )
}

export default App