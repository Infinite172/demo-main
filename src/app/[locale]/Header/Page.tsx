'use client';

import React from 'react';
import { Button, Flex, Group, Image, Select, Text } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

import classes from '../../../components/Header/Header.module.css';

const icon = <IconChevronDown size={16} />;

const Header = () => (
  <Flex
    justify="space-between"
    style={{
      backgroundColor: '#000000',
      color: 'white',
      width: '100%',
      height: '82px',
      padding: '16px 120px 16px 120px',
    }}
  >
    <Group h={44}>
      <Image src="/logo.png" alt="Logo" style={{ height: '44px' }} />
      <Image src="/chickenmate.png" alt="Logo" />
    </Group>

    <Group
      style={{
        cursor: 'pointer',
      }}
    >
      <Text className={classes.list1}>Menu</Text>
      <Text className={classes.list1}>Catering</Text>
      <Text className={classes.list1}>About</Text>
      <Select
        placeholder="Locations"
        width="145px"
        rightSection={icon}
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

    <Button
      style={{
        backgroundColor: '#EA1F21',
        border: 'none',
        borderRadius: '0',
        padding: '13px 24px 13px 24px',
      }}
    >
      Order Online
    </Button>
  </Flex>
);

export default Header;
