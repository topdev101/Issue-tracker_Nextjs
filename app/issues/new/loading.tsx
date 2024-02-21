import {Box} from '@radix-ui/themes'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingNewIssuePage = () => {
  return (
    <Box className='max-2-x1'>
      <Skeleton />
      <Skeleton height="20rem" />
    </Box>
  )
}

export default LoadingNewIssuePage