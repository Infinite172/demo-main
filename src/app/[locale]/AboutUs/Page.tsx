'use client';

import React from 'react';
import { Box, Flex, Stack, Text } from '@mantine/core';
import Image from 'next/image';

const AboutUs = () => (
  <Box h={760} w="full">
    <Flex align="center" justify="center" m={100}>
      <Image src="/AboutImg.png" alt="About us" width={440} height={600} />
    </Flex>
    <Stack>
      <Text>ABOUT US</Text>
    </Stack>
  </Box>
);

export default AboutUs;
