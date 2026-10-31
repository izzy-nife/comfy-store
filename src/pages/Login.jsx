import React from 'react'
import { FormInput, SubmitBtn } from '../components'
import { Form, Link, redirect, useNavigate, useNavigation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { customFetch } from '../utils'
import { toast } from 'react-toastify'
import { loginUser } from '../Features/User/UserSlice'

export const action = (store) =>async ({request}) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  try {
    const response = await customFetch.post('/auth/local', data)
store.dispatch(loginUser(response.data)) 
    toast.success('Login successful')
    return redirect('/')
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      ('please double check your credentials' && console.log(error))
    toast.error(errorMessage)
  }
  return null
}


const Login = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
const isSubmitting = navigation.state === 'submitting'
  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret'
      })
      dispatch(loginUser(response.data))
      toast.success('welcome guest user')
      navigate('/')
    } catch (error) {
      console.log(error);
      toast.error('guest user login error.please try again')
     }
  }
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="Email"
          name="identifier"

        />
        <FormInput
          type="password"
          label="password"
          name="password"

        />
        <div className="my-4">
          <SubmitBtn text="login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block" 
        disabled={isSubmitting}
        onClick={loginAsGuestUser}>
          Guest user
        </button>
        <p className='text-center'>
          Not a member yet ?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
           
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Login