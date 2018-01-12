import React, { Component } from 'react'
import styled from 'styled-components'
import { FaCaretDown, FaCaretUp } from 'react-icons/lib/fa';

export default class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownActive: false,
            dropdownValue: this.props.displayValue
        }
        this.props.setData(this.props.value[0])
    }

    setDropdownValue(value) {
        this.setState({
            dropdownValue: value,
            dropdownActive: !this.state.dropdownActive
        })
        this.props.setData(value)
    }

    render() {
        return (
            <DropdownContainer>
                <div onClick={() => this.setState({dropdownActive: !this.state.dropdownActive})}>
                    <DropdownContent>
                        {this.props.displayValue}{this.state.dropdownActive?<FaCaretUp/>:<FaCaretDown/>}
                    </DropdownContent>
                </div>
                {this.state.dropdownActive?menu(this.props.value, this.setDropdownValue.bind(this)):''}
            </DropdownContainer>
        )
    }
}

const menu = (data = [], setDropdownValue) => (
    <DropdownList>
        {data.map((value, index) => <DropdownContent onClick={() => setDropdownValue(value)} key={index}>{value}</DropdownContent>)}
    </DropdownList>
)

const DropdownContainer = styled.div`
    width: 100%;
    background-color: #F8F8F8;
    border: 1px solid #D1D5D7;
    border-radius: 2px;
    margin: 5px 0 13px 0;
`
const DropdownContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4px 0 4px;
    font-size: 0.9em;
    &:hover {
        background-color: #ddd;
    }
`

const DropdownList = styled.div`
    background-color: #F8F8F8;
    position: absolute;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    max-height: 160px;
    padding: 12px 16px;
    overflow-y: scroll;
`