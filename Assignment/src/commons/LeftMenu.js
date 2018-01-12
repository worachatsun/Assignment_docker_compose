import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MdLockOutline, MdLocalShipping, MdAccountCircle, MdGridOn, MdLocalAtm, MdNotifications, MdAssignment } from 'react-icons/lib/md'
import { FaCreditCard } from 'react-icons/lib/fa'
import { TiClipboard } from 'react-icons/lib/ti'

export default class LeftMenu extends Component {
    render() {
        return (
            <Container>
                <MenuButton><MdAccountCircle size={20} style={{marginRight: 8}}/>Edit Profile</MenuButton>
                <MenuButton active={this.props.nowPath==='/'?true:false}><MdAssignment size={20} style={{marginRight: 8}} /><Link to="/" style={{textDecoration: 'none', color: '#6F727D'}}>Preferences</Link></MenuButton>
                <MenuButton><MdLockOutline size={20} style={{marginRight: 8}}/>Password</MenuButton>
                <MenuButton><MdNotifications size={20} style={{marginRight: 8}} />Notifications</MenuButton>
                <MenuButton><MdGridOn size={20} style={{marginRight: 8}} />Connected Accounts</MenuButton>
                <SepSection/>
                <MenuButton><TiClipboard size={24} style={{marginRight: 8}} />Orders</MenuButton>
                <MenuButton><FaCreditCard size={20} style={{marginRight: 8}} />Payment</MenuButton>
                <MenuButton><MdLocalShipping size={20} style={{marginRight: 8}} />Shipping</MenuButton>
                <SepSection/>
                <MenuButton><MdLocalAtm size={20} style={{marginRight: 8}} />Credits & Referrals</MenuButton>
            </Container>
        )
    }
}

const Container = styled.div`
    width: 100%;
    color: #6F727D;
    border-radius: 2px;
    background-color: white;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`

const MenuButton = styled.div`
    display: flex;
    flex: 1;
    padding: 5px 0 3px 15px;
    align-items: center;
    height: 30px;
    font-size: 14px;
    background-color: ${props => props.active?'#ddd':'white'};
    font-weight: ${props => props.active?'bold':'regular'};
    &:hover {
        font-weight: bold;
        background-color: #ddd;
    }
`

const SepSection = styled.div`
    border-bottom: 1px solid #ddd;
    margin: 0 10px 0 10px;
`