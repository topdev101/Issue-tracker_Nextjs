import { Skeleton } from '@/app/components'
import {Box} from '@radix-ui/themes'

const LoadingNewIssuePage = () => {
  return (
    <Box className='max-2-x1'>
      <Skeleton />
      <Skeleton height="20rem" />
    </Box>
  )
}

export default LoadingNewIssuePage