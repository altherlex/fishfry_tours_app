import styled from "@emotion/styled";
import ColumnTitle from "components/ColumnTitle";
import { grid } from "const";
import TaskList from "features/task/TaskList";
import React from "react";
import { ITask } from "types";
import { COLUMN_COLOR } from "utils/colors";

const Container = styled.div`
  margin: ${grid / 2}px;
  display: flex;
  flex-direction: column;
  border-top: 3px solid #cfd3dc;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLUMN_COLOR};
  transition: background-color 0.2s ease;
  [data-rbd-drag-handle-context-id="0"] {
    cursor: initial;
  }
`;

type Props = {
  id: number;
  title: string;
  tasks: ITask[];
  index: number;
};

const Column = ({ id, title, tasks, index }: Props) => {
  return (
    <Container data-testid={`col-${title}`}>
      <Header>
        <ColumnTitle
          id={id}
          title={title}
          tasksCount={tasks.length}
          aria-label={`${title} task list`}
          data-testid="column-title"
        />
      </Header>
      <TaskList columnId={id} listType="TASK" tasks={tasks} index={index} />
    </Container>
  );
};

export default Column;
