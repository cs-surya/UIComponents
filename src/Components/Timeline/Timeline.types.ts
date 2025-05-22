// src/components/Timeline.types.ts
import type { ReactNode } from "react";

export interface TimelineEntry {
  id: string;
  designation: string;
  company: string;
  year: string | number;
  /** comma-separated tags; split and render as individual bubbles */
  description?: string;
  /** pre-rendered JSX or HTML string (e.g. ReactNode) for job details */
  jobDescription?: ReactNode;
}

export interface Metadata {
  /** flat array of skills to use in page meta */
  skills: string[];
}
