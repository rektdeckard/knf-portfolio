import React, { useState } from "react";
import styled from "styled-components";

import { NewsEvents } from "../../data";

interface NewsEventListProps {
  events: NewsEvents[];
}

const DatesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Date = styled.li`
  display: grid;
  grid-template-columns: 72px 1fr;
  margin-bottom: 16px;
`;

const Year = styled.h3`
  margin: 0;
  font-weight: 400;
`;

const EventsList = styled.ul`
  list-style-type: none;
`;

const Event = styled.li`
  margin-bottom: 16px;
`;

const EventTitle = styled.p`
  margin: 0;
`;

const EventLink = styled.a`
  display: block;
`;

const ExpanderLink = styled.small`
  margin: 16px 0;
  cursor: pointer;
  text-transform: uppercase;
`;

const NewsEventList: React.FC<NewsEventListProps> = ({ events }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <>
      <DatesList>
        {(expanded ? events : events.slice(0, 6)).map(({ year, events }) => (
          <Date>
            <Year>{year}</Year>
            <EventsList>
              {events.map(({ title, location, url }) => (
                <Event>
                  {url ? (
                    <EventLink href={url}>{title}</EventLink>
                  ) : (
                    <EventTitle>{title}</EventTitle>
                  )}
                  <small>{location}</small>
                </Event>
              ))}
            </EventsList>
          </Date>
        ))}
      </DatesList>
      {events.length > 6 && (
        <ExpanderLink onClick={() => setExpanded((e) => !e)}>
          {expanded ? "Show less" : "Show more"}
        </ExpanderLink>
      )}
    </>
  );
};

export default NewsEventList;
