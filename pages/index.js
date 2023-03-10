import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import mock from './api/mock';
import { Container, Box, Heading, Text, Image } from '@chakra-ui/react'
import Link from 'next/link';
import BuyButton from '../components/buyButton';

export default function Home() {

  const data = mock();

  return (
    <>
      <Head>
        <title>Mono-producto</title>
        <meta name="description" content="Product page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container py={4}>
        <Box py={2}>
          <Heading>{data[0].name}</Heading>
          <Text fontSize='sm'>{data[0].details}</Text>
        </Box>
        <Box>
          <Text fontWeight={800}>${data[0].price}</Text>
        </Box>
        <Box py={2}>
          <Image src={data[0].thumbs.img1}/>
        </Box>
        <Box py={2}>
        <Link href={data[0].prospect}>
          <Text textDecoration={"underline"}>Ver prospecto</Text>
        </Link>
        </Box>
        <Box py={2}>
          <Text fontSize='xl' fontWeight={800}>Descripción</Text>
          <Text textAlign={"justify"}>{data[0].description}</Text>
        </Box>
      </Container>
      <BuyButton />
    </>
  )
}
