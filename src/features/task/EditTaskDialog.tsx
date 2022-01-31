import React, { useState, useEffect, useRef } from "react";
import {
  Dialog,
  Button,
  TextField,
  TextareaAutosize,
  useTheme,
  useMediaQuery,
  WithTheme,
} from "@material-ui/core";
import { RootState } from "store";
import { useSelector, useDispatch } from "react-redux";
import {
  setEditDialogOpen,
  deleteTask,
  updateTasksByColumn,
  patchTask,
} from "./TaskSlice";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { PRIMARY, TASK_G } from "utils/colors";
import { IColumn, TasksByColumn, Id } from "types";
import {
  selectAllColumns,
  selectColumnsEntities,
} from "features/column/ColumnSlice";
import { Autocomplete } from "@material-ui/lab";
import { borderRadius, Key, taskDialogHeight } from "const";
import Close from "components/Close";
import { formatDistanceToNow } from "date-fns";
import getMetaKey from "utils/shortcuts";
// import LabelChip from "components/LabelChip";

const Content = styled.div<WithTheme>`
  display: flex;
  padding: 2rem;
  height: ${taskDialogHeight}px;
  ${(props) => props.theme.breakpoints.down("xs")} {
    flex-direction: column;
  }
`;

const Main = styled.div`
  width: 100%;
`;

const Header = styled.div`
  color: ${TASK_G};
  height: 2rem;
  h3 {
    margin: 0 0.25rem 0 0;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${PRIMARY};
  font-size: 1rem;
  textarea {
    color: ${PRIMARY};
    font-weight: bold;
    font-size: 20px;
    width: 100%;
    margin: 0 2rem 0 0.375rem;
    border: none;
    resize: none;
    &:focus {
      outline: none;
      border-radius: ${borderRadius}px;
      box-shadow: inset 0 0 0 2px ${PRIMARY};
    }
  }
`;

const Text = styled.p`
  color: #626e83;
  margin: 4px 0;
  font-size: 12px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const EditTaskDialog = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const columns = useSelector(selectAllColumns);
  const columnsById = useSelector(selectColumnsEntities);
  const tasksByColumn = useSelector((state: RootState) => state.task.byColumn);
  const taskId = useSelector((state: RootState) => state.task.editDialogOpen);
  const tasksById = useSelector((state: RootState) => state.task.byId);
  const [title, setTitle] = useState("");
  const titleTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const xsDown = useMediaQuery(theme.breakpoints.down("xs"));
  const open = taskId !== null;

  useEffect(() => {
    if (taskId && tasksById[taskId]) {
      setTitle(tasksById[taskId].title);
    }
  }, [open, taskId]);

  const handleSaveTitle = () => {
    console.log("inside: handleSaveTitle");
    if (taskId) {
      console.log("inside: handleSaveTitle/if -->", title);
      dispatch(patchTask({ id: taskId, fields: { title } }));
    }
  };

  const findTaskColumnId = () => {
    for (const columnId in tasksByColumn) {
      for (const id of tasksByColumn[columnId]) {
        if (id === taskId) {
          return columnId;
        }
      }
    }
    return null;
  };

  const columnId = findTaskColumnId();

  if (!taskId || !tasksById[taskId] || !columnId) {
    return null;
  }

  const task = tasksById[taskId];
  const column = columnsById[columnId];

  const handleTitleKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === Key.Enter) {
      e.preventDefault();
      titleTextAreaRef?.current?.blur();
    }
    if (e.keyCode === Key.Escape) {
      // Prevent propagation from reaching the Dialog
      e.stopPropagation();
    }
  };

  const handleClose = () => {
    dispatch(setEditDialogOpen(null));
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const handleColumnChange = (_: any, value: IColumn | null) => {
    if (!column || !value || column.id === value.id) {
      return;
    }
    const current: Id[] = [...tasksByColumn[column.id]];
    const next: Id[] = [...tasksByColumn[value.id]];

    const currentId = current.indexOf(task.id);
    const newPosition = 0;

    // remove from original
    current.splice(currentId, 1);
    // insert into next
    next.splice(newPosition, 0, task.id);

    const updatedTasksByColumn: TasksByColumn = {
      ...tasksByColumn,
      [column.id]: current,
      [value.id]: next,
    };
    dispatch(updateTasksByColumn(updatedTasksByColumn));
    handleClose();
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure? Deleting a task cannot be undone.")) {
      dispatch(deleteTask(task.id));
      handleClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // don't listen for input when inputs are focused
    if (
      document.activeElement instanceof HTMLInputElement ||
      document.activeElement instanceof HTMLTextAreaElement
    ) {
      return;
    }

    if (e.key === "Backspace" && e.metaKey) {
      handleDelete();
    }

    if (e.key === "Escape" && e.metaKey) {
      handleClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      onKeyDown={handleKeyDown}
      fullWidth
      keepMounted={false}
      fullScreen={xsDown}
      css={css`
        .MuiDialog-paper {
          max-width: 920px;
        }
      `}
    >
      <Content theme={theme}>
        <Close onClose={handleClose} />
        <Main>
          <Header>id: {task.id}</Header>
          <Title>
            <FontAwesomeIcon icon={faArrowUp} />
            <TextareaAutosize
              ref={titleTextAreaRef}
              value={title}
              onChange={handleTitleChange}
              onBlur={handleSaveTitle}
              onKeyDown={handleTitleKeyDown}
              data-testid="task-title"
            />
          </Title>
          <Autocomplete
            id="column-select"
            size="small"
            options={columns}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField {...params} label="Column" variant="outlined" />
            )}
            value={column}
            onChange={handleColumnChange}
            disableClearable
            openOnFocus
            data-testid="edit-column"
            css={css`
              width: 100%;
            `}
          />
          <ButtonsContainer>
            <Button
              startIcon={<FontAwesomeIcon fixedWidth icon={faTrash} />}
              onClick={handleDelete}
              data-testid="delete-task"
              size="small"
              css={css`
                font-size: 12px;
                font-weight: bold;
                color: ${TASK_G};
                margin-bottom: 2rem;
              `}
            >
              Delete task ({getMetaKey()}+⌫)
            </Button>
          </ButtonsContainer>
          <Text>
            Updated {formatDistanceToNow(new Date(task.modified))} ago
          </Text>
          <Text
            css={css`
              margin-bottom: 1rem;
            `}
          >
            Created {formatDistanceToNow(new Date(task.created))} ago
          </Text>
        </Main>
      </Content>
    </Dialog>
  );
};

export default EditTaskDialog;
