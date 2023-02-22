import mock from '../api/mock'
import Header from '../../components/header'
import styles from '../../styles/Checkout.module.css'
import { Container, Flex, Box, Heading, Text, Image } from "@chakra-ui/react"
import PaymentMethod from '../../components/paymentMethod'

export default function checkout() {

    const data = mock();
    
    return (
        <>
            <Header />
            <Container py={2}>
                <Box py={2}>
                    <Heading>Tu carrito</Heading>
                    <Text>TOTAL: <span className={styles.price}>${data[0].price}</span></Text>
                </Box>
                <Box py={2}>
                    <Text fontWeight={800} letterSpacing={2} pb={2}>RESUMEN</Text>
                    <Flex>
                        <Flex flexWrap={"wrap"}>
                            <Text>{data[0].name}</Text>
                            <Text fontSize='sm'>{data[0].details}</Text>
                            <Box>
                                <Text fontWeight={800}>${data[0].price}</Text>
                            </Box>
                        </Flex>
                        <Box>
                            <Image src={data[0].thumbs.img1}/>
                        </Box>
                    </Flex>
                </Box>
                <Box py={2}>
                    <Text fontWeight={800}>Pagar</Text>
                    <PaymentMethod />
                </Box>
            </Container>
        </>
    )
}
