'use client';

import React from 'react';
import {
  Avatar,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  return (
    <Container size="xl" my="xl">
      <Group justify="space-between" h="100%">
        <Title
          order={3}
          onClick={() => router.push('/')}
          style={{ cursor: 'pointer' }}
        >
          Welcome
        </Title>

        <Group>
          <Button
            size="md"
            variant="outline"
            onClick={() => router.push('/settings')}
          >
            Settings
          </Button>
          <Avatar size="lg" radius="xl" />
        </Group>
      </Group>

      <Stack mt={50}>
        <Title order={1} ta="center" mb="md">
          Welcome to Our Platform
        </Title>
        <Text size="lg" ta="center" c="dimmed" mb="lg">
          Discover amazing content, and enjoy a seamless experience.
        </Text>
      </Stack>

      <Group justify="center">
        <Button
          size="lg"
          variant="gradient"
          onClick={() => router.push('/login')}
          mt={50}
        >
          Get Started
        </Button>
      </Group>
    </Container>
  );
};

export default HomePage;
