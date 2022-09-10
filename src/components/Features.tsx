import {
    Box,
    VStack,
    Button,
    Flex,
    Divider,
    chakra,
    Grid,
    GridItem,
    Container,
  } from '@chakra-ui/react';
  import {} from '@chakra-ui/react';
  
  interface FeatureProps {
    heading: string;
    text: string;
  }
  
  const Feature = ({ heading, text }: FeatureProps) => {
    return (
      <GridItem>
        <chakra.h3 fontSize="xl" fontWeight="600">
          {heading}
        </chakra.h3>
        <chakra.p>{text}</chakra.p>
      </GridItem>
    );
  };
  
  export default function Features() {
    return (
      <Box as={Container} maxW="7xl" mt={14} p={4}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
              Keunggulan Jasa Pembuatan Web kami
              </chakra.h2>
              {/* <Button colorScheme="green" size="md">
                Call To Action
              </Button> */}
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p>
               Kami senantiasa melakukan update teknologi dan desain UI/UX yang sedang tren serta pengalaman dan kenyamanan pengguna ketika mengakses website adalah prioritas utama kami.   
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={{ base: '8', sm: '12', md: '16' }}>
          <Feature
            heading={'RELIABLE'}
            text={'Telah teruji selama lebih dari 5 tahun dalam menyediakan layanan profesional berbasis Web.'}
          />
          <Feature
            heading={'DATA CENTER INTERNASIONAL'}
            text={'Sehingga kecepatan akses akan lebih tinggi dan stabil.'}
          />
          <Feature
            heading={'FULL MAINTENANCE SERVICE'}
            text={'Layanan maintenance untuk memastikan Web tetap berjalan dengan baik meskipun Web sudah diserahterimakan ke Client.'}
          />
          <Feature
            heading={'SECURE'}
            text={'Data yang tersimpan di server lebih aman karena sistem backup yang handal dan backup server ada di gedung terpisah.'}
          />
        </Grid>
      </Box>
    );
  }