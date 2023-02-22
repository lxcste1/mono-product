import Image from 'next/image'
import { Box } from '@chakra-ui/react'
import logo from '../../public/farmaco.png'
import styles from '../../styles/Header.module.css'

export default function Header() {
    return (
        <>
        <Box as="nav" bg="bg-surface" boxShadow="sm" p={4} className={styles.container}>
        <Image 
            src={logo}
            alt="Logo de la empresa"
            width={24}
            height={24}
            />
        </Box>
        </>
    )
}
