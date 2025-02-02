'use client';

import React, { useState } from 'react';
import { Button, Center, Flex, Menu, rem, Tabs, Text } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import Image from 'next/image';

const Page = () => {
  const [activeTab, setActiveTab] = useState<string | null>('All');

  //When Orders is empty
  const EmptyOrder = () => (
    <Center h="70vh">
      <Flex direction="column" align="center" gap={rem(24)} w={520}>
        <Image
          src="/EmptyOrders.png"
          alt="Empty Orders"
          width={140}
          height={140}
        />
        <Flex direction="column" align="center" gap={rem(12)} ta="center">
          <Text fw={600} size={rem(20)} lh={rem(28)} c="var(--color-primary)">
            No Orders Yet
          </Text>
          <Text fw={400} size={rem(16)} lh={rem(24)} c="var(--color-dust)">
            Use this page to manage, track, and update orders in real-time for
            accurate processing, smooth service, and timely fulfillment.
          </Text>
        </Flex>
        <Button
          color="var(--color-button-secondary)"
          size="xl"
          radius="var(--radius-sm)"
        >
          <Text fw={600} size={rem(16)} lh={rem(24)} c="var(--color-secondary)">
            Add Order
          </Text>
        </Button>
      </Flex>
    </Center>
  );

  return (
    <Flex direction="column" gap={rem(24)} p={rem(24)}>
      {/* Top Part */}
      <Flex align="center" justify="space-between">
        <Flex direction="column" gap={rem(4)}>
          <Text
            fw={600}
            size={rem(24)}
            lh={rem(32)}
            c="var(--color-background-primary)"
          >
            Orders
          </Text>
          <Text fw={400} size={rem(16)} lh={rem(24)} c="var(--color-primary)">
            Define User Roles and Manage Permissions for Secure Access Control
          </Text>
        </Flex>

        <Flex gap={rem(16)}>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Button
                color="var(--color-button-primary)"
                radius="var(--radius-sm)"
                rightSection={
                  <IconChevronDown scale={20} color="var(--color-tertiary)" />
                }
                style={{
                  border: '1px solid var(--color-border-tertiary)',
                }}
              >
                <Text
                  fw={400}
                  size={rem(16)}
                  lh={rem(24)}
                  c="var(--color-primary)"
                >
                  Export
                </Text>
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item
                leftSection={
                  <Image src="/Excel.svg" alt="Excel" width={16} height={16} />
                }
              >
                <Text
                  fw={400}
                  size={rem(16)}
                  lh={rem(24)}
                  c="var(--color-primary)"
                >
                  Download as Excel
                </Text>
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <Image src="/PDF.svg" alt="PDF" width={16} height={16} />
                }
              >
                <Text
                  fw={400}
                  size={rem(16)}
                  lh={rem(24)}
                  c="var(--color-primary)"
                >
                  Download as PDF
                </Text>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Button
            color="var(--color-button-secondary)"
            radius="var(--radius-sm)"
          >
            <Text
              fw={600}
              size={rem(16)}
              lh={rem(24)}
              c="var(--color-secondary)"
            >
              Add Order
            </Text>
          </Button>
        </Flex>
      </Flex>

      {/* Tabs part */}
      <Flex direction="column">
        <Tabs
          color="var(--color-primary)"
          value={activeTab}
          onChange={setActiveTab}
        >
          <Tabs.List>
            <Tabs.Tab
              value="All"
              fw={600}
              size={rem(16)}
              lh={rem(24)}
              c={
                activeTab === 'All'
                  ? 'var(--color-primary)'
                  : 'var(--color-quaternary)'
              }
            >
              All
            </Tabs.Tab>
            <Tabs.Tab
              value="Active"
              fw={600}
              size={rem(16)}
              lh={rem(24)}
              c={
                activeTab === 'Active'
                  ? 'var(--color-primary)'
                  : 'var(--color-quaternary)'
              }
              rightSection={
                activeTab !== 'Active' && (
                  <Text
                    px={rem(4)}
                    fw={400}
                    size={rem(12)}
                    lh={rem(20)}
                    c="var(--color-secondary)"
                    bg="var(--color-button-secondary)"
                    style={{ borderRadius: '100px' }}
                  >
                    03
                  </Text>
                )
              }
            >
              Active
            </Tabs.Tab>
            <Tabs.Tab
              value="Pending"
              fw={600}
              size={rem(16)}
              lh={rem(24)}
              c={
                activeTab === 'Pending'
                  ? 'var(--color-primary)'
                  : 'var(--color-quaternary)'
              }
              rightSection={
                activeTab !== 'Pending' && (
                  <Text
                    px={rem(4)}
                    fw={400}
                    size={rem(12)}
                    lh={rem(20)}
                    c="var(--color-secondary)"
                    bg="var(--color-warning)"
                    style={{ borderRadius: '100px' }}
                  >
                    03
                  </Text>
                )
              }
            >
              Pending
            </Tabs.Tab>
            <Tabs.Tab
              value="Completed"
              fw={600}
              size={rem(16)}
              lh={rem(24)}
              c={
                activeTab === 'Completed'
                  ? 'var(--color-primary)'
                  : 'var(--color-quaternary)'
              }
              rightSection={
                activeTab !== 'Completed' && (
                  <Text
                    px={rem(4)}
                    fw={400}
                    size={rem(12)}
                    lh={rem(20)}
                    c="var(--color-secondary)"
                    bg="var(--color-progress)"
                    style={{ borderRadius: '100px' }}
                  >
                    18
                  </Text>
                )
              }
            >
              Completed
            </Tabs.Tab>
            <Tabs.Tab
              value="Canceled"
              fw={600}
              size={rem(16)}
              lh={rem(24)}
              c={
                activeTab === 'Canceled'
                  ? 'var(--color-primary)'
                  : 'var(--color-quaternary)'
              }
              rightSection={
                activeTab !== 'Canceled' && (
                  <Text
                    px={rem(4)}
                    fw={400}
                    size={rem(12)}
                    lh={rem(20)}
                    c="var(--color-secondary)"
                    bg="var(--color-danger)"
                    style={{ borderRadius: '100px' }}
                  >
                    07
                  </Text>
                )
              }
            >
              Canceled
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="All" py={rem(12)}>
            <EmptyOrder />
          </Tabs.Panel>
          <Tabs.Panel value="Active" py={rem(12)}>
            <EmptyOrder />
          </Tabs.Panel>
          <Tabs.Panel value="Pending" py={rem(12)}>
            <EmptyOrder />
          </Tabs.Panel>
          <Tabs.Panel value="Completed" py={rem(12)}>
            <EmptyOrder />
          </Tabs.Panel>
          <Tabs.Panel value="Canceled" py={rem(12)}>
            <EmptyOrder />
          </Tabs.Panel>
        </Tabs>
      </Flex>
    </Flex>
  );
};

export default Page;
