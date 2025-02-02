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

const ResetPasswordPage = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle password change logic here
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
        Change Password
      </Title>
      <form onSubmit={handleSubmit}>
        <PasswordInput
          label="Old Password"
          placeholder="Enter your old password"
          value={oldPassword}
          onChange={(event) => setOldPassword(event.currentTarget.value)}
          required
          mb="sm"
        />
        <PasswordInput
          label="New Password"
          placeholder="Enter your new password"
          value={newPassword}
          onChange={(event) => setNewPassword(event.currentTarget.value)}
          required
          mb="sm"
        />
        <PasswordInput
          label="Confirm New Password"
          placeholder="Confirm your new password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.currentTarget.value)}
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
            Verify Email?
          </Text>
        </Flex>

        <SimpleGrid cols={2} spacing="sm">
          <Button
            variant="outline"
            mt="md"
            onClick={() => router.push('/login')}
          >
            Login
          </Button>
          <Button type="submit" mt="md">
            Change Password
          </Button>
        </SimpleGrid>
      </form>
    </Container>
  );
};

export default ResetPasswordPage;
