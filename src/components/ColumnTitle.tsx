import React, { useState } from "react";
import styled from "@emotion/styled";
import { grid, borderRadius, taskHeaderTextareaWidth } from "const";
import { P100, PRIMARY } from "utils/colors";
import { Id } from "types";

const Container = styled.h4`
  padding: ${grid}px;
  transition: background-color ease 0.2s;
  flex-grow: 1;
  user-select: none;
  position: relative;
  color: ${PRIMARY};
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  min-height: 40px;
  &:focus {
    outline: 2px solid ${P100};
    outline-offset: 2px;
  }
  textarea {
    color: ${PRIMARY};
    font-weight: bold;
    width: ${taskHeaderTextareaWidth}px;
    border: none;
    resize: none;
    border-radius: ${borderRadius}px;
    box-shadow: inset 0 0 0 1px #ccc;
    line-height: 1.43;
    &:focus {
      outline: none;
      box-shadow: inset 0 0 0 2px ${PRIMARY};
    }
  }
`;

const RegularTitle = styled.div`
  margin: 0;
  font-size: 14px;
  align-self: center;
  word-break: break-word;
  width: ${taskHeaderTextareaWidth}px;
`;

const Extra = styled.div`
  display: flex;
  align-items: flex-start;
`;

const InnerExtra = styled.div`
  display: flex;
  align-items: center;
`;

const Count = styled.div`
  overflow-wrap: anywhere;
  font-size: 14px;
`;

interface Props {
  id: Id;
  title: string;
  tasksCount: number;
}

const ColumnTitle = ({ id, title, tasksCount, ...props }: Props) => {
  const [pendingTitle] = useState<string>(title);

  return (
    <Container {...props}>
      <RegularTitle key={id}>{pendingTitle}</RegularTitle>
      <Extra>
        <InnerExtra>
          <Count>{tasksCount}</Count>
        </InnerExtra>
      </Extra>
    </Container>
  );
};

export default ColumnTitle;
