import { useRef } from 'react'

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
} from '@chakra-ui/react'

import { useForm, Form } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

import AddressList from 'src/components/AddressList/AddressList'
import MapView from 'src/components/MapView/MapView'
import { useSearchParks } from 'src/side-effects/parks'

const HomePage = () => {
  const markerRef = useRef([])

  const { register, handleSubmit, reset } = useForm()

  const { searchParks, loading: parksLoading, addresses } = useSearchParks()

  const onFormSubmit = (data) => {
    searchParks({ variables: { address: data?.address } })
    reset()
  }

  const onShowPark = (idx) => {
    const marker = markerRef.current[idx]
    if (marker) {
      marker.openPopup()
    }
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        gap={2}
      >
        <GridItem p={4}>
          <Heading as="h2" size="lg">
            Local Parks Finder
          </Heading>
          <Box mt={5}>
            <Form onSubmit={handleSubmit(onFormSubmit)}>
              <FormControl>
                <FormLabel>Input your address</FormLabel>
                <Input type="text" {...register('address')} />
              </FormControl>
              <Button type="submit" colorScheme="blue" mt={2}>
                Search
              </Button>
            </Form>
          </Box>
          <AddressList
            isLoading={parksLoading}
            addresses={addresses}
            onShowPark={onShowPark}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <MapView parks={addresses} markerRef={markerRef} />
        </GridItem>
      </Grid>
    </>
  )
}

export default HomePage
