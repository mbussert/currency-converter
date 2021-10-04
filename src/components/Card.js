import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import {
  Button,
  FormControl,
  Grid,
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
    <Grid container justifyContent="center" alignItems="center">
      <Card sx={{ maxWidth: 900, paddingBottom: 2 }}>
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
              sx={{ width: 250 }}
              placeholder="1.00"
              onChange={handleChange("amount")}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Amount"
            />
          </FormControl>
          <FormControl sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-from">From</InputLabel>
            <Select
              id="outlined-adornment-from"
              value={values.from}
              onChange={handleChange("from")}
              defaultValue="USD"
              label="From"
              sx={{ width: 250 }}
            >
              <MenuItem value="USD">USD - US Dollar</MenuItem>
              <MenuItem value="EUR">EUR - Euro</MenuItem>
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
              onChange={handleChange("to")}
              label="To"
              defaultValue="EUR"
              sx={{ width: 250 }}
            >
              <MenuItem value="USD">USD - US Dollar</MenuItem>
              <MenuItem value="EUR">EUR - Euro</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
        <Grid container sx={{ m: 1 }} spacing={2}>
          <Grid item>
            <FormControl>
              <InputLabel htmlFor="outlined-adornment-result">
                Result
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-result"
                value={values.result}
                onChange={handleChange("result")}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Result"
                readOnly
                sx={{ width: 250 }}
              />
            </FormControl>
          </Grid>
          <Grid item container xs>
            <Button sx={{ width: 250 }} variant="contained">
              Convert
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
