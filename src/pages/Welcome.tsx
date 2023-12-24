import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <Box>
      <Link to="challenge">
        <Button variant="contained" size="large" sx={{ fontSize: "30px" }}>
          Start
        </Button>
      </Link>
    </Box>
  );
};

export default Welcome;
