'use client';

import React, { useState } from 'react';
import {
  Button,
  Container,
  PasswordInput,
  SimpleGrid,
  Title,
} from '@mantine/core';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle password change logic here
  };

  return (
    <Container size="xs" my="xl">
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

export default Page;
