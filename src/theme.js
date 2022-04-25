import {createTheme} from '@mui/material'

export const theme = createTheme({
    palette:{
        primary:{
            main:"hsl(0, 0%, 98%)"
        },
        secondary:{
            main : "hsl(0, 0%, 8%)"
        },
        neutral : {
            main : "hsl(0, 0%, 41%)"
        }
    },
    typography: {
        fontFamily:[
            'Epilogue', 
            'sans-serif'
        ].join(','),
        fontSize: '1.125rem',

    }
})