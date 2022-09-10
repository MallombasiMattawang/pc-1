import { ReactNode } from 'react';
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

function PriceWrapper({ children }: { children: ReactNode }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}>
            {children}
        </Box>
    );
}

export default function Pricing() {
    return (
        <Box py={12}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl">
                    Paket Website
                </Heading>
                <Text fontSize="lg" color={'gray.500'}>
                    Ada banyak paket pembuatan website yang bisa Anda pilih sesuai dengan kategori industri dan kebutuhan Anda.
                </Text>
            </VStack>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 3, lg: 10 }}
                py={10}>
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            Basic
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                Rp
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                950Rb
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                /Thn
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                Jumlah Halaman : 5
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                Design : Template
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                Mobile friendly
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                Mode dark & Light
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                HTTPS/SSL & HTTP2
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                1 Email Account
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                Entry Content 7 Halaman
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                Space 1 GB
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                Integrasi Sosial Media
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                Data Center : Jakarta
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                Personal Support
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <Button w="full" colorScheme="red" variant="outline">
                                Order Paket
                            </Button>
                        </Box>
                    </VStack>
                </PriceWrapper>
                <PriceWrapper>
                    <Box position="relative">
                        <Box
                            position="absolute"
                            top="-16px"
                            left="50%"
                            style={{ transform: 'translate(-50%)' }}>
                            <Text
                                textTransform="uppercase"
                                bg={useColorModeValue('red.300', 'red.700')}
                                px={3}
                                py={1}
                                color={useColorModeValue('gray.900', 'gray.300')}
                                fontSize="sm"
                                fontWeight="600"
                                rounded="xl">
                                Paket Populer
                            </Text>
                        </Box>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                Bisnis
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" fontWeight="600">
                                    Rp
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    3.5Jt
                                </Text>
                                <Text fontSize="3xl" color="gray.500">
                                    /Thn
                                </Text>
                            </HStack>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.50', 'gray.700')}
                            py={4}
                            borderBottomRadius={'xl'}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Jumlah Halaman : 7
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Design : Template
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Mobile friendly
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Mode dark & Light
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    HTTPS/SSL & HTTP2
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    5 Email Account
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Entry Content 20 Halaman
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Space 1.5 GB
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Integrasi Sosial Media
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Data Center : Jakarta
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Personal Support
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Button w="full" colorScheme="red">
                                    Order Paket
                                </Button>
                            </Box>
                        </VStack>
                    </Box>
                </PriceWrapper>
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            Custom
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                Rp
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                7-15Jt
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                /Thn
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                Jumlah Halaman : Custom
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                Design : Custom
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                Mobile friendly
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                Mode dark & Light
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                HTTPS/SSL & HTTP2
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                10 Email Account
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                Entry Content 30 Halaman
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                Space Custom
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                Integrasi Sosial Media
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                Data Center : Jakarta
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                Personal Support
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <Button w="full" colorScheme="red" variant="outline">
                                Order Paket
                            </Button>
                        </Box>
                    </VStack>
                </PriceWrapper>

            </Stack>

            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 1, lg: 10 }}
                py={10}>
                <PriceWrapper>
                    <Box position="relative">
                        <Box
                            position="absolute"
                            top="-16px"
                            left="50%"
                            style={{ transform: 'translate(-50%)' }}>
                            <Text
                                textTransform="uppercase"
                                bg={useColorModeValue('green.300', 'green.700')}
                                px={3}
                                py={1}
                                color={useColorModeValue('gray.900', 'gray.300')}
                                fontSize="sm"
                                fontWeight="600"
                                rounded="xl">
                                New Paket
                            </Text>
                        </Box>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                Wedding
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" fontWeight="600">
                                    Rp
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    500K
                                </Text>
                                <Text fontSize="3xl" color="gray.500">
                                    /3Bln
                                </Text>
                            </HStack>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.50', 'gray.700')}
                            py={4}
                            borderBottomRadius={'xl'}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Masa Aktif 3 Bulan
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Jumlah Tamu Tidak Terbatas
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Countdown Acara
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Konfirmasi Kehadiran
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Background Music
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Galeri Foto (Max 10)
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Video Prewed
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Love Stories
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Button w="full" colorScheme="blue">
                                    Order Paket
                                </Button>
                            </Box>
                        </VStack>
                    </Box>
                </PriceWrapper>

                <PriceWrapper>
                    <Box position="relative">
                        <Box
                            position="absolute"
                            top="-16px"
                            left="50%"
                            style={{ transform: 'translate(-50%)' }}>
                            <Text
                                textTransform="uppercase"
                                bg={useColorModeValue('green.300', 'green.700')}
                                px={3}
                                py={1}
                                color={useColorModeValue('gray.900', 'gray.300')}
                                fontSize="sm"
                                fontWeight="600"
                                rounded="xl">
                                New Paket
                            </Text>
                        </Box>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                Toko Online Standar
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" fontWeight="600">
                                    Rp
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    750K
                                </Text>
                                <Text fontSize="3xl" color="gray.500">
                                    /Thn
                                </Text>
                            </HStack>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.50', 'gray.700')}
                            py={4}
                            borderBottomRadius={'xl'}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Domain .com / .net / .my.id
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Disk Space 1 Gb
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    6 Email Account
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Fitur Standart Toko Online
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    Bantuan Input Produk Awal 10
                                </ListItem>

                            </List>
                            <Box w="80%" pt={7}>
                                <Button w="full" colorScheme="blue">
                                    Order Paket
                                </Button>
                            </Box>
                        </VStack>
                    </Box>
                </PriceWrapper>

            </Stack>


        </Box>


    );
}