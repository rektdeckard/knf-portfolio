import React from "react";
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

const NewsEventList: React.FC<NewsEventListProps> = ({ events }) => {
  return (
    <DatesList>
      {events.map(({ year, events }) => (
        <Date>
          <Year>{year}</Year>
          <EventsList>
            {events.map(({ title, location, url }) => (
              <Event>
                {url ? (
                  <a href={url}>{title}</a>
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
  );
};

export default NewsEventList;
