import React, { useEffect, useState } from "react";
import {
  Dialog,
  TextField,
  Button,
  CircularProgress,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { RootState } from "store";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

import { setCreateDialogOpen, createTask } from "./TaskSlice";
import { PRIMARY } from "utils/colors";
import { PRIORITY_2, Key } from "const";
import { Priority, BoardMember, Label } from "types";
import getMetaKey from "utils/shortcuts";

const DialogTitle = styled.h3`
  color: ${PRIMARY};
  margin-top: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #ccc;
  padding: 1rem 2rem;
`;

const CreateTaskDialog = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.task.createDialogOpen);
  const columnId = useSelector(
    (state: RootState) => state.task.createDialogColumn
  );
  const createLoading = useSelector(
    (state: RootState) => state.task.createLoading
  );
  const [titleTouched, setTitleTouched] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [assignees, setAssignees] = useState<BoardMember[]>([]);
  const [priority, setPriority] = useState<Priority | null>({
    value: "M",
    label: "Medium",
  });
  const [labels, setLabels] = useState<Label[]>([]);
  const xsDown = useMediaQuery(theme.breakpoints.down("xs"));

  const setInitialValues = () => {
    if (columnId) {
      setTitleTouched(false);
      setTitle("");
      setDescription("");
      setAssignees([]);
      setPriority(PRIORITY_2);
      setLabels([]);
    }
  };

  useEffect(() => {
    setInitialValues();
  }, [open]);

  const handleClose = () => {
    if (window.confirm("Are you sure? Any progress made will be lost.")) {
      dispatch(setCreateDialogOpen(false));
    }
  };

  const handleCreate = async () => {
    setTitleTouched(true);
    if (columnId && priority) {
      const newTask = {
        title,
        description,
        column: columnId,
        labels: labels.map((l) => l.id),
        assignees: assignees.map((a) => a.id),
        priority: priority.value,
      };
      dispatch(createTask(newTask));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode == Key.Enter && e.metaKey) {
      handleCreate();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      keepMounted={false}
      fullScreen={xsDown}
    >
      <Content onKeyDown={handleKeyDown}>
        <DialogTitle>New Boat</DialogTitle>

        <TextField
          autoFocus
          id="create-task-title"
          data-testid="create-task-title"
          label="Boat Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
          fullWidth
          size="small"
          onBlur={() => setTitleTouched(true)}
          error={titleTouched && !title}
        />
      </Content>

      <Footer theme={theme}>
        <Button
          startIcon={
            createLoading ? (
              <CircularProgress color="inherit" size={16} />
            ) : (
              <FontAwesomeIcon icon={faRocket} />
            )
          }
          variant="contained"
          color="primary"
          size="small"
          onClick={handleCreate}
          disabled={createLoading}
          data-testid="task-create"
          css={css`
            ${theme.breakpoints.down("xs")} {
              flex-grow: 1;
            }
          `}
        >
          Create issue ({getMetaKey()}+⏎)
        </Button>
        <Button
          css={css`
            margin-left: 1rem;
          `}
          onClick={handleClose}
        >
          Cancel (Esc)
        </Button>
      </Footer>
    </Dialog>
  );
};

export default CreateTaskDialog;
