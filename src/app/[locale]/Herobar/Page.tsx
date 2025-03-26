'use client';

import React from 'react';
import {
  BackgroundImage,
  Box,
  Flex,
  Overlay,
  Stack,
  Text,
} from '@mantine/core';

const Herobar = () => (
  <Box w="full" pos="relative">
    <BackgroundImage mih={716} src="/Kitchen.png">
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
        color="#000"
        pos="absolute"
        inset={0}
        style={{ zIndex: 1 }}
      />
    </BackgroundImage>

    <Stack
      pos="absolute"
      top={0}
      left={0}
      c="#FFFFFF"
      w="100%"
      h="100%"
      style={{
        padding: '96px 120px 278px 120px',
        zIndex: 2,
        width: '673px',
        height: '172px',
        fontFamily: 'Ibarra Real Nova',
        fontWeight: 600,
      }}
    >
      <hr
        style={{
          height: '2px',
          alignSelf: 'flex-start',
          width: '400px',
          backgroundColor: 'white',
          border: 'none',
          margin: 0,
        }}
      />
      <Text
        mt={16}
        style={{ fontSize: '72px', lineHeight: '86px', fontWeight: 600 }}
      >
        Best <br /> Chicken in the town
      </Text>
      <Flex gap={10}>
        <Text>Since 1999</Text>
        <hr
          style={{
            height: '2px',
            alignSelf: 'flex-start',
            width: '700px',
            backgroundColor: 'white',
            border: 'none',
            margin: 0,
          }}
        />
        <Text
          style={{
            fontSize: '24px',
            textAlign: 'right',
            lineHeight: '39px',
            fontWeight: 500,
          }}
        >
          We are proud takeaway restaurants <br /> selling top-quality foods at{' '}
          <br />
          affordable prices in Newcastle
        </Text>
      </Flex>
      {/* <Text style={{ fontSize: '72px' }} size="lg" c="#FFFFFF">
        Chicken in the town
      </Text> */}
    </Stack>
  </Box>
);

export default Herobar;
