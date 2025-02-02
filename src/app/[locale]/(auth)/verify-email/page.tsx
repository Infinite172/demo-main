'use client';

import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Container,
  Flex,
  Group,
  PasswordInput,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import { useRouter } from 'next/navigation';

const VerifyPasswordPage = () => {
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle password verification logic here
  };

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

      <Title order={2} ta="center" mb="lg">
        Verify Password
      </Title>
      <form onSubmit={handleSubmit}>
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          required
          mb="sm"
        />

        <Flex justify="end" py="sm">
          <Text
            ta="right"
            td="underline"
            style={{ cursor: 'pointer' }}
            onClick={() => router.push('/verify-email')}
          >
            Login Instead?
          </Text>
        </Flex>

        <SimpleGrid cols={2} spacing="sm">
          <Button
            variant="outline"
            mt="md"
            onClick={() => router.push('/reset-password')}
          >
            Back
          </Button>
          <Button type="submit" mt="md">
            Verify Password
          </Button>
        </SimpleGrid>
      </form>
    </Container>
  );
};

export default VerifyPasswordPage;
