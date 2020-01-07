import React from 'react'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { getTodoAction, testAction } from '../reducers/test'

const Home = () => {
  const test = useSelector((state: any) => state.test)
  const dispatch = useDispatch()

  const waitForAction = async () => {
    await dispatch(testAction())
    alert("dispatch done!")
  }
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <pre>
          {JSON.stringify(test, null, 2)}
        </pre>
      </div>
      <button onClick={() => dispatch(getTodoAction())}>
        get mock todos action
      </button>
      <button onClick={waitForAction}>
        get test action
      </button>
    </div>
  )
}

export default Home
