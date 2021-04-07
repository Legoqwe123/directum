import { Flex } from "rebass"
import { ThreeDots } from "@agney/react-loading"

export const WithLoading = ({ component, loading, boxProps }) => {
  const Component = component

  return loading ? (
    <Flex {...boxProps}>
      <ThreeDots width="50" />
    </Flex>
  ) : (
    <Component />
  )
}
