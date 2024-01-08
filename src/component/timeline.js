import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
  TimelineOppositeContent,
} from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";

const OutlinedTimeline = (props) => {
  console.log("props- outline-> ", props);
  return (
    <React.Fragment>
      <Timeline align="alternate" style={{ height: "55px" }}>
        <TimelineItem>
          <TimelineOppositeContent
            classes={{
              root: props.classes.oppositeContent, // class name, e.g. `classes-nesting-root-x`
            }}
          >
            <Typography color="textSecondary">{props.data.year}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              classes={{
                root: props.classes.timeLineConnector, // class name, e.g. `classes-nesting-root-x`
              }}
            />
            {!props.isLastIndex && (
              <TimelineConnector
                classes={{
                  root: props.classes.timeLineDot, // class name, e.g. `classes-nesting-root-x`
                }}
              />
            )}
          </TimelineSeparator>
          <TimelineContent
            classes={{
              root: props.classes.tmelineContent, // class name, e.g. `classes-nesting-root-x`
            }}
          >
            <text>{props.data.company}</text>
            <span>{props.data.marks || props.data.position}</span>
            {/* <Typography>Eat</Typography> */}
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  );
};

export default OutlinedTimeline;
