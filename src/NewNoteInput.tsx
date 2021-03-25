import React, { ChangeEvent, useState } from 'react'
import { makeStyles, Theme} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme:Theme) => ({
    wrapper: {
      boxSizing:"content-box",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding:"32px",
    },
  }));

interface NewNoteInputProps {
    addNote(note: string): void;
  }

export const NewNoteInput: React.FC<NewNoteInputProps> = ({addNote}) => {
    const classes = useStyles();
    const [note, setNote]= useState("");
    const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
setNote(event.target.value)
    }
    const onAddClick=()=>{
        addNote(note);
        setNote("");
    }
    return (
        <div className={classes.wrapper}>
            <TextField
            color="primary"
      variant="outlined"
      label={"Notatka"}
      value={note}
      onChange={handleChange}
    />
        <Button
            variant={"outlined"}
            color="primary"
            onClick={onAddClick}
          >
           Dodaj notatkę
          </Button>
        </div>
    )
}
