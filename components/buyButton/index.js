import { Flex, Button } from "@chakra-ui/react"
import Link from 'next/link';
import styles from '../../styles/BuyButton.module.css'

export default function BuyButton() {
    return (
        <>
        <Flex className={styles.container}>
            <Link href="/checkout">
                <Button colorScheme='blue' pr={10} pl={10}>Comprar</Button>
            </Link>
        </Flex>
        </>
    )
}
