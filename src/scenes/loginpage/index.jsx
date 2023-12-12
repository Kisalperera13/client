import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";



const LoginPage = () => {

  const navigate = useNavigate();

  const handleAdminButtonClick = () => {
    navigate('/admin');
  };

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Alumna DCS
        </Typography>
      </Box>
        <Button
            variant="contained"
            color="primary"
            style={{
              position: 'absolute',
              top: '1.3rem',
              right: '0.5rem',
            }}
            onClick={() => {
              handleAdminButtonClick()
            }}
          >
          Admin Panel
        </Button>


      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Alumna DCS !
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;