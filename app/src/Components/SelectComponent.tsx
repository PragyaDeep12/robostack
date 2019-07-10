import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles
} from "@material-ui/core/styles";

import FormHelperText from "@material-ui/core/FormHelperText";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import InputBase from "@material-ui/core/InputBase";

export const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3)
      }
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
      }
    }
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    formControl: {
      // margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
);

export default function SelectComponent(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: "",
    name: "hai"
  });
  const { list } = props;
  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);

  function handleChange(
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) {
    console.log(event.target.value);
    props.setValue(event.target.value);
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name as string]: event.target.value
    }));
  }

  return (
    <form className={classes.root} autoComplete="off" style={{ width: "100%" }}>
      <FormControl variant="outlined" className={classes.formControl} fullWidth>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          {props.for}
        </InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          input={
            <OutlinedInput
              labelWidth={labelWidth}
              name="age"
              id="outlined-age-simple"
            />
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {list.map((item, index) => {
            return <MenuItem value={item}>{item.toUpperCase()}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </form>
  );
}
