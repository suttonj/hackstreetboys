import React from 'react';

import { joinMeColors as colors } from '~/shared/styles';

export default class Header extends React.Component {
    render() {
        return (
            <div style={styles.header}>
                *NGAGE
            </div>
        );
    }
}

const styles = {
    header: {
        color: 'white',
        backgroundColor: colors.ORANGE,
    },
};
