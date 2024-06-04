import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Dropdown({ isDarkMode }) {
  const [selectedFont, setSelectedFont] = React.useState("");

  const handleChange = (event) => {
    setSelectedFont(event.target.value);
  };

  React.useEffect(() => {
    const fontFamilies = {
      "": "monospace",
      10: "serif",
      20: "sans-serif",
    };
    document.body.style.fontFamily = fontFamilies[selectedFont];
  }, [selectedFont]);

  return (
    <div>
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={selectedFont}
            onChange={handleChange}
            displayEmpty
            inputProps={{
              "aria-label": "Without label",
            }}
            sx={{
              border: "none", // Remove the border
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none", // Remove the outline border
              },

              color: isDarkMode ? "white" : "black",
              fontWeight: "bold",

              fontFamily: "unset",
            }}
          >
            <MenuItem value="">
              <em>Mono</em>
            </MenuItem>
            <MenuItem value={10}>Serif</MenuItem>
            <MenuItem value={20}>Sans Serif</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
