import { InputAdornment, TextField, useMediaQuery } from "@mui/material";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  const _700 = useMediaQuery("(min-width:700px)");
 
  return (
    <>
      <TextField
        sx={{
          width: "90%",
          maxWidth: "750px",
          boxShadow: "5px 5px 5px gray",
          borderRadius: "15px",
          px: 2,
          py: 1,
          my: 5,
          mx: "29rem",
          "& .MuiOutlinedInput-root": {
            color: "black",
            "& fieldset": {
              border: "none",
            },
          },
        }}
        placeholder="search user..."
        
      />
    </>
  );
};
export default SearchInput;