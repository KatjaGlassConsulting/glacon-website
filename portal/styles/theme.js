import { createTheme } from "@mui/material/styles";

const headlineFontFamily = { fontFamily: "Raleway, sans-serif" };

const theme = createTheme({
  palette: {
    primary: {
      main: "#3F3F3F",
    },
    secondary: {
      main: "#23114A",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 300,
          fontSize: '15px',
          color: '#3F3F3F',
          lineHeight: 1.75,
          hyphens: 'auto',
          overflowWrap: 'break-word',
        },
        p: {
          lineHeight: 1.6,
        },
        li: {
          "&:before": {
            fontSize: "200%",
          },
        },
        img: {
          maxWidth: '100%', // Apply max-width to all images
        },
        ".just80": {
          maxHeight: "80%",
        },
        ".pointer": {
          cursor: "pointer",
          color: "#23b1c4",
        },
        ".bordered": {
          border: "1px solid #B4A4DA !important",
        },
        ".logo": {
          maxHeight: "30px",
        },
        ".nowrap": {
          whiteSpace: "nowrap",
          display: "inline-block",
        },
        ".marginText": {
          margin: "8px 0",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Playfair Display, serif",
          lineHeight: 1, 
          fontSize: "1.4rem",
          fontWeight: "bold",
          textTransform: "none",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "Playfair Display, serif",
          lineHeight: 1, 
          fontSize: "1.2rem",
          fontWeight: "bold"
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 'bold', 
          backgroundColor: '#f0f0f0',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: '#ffffff', 
          },
          '&:nth-of-type(even)': {
            backgroundColor: '#f9f9f9', 
          },
        },
      },
    },
  },
});

export default theme;
