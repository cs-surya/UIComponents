// src/Components/Navbar/Navbar.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';
import { NavbarProps } from './Navbar.types';

const meta: Meta<NavbarProps> = {
  title: 'Components/Navbar',
  component: Navbar,
  argTypes: {
    bgColor: { control: 'color', description: 'Background color of the navbar' },
    linkColor: { control: 'color', description: 'Text/link color inside the navbar' },
    data: { description: 'Array of link labels to render' },
    brand: { control: 'object', description: 'Brand text and href for the navbar' },
  },
};

export default meta;

type Story = StoryObj<NavbarProps>;

export const Default: Story = {
  args: {
    bgColor: '#000000',
    linkColor: '#ffffff',
    data: ['Home', 'About', 'Services', 'Contact'],
    brand: { text: 'Surya', href: '/' },
  },
};

export const CustomColors: Story = {
  args: {
    bgColor: '#1e90ff',
    linkColor: '#ffff00',
    data: ['One', 'Two', 'Three'],
    brand: { text: 'MyBrand', href: '/home' },
  },
};
