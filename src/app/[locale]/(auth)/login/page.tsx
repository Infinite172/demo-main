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
  TextInput,
  Title,
} from '@mantine/core';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const t = useTranslations('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    router.push('/orders/tables');
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <Container size="xl" my="xl">
      <Group justify="space-between" h="100%">
        <Title
          order={3}
          onClick={() => router.push('/')}
          style={{ cursor: 'pointer' }}
        >
          {t('welcome')}
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
        Login
      </Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Email"
          placeholder="Your email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          required
          mb="sm"
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
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
            onClick={() => router.push('/reset-password')}
          >
            Forgot Password?
          </Text>
        </Flex>

        <SimpleGrid cols={2} spacing="sm">
          <Button variant="outline" mt="md" onClick={() => router.push('/')}>
            Home
          </Button>
          <Button type="submit" mt="md">
            Login
          </Button>
        </SimpleGrid>
      </form>
    </Container>
  );
};

export default LoginPage;
