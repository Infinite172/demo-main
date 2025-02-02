'use client';

import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Container,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useRouter } from 'next/navigation';

const SettingsPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSave = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle settings update logic here
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

      <Title order={1} mb="md" ta="center">
        Account Settings
      </Title>
      <Text c="dimmed" size="sm" ta="center" mb="lg">
        Update your account information and preferences.
      </Text>

      <form onSubmit={handleSave}>
        <Stack gap="md">
          <TextInput
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
            required
          />
          <TextInput
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            required
          />
          <PasswordInput
            label="New Password"
            placeholder="Enter a new password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          <Button type="submit" fullWidth>
            Save Changes
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default SettingsPage;
