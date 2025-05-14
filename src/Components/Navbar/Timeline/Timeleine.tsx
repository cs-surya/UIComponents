// src/components/Timeline.tsx
import React from "react";
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
import { Helmet } from "react-helmet";

import type { Metadata, TimelineEntry } from "./Timeline.types";

interface TimelineProps {
  metadata: Metadata;
  entries: TimelineEntry[];
}

const Timeline: React.FC<TimelineProps> = ({ metadata, entries }) => {
  return (
    <section id="about">
      <Helmet>
        <meta name="description" content={metadata.skills.join(", ")} />
      </Helmet>

      <MDBContainer fluid className="py-5" style={{ backgroundColor: "black" }}>
        <div className="main-timeline">
          {entries.map((entry, idx) => (
            <div
              key={entry.id}
              className={`timeline ${idx % 2 === 0 ? "left" : "right"}`}
            >
              <MDBCard className="timeline-card">
                <MDBCardBody className="p-4">
                  <h3 className="timeline-designation">{entry.designation}</h3>
                  <h4 className="timeline-company">{entry.company}</h4>
                  <h5 className="timeline-year">{entry.year}</h5>

                  {entry.description && (
                    <div className="technologies">
                      {entry.description.split(", ").map((tech, i) => (
                        <span key={i} className="technology">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {entry.jobDescription && (
                    <div className="timeline-job-description d-none d-md-block">
                      {entry.jobDescription}
                    </div>
                  )}
                </MDBCardBody>
              </MDBCard>
            </div>
          ))}
        </div>
      </MDBContainer>
    </section>
  );
};

export default Timeline;
