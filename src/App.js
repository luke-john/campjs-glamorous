import React, { Component } from 'react'

import logo from './logo.svg'

import {
    StyledApp,
    StyledHeader,
    StyledIntro,
    StyledLogo,
} from './App.glamorous'

class App extends Component {
    render() {
        return (
            <StyledApp>
                <StyledHeader>
                    <StyledLogo
                        src={logo}
                        className="App-logo"
                        alt="logo"
                    />
                    <h2>Welcome to React</h2>
                </StyledHeader>
                <StyledIntro>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </StyledIntro>
            </StyledApp>
        )
    }
}

export default App
