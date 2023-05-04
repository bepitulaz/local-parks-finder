import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
} from '@chakra-ui/react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { useForm, Form } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const { register, handleSubmit, reset } = useForm()

  const onFormSubmit = (data) => {
    console.log(data)
    reset()
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
        </GridItem>
        <GridItem colSpan={2}>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </GridItem>
      </Grid>
    </>
  )
}

export default HomePage
