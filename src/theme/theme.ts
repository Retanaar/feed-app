import { createTheme } from '@mui/material'
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

export const theme = createTheme({
    palette: {
        secondary: {
            main: '#52C8B4',
            contrastText: '#FFFFFF'
        }
    },
    components:  {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    boxShadow: 'none',
                    textTransform: 'capitalize',
                    marginTop: '8px',
                    '&:hover': {
                        boxShadow: 'none'
                    }
                },

            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: '12px',
                    backgroundColor: '#F6F6F6',
                    '&.MuiPopover-paper': {
                        padding: 0
                    }
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
              root: {
                '--TextField-brandBorderHoverColor': '#52C8B4',
                '--TextField-brandBorderFocusedColor': '#52C8B4',
                '& label.Mui-focused': {
                  color: 'var(--TextField-brandBorderFocusedColor)',
                },

              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                  borderColor: 'var(--TextField-brandBorderHoverColor)',
                },
                [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                  borderColor: 'var(--TextField-brandBorderFocusedColor)',
                },
              },
            },
          },
    }
})