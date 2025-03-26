'use client';

import React from 'react';
import {
  Button,
  Flex,
  Group,
  Image,
  Select,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconChevronDown,
} from '@tabler/icons-react';

const Footer = () => (
  <Stack gap={0}>
    <Flex
      justify="space-around"
      style={{
        height: '400px',
        backgroundColor: '#000000',
        color: 'white',
        width: '100%',
        padding: '120px',
      }}
    >
      <Flex justify="space-between" w={334}>
        <Image src="/logo.png" alt="logo" width={111} height={80} />
        <Image src="/title.png" alt="logo" width={204} height={52} />
      </Flex>

      <Stack justify="space-between">
        <Text size="lg">Stay updated</Text>
        <Flex>
          <TextInput pb={70} h={48} w={454} placeholder="Example@gmail.com" />
          <Button
            p={0}
            h={48}
            w={106}
            m={0}
            style={{
              background: '#EA1F21',
              borderRadius: '0',
            }}
          >
            Sign up
          </Button>
        </Flex>

        <Flex gap={20}>
          <IconBrandFacebook size={30} />
          <IconBrandInstagram size={30} />
          <IconBrandTwitter size={30} />
          <IconBrandLinkedin size={30} />
        </Flex>
      </Stack>
    </Flex>

    <Flex
      justify="space-between"
      style={{
        padding: '16px 120px 16px 120px',
        backgroundColor: '#686565',
        color: 'white',
        width: '100%',
        height: '49px',
      }}
    >
      <Group
        style={{
          cursor: 'pointer',
        }}
      >
        <Text>MENU</Text>
        <Text>CATERING</Text>
        <Text>ABOUT</Text>
        <Text>CONTACT US</Text>

        <Select
          placeholder="LOCATIONS"
          rightSection={<IconChevronDown size={30} />}
          comboboxProps={{
            transitionProps: { transition: 'pop', duration: 200 },
          }}
          data={[
            { value: 'location1', label: 'Location 1' },
            { value: 'kotara', label: 'Kotara' },
          ]}
          styles={{
            input: {
              border: 'none',
              color: 'white',
              backgroundColor: 'transparent',
            },
          }}
        />
      </Group>
      <Text>©2025 Chicken Mate Gourmet Bar. All Rights Reserved.</Text>
    </Flex>
  </Stack>
);

export default Footer;
