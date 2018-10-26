import * as React from 'react';

const style: React.CSSProperties = {
    backgroundColor: '#1595d4',
    color: '#FFF',
    fontSize: '20px',
    padding: '17px',
    textAlign: 'center',
}

export const Header: React.SFC = (): JSX.Element => {
    return (
        <div style={style}>
            <img style={{maxWidth: '100px'}} src="https://www.equalexperts.com/wp-content/themes/equalexperts/assets/logo.svg" />
            <span style={{display: 'block'}}>Calculator test</span>
        </div>
    )
};