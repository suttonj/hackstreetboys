import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const joinMeColors = {
    ORANGE: '#ff8e00',
    ORANGE_HOVER: '#e35f00',
    GREEN: '#6be005',
    GREEN_HOVER: '#43bb04',
};

export const muiTheme = getMuiTheme({
    palette: {
        textColor: `black`,
        alternateTextColor: `black`,
        primary1Color: `white`,
        accent1Color: `darkgray`,
    },
});

export const slide = {
    padding: 15,
    minHeight: 600,
    color: `black`,
};
