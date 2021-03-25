import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";
import { plPL } from "@material-ui/core/locale";

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        light:"rgba(71, 133, 124, 0.5)",
        main: "#47857c",
      },
      secondary: {
        main: "#C7D3D4FF",
      },
    },
    typography: {
      fontFamily: ["Quicksand", "sans-serif"].join(","),
    },
    shape: {
      borderRadius: 10,
    },

    overrides: {
      MuiPaper:{
        root:{
          padding:"40px"
        },
      },
      MuiDialog: {
        paper: {
          backgroundColor: "rgba(0, 0, 0, .0) !important",
          marginLeft: "6px",
          marginRight: "8px",
          boxShadow: "none",
        },
      },
      MuiDialogContent: {
        root: {
          padding: "0px",
        },
      },
      MuiDialogActions: {
        root: {
          backgroundColor: "white",
        },
      },
      MuiIconButton: {
        root: {
          paddingLeft: "6px",
          paddingRight: "6px",
          "&:hover": {
            backgroundColor: "$labelcolor",
          },
        },
      },
      MuiButton: {
        startIcon: {
          marginRight: "4px",
        },
        outlined: {
          boxSizing:"content-box",
          height:"50px",
          padding: "2px 16px",
          margin: "8px 24px",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.15)",
          },
          borderWidth: "1px !important",
        },
        label: {
          fontSize:"1.4rem",
        },
      },
      MuiFormLabel:{
        root: {
          color:"#47857c",
        },
      },
      MuiOutlinedInput: {
        notchedOutline: {
          borderColor: "rgba(71, 133, 124, 0.5)"
        },
      },
    },
  },
  plPL
);

export default theme;
