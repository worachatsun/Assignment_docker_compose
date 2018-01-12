import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { signOut } from '../actions'
import { FaCaretDown, FaUser, FaShoppingCart, FaInbox, FaBolt, FaSignOut } from 'react-icons/lib/fa';

class TopBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            dropdown: false
        }
    }

    render() {
        return (
            <HeaderDiv>
                <div>
                    {this.props.noSideBar?
                        ''
                    :
                        <SearchInput placeholder={'Search Fancy'} />
                    }
                </div>
                <HeaderText>
                    FANCY
                </HeaderText>
                <div>
                    {this.props.noSideBar?
                        ''
                    :
                        <IconGroup>
                            <FaShoppingCart fill={'#92979D'} />
                            <FaInbox fill={'#92979D'} />
                            <FaBolt fill={'#92979D'} />
                            <FaUser fill={'#92979D'} />
                            <span style={{color: '#92979D', marginTop: 3, fontSize: 14, fontWeight: 'bold'}}>You</span>
                            <Dropdown onClick={() => this.setState({dropdown: !this.state.dropdown})}>
                                <FaCaretDown fill={'#92979D'}/>
                                {this.state.dropdown?
                                    <DropdownContent>
                                        <div onClick={() => this.props.signOut()}><FaSignOut style={{marginRight: 10}}/>Sign out</div>
                                    </DropdownContent>
                                :
                                    ''
                                }
                            </Dropdown>
                        </IconGroup>
                    }
                </div>
            </HeaderDiv>
        )
    }
}

export default connect(null, { signOut })(TopBar)

const MakeRowDiv = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
`

const IconGroup = MakeRowDiv.extend`
    align-items: center;
    width: 160px;
`

const HeaderDiv = MakeRowDiv.extend`
    align-items: center;
    background-color: white;
    height: 48px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`

const SearchInput = styled.input`
    height: 24px;
    width: 170px;
    border-radius: 2px;
    border: 1px solid #ddd;
    background-color: #f2f2f2;
`

const HeaderText = styled.div`
    font-family: 'Quicksand';
    font-size: 1.5em;
    font-weight: bold;
    color: #515C67;
`

const Dropdown = styled.div`
     position: relative;
     display: inline-block;
 `

 const DropdownContent = styled.div`
     position: absolute;
     background-color: #f9f9f9;
     min-width: 100px;
     box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
     padding: 12px 16px;
     z-index: 1;
 `
