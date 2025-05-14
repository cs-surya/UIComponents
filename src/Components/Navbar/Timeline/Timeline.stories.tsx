// src/stories/Timeline.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Timeline from "./Timeleine";
import type { TimelineEntry, Metadata } from "./Timeline.types";

export default {
  title: "Components/Timeline",
  component: Timeline,
  argTypes: {
    metadata: {
      control: {
        type: "object",
      },
    },
    entries: {
      control: {
        type: "object",
      },
    },
  },
} as Meta<typeof Timeline>;

const Template: StoryFn<React.ComponentProps<typeof Timeline>> = (args) => (
  <Timeline {...args} />
);

export const Default = Template.bind({});
Default.args = {
  metadata: { skills: ["React", "TypeScript", "Storybook"] },
  entries: [
    {
      id: "1",
      designation: "Frontend Engineer",
      company: "Acme Corp",
      year: "2021",
      description: "React,TypeScript,Storybook",
      jobDescription: (
        <p>
          Built reusable component library and documented it in Storybook—
          boosting dev velocity by 30%.
        </p>
      ),
    },
    {
      id: "2",
      designation: "Senior Developer",
      company: "Beta LLC",
      year: "2023",
      description: "GraphQL,Node.js,AWS",
      jobDescription: (
        <p>
          Led backend migration to serverless architecture, reducing costs by
          40%.
        </p>
      ),
    },
  ] as TimelineEntry[],
};

export const EmptyState = Template.bind({});
EmptyState.args = {
  metadata: { skills: [] },
  entries: [],
};

export const SingleEntry = Template.bind({});
SingleEntry.args = {
  metadata: { skills: ["Go", "Kubernetes"] },
  entries: [
    {
      id: "solo",
      designation: "DevOps Engineer",
      company: "Gamma Inc",
      year: "2024",
      description: "Go,Kubernetes,Docker",
      jobDescription: (
        <div>
          <h4>Highlights:</h4>
          <ul>
            <li>Automated CI/CD pipelines</li>
            <li>Scaled clusters to 100+ nodes</li>
          </ul>
        </div>
      ),
    },
  ],
};
