import { Container, Box, Text, Spinner, Stack, Button } from '@chakra-ui/react'

const AddressList = ({ addresses, isLoading, onShowPark }) => {
  if (isLoading) {
    return (
      <Container mt={5} centerContent>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Container>
    )
  }

  return (
    <Stack mt={5} gap={2} height={500} overflow={'scroll'}>
      {addresses?.map((address, idx) => {
        return (
          <AddressListItem
            key={`address-${idx}`}
            address={address}
            onShowPark={onShowPark}
            idx={idx}
          />
        )
      })}
    </Stack>
  )
}

export default AddressList

const AddressListItem = ({ address, onShowPark, idx }) => {
  const classType = [address?.class, address?.type].join(', ')

  return (
    <Box
      borderColor="gray.200"
      borderStyle="solid"
      borderWidth={1}
      borderRadius={8}
      p={3}
    >
      <Text fontWeight="bold">{address?.display_name}</Text>
      <Text color="gray.600">{classType}</Text>
      <Button
        size="sm"
        mt={3}
        onClick={() => {
          onShowPark(idx)
        }}
      >
        Show the park
      </Button>
    </Box>
  )
}
