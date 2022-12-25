'use client'

import { useEffect } from 'react'

type ErrorPage = {
  error: Error;
  reset: () => void;
}

export default function Error ({ error, reset }: ErrorPage) {
  useEffect(() => console.error(error), [error])

  return (
    <>
      Cause: {error.cause}
      Message {error.message}
      Name: {error.name}
      Stack: {error.stack}
      <button onClick={reset}>reset</button>
    </>
  )
}
