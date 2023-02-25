import { Flex, Box, Select, Text, FormControl, FormLabel, FormHelperText, Input, Button } from "@chakra-ui/react"

export default function PaymentMethod() {
    return (
        <>  
            <Box py={2}>
                <Select placeholder="Método de pago" py={2}>
                    <option value='option1'>Tarjeta de crédito</option>
                    <option value='option2'>Tarjeta de débito</option>
                </Select>
                <Box>
                    <FormControl py={2}>
                        <FormLabel mb={0}>Número de tarjeta</FormLabel>
                        <Input placeholder='' />
                    </FormControl>
                    <Flex py={2}>
                        <FormControl>
                            <FormLabel mb={0}>Vencimiento</FormLabel>
                            <Flex alignItems={"center"} justifyContent={"space-around"}>
                                <Input htmlSize={1} width='auto' placeholder='MM' />
                                <Text> / </Text>
                                <Input htmlSize={1} width='auto' placeholder='AA' />
                            </Flex>
                        </FormControl>
                        <FormControl>
                            <FormLabel mb={0}>Cód. de seguridad</FormLabel>
                            <Input htmlSize={3} placeholder='' />
                        </FormControl>
                    </Flex>
                    <FormControl py={2}>
                        <FormLabel mb={0}>Nombre y Apellido</FormLabel>
                        <Input placeholder='' />
                        <FormHelperText>Tal cual como figura en la tarjeta.</FormHelperText>
                    </FormControl>
                    <FormControl py={2}>
                        <FormLabel mb={0}>Documento de identidad</FormLabel>
                        <Input placeholder='' />
                    </FormControl>
                </Box>
                <Flex justifyContent={"center"} my={5}>
                    <Button colorScheme='blue' pr={10} pl={10}>
                        Completar compra
                    </Button>
                </Flex>
            </Box>
        </>
    )
}
