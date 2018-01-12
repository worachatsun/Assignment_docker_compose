import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import TopBar from '../../commons/TopBar'
import { connect } from 'react-redux'
import { signIn } from '../../actions'

class SigninPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            error: ''
        }
    }

    handleSubmit = () => {
        if(this.state.username!==''&this.state.password!=='')
            this.props.signIn(this.state)
        else
            this.setState({error: 'Please insert Username or Password'})
    }

    render() {
        return (
            <div>
                <TopBar noSideBar/>
                <OuterContainer>
                    <Container>
                        <div style={{fontWeight: 'bold', marginTop: 20, marginLeft: '2.3%', color: '#515C67'}}>Signin</div>
                        <SepSection />
                        <OuterContainer>
                            <Text>Username</Text>
                            <Input type="text" placeholder={'Username or Email'} onChange={e => this.setState({username: e.target.value})}/>
                        </OuterContainer> 
                        <OuterContainer>
                            <Text>Password</Text>
                            <Input type="password" placeholder={'Password'} onChange={e => this.setState({password: e.target.value})}/>
                        </OuterContainer>
                        <OuterContainer>
                            <Text color={'red'}>{this.state.error!==''?this.state.error:''}</Text>
                        </OuterContainer>
                        <SepSection />
                        <OuterContainer>
                            <Button onClick={() => this.handleSubmit()}>Signin</Button>
                            <Link to="signup"><Button>Signup</Button></Link>
                        </OuterContainer>
                    </Container>
                </OuterContainer>
            </div>
        )
    }
}

const OuterContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    margin-top: 15px;
`

const Container = styled.div`
    width: 50%;
    margin-top: 10%;
    background-color: white;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`
const SepSection = styled.div`
    margin: 15px 0 15px 0;
    border-bottom: 1px solid #ddd;
`

const Text = styled.div`
    color: ${props => props.color || '#6F727D'};
    font-size: 1em;
`

const Button = styled.button`
    height: 34px;
    width: 200px;
    border-radius: 4px;
    margin: 0 15px 15px 15px;
    border: 1px solid #515C67;
    color: #515C67;
    font-size: 0.8em;
    font-family: 'Hind';
    font-weight: bold;
    background-color: '#F8F8F8';
    &:hover {
        font-weight: bold;
        background-color: #ddd;
    }
`
const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: 3px;
    margin: 0 10px 0 10px;
`

export default connect(null, { signIn })(SigninPage)