import React from "react";
import { NewNoteInput } from "./NewNoteInput";
import "./styles.css";
import theme from "./theme";
import { makeStyles, Theme, ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { NotesState } from "./noteReducer";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "./actions";
const useStyles = makeStyles<Theme>((theme: Theme) => ({
  "@global": {
    body: {
      background: "#eff8f7",
    },
  },
}));

function App() {
  const classes = useStyles();
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();
  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <ThemeProvider theme={theme}>
      <NewNoteInput addNote={onAddNote} />
      <Paper>
        <ul>
          {notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
