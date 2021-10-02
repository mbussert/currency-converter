import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

export default function RecipeReviewCard() {
  const [values, setValues] = React.useState({
    amount: "",
    from: "",
    to: "",
    result: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Card sx={{ maxWidth: 1000, paddingBottom: 2 }}>
      <CardHeader
        title="Currency Converter"
        subheader="React Group Learn Project"
      />
      <CardContent>
        <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            type="number"
            value={values.amount}
            placeholder="1.00"
            onChange={handleChange("amount")}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
        <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-from">From</InputLabel>
          <Select
            id="outlined-adornment-from"
            value={values.from}
            placeholder="USD - US Dollar"
            onChange={handleChange("from")}
            startAdornment={
              <InputAdornment position="start">Flag</InputAdornment>
            }
            label="From"
          >
            <MenuItem value="USD">USD - US Dollar</MenuItem>
          </Select>
        </FormControl>
        <IconButton size="large" sx={{ marginTop: 1 }}>
          <SwapHorizIcon fontSize="inherit" />
        </IconButton>
        <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-to">To</InputLabel>
          <Select
            id="outlined-adornment-to"
            value={values.to}
            placeholder="EUR - Euro"
            onChange={handleChange("to")}
            startAdornment={
              <InputAdornment position="start">Flag</InputAdornment>
            }
            label="To"
          >
            <MenuItem value="EUR">EUR - Euro</MenuItem>
          </Select>
        </FormControl>
      </CardContent>
      <CardContent>
        <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-result">Result</InputLabel>
          <OutlinedInput
            id="outlined-adornment-result"
            value={values.result}
            onChange={handleChange("result")}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Result"
            readOnly
          />
        </FormControl>
        <Button variant="contained">Convert</Button>
      </CardContent>
    </Card>
  );
}
