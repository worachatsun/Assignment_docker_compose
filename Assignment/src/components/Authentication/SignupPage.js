import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import TopBar from '../../commons/TopBar'
import { connect } from 'react-redux'
import { signUp } from '../../actions'

class SignupPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            error: ''
        }
    }

    handleSubmit = () => {
        if(this.state.username!==''&this.state.email!==''&this.state.password!=='')
            this.props.signUp(this.state)
        else
            this.setState({error: 'Something went wrong on Username, Email or Password'})
    }

    render() {
        return (
            <div>
                <TopBar/>
                <OuterContainer>
                    <Container>
                        <div style={{fontWeight: 'bold', marginTop: 20, marginLeft: '2.3%', color: '#515C67'}}>Signup</div>
                        <SepSection />
                        <OuterContainer>
                            <Text>Username</Text>
                            <Input type="text" placeholder={'Username'} onChange={e => this.setState({username: e.target.value})}/>
                            <Text>Email</Text>
                            <Input type="email" placeholder={'Email'} onChange={e => this.setState({email: e.target.value})}/>
                            <Text>Password</Text>
                            <Input type="password" placeholder={'Password'} onChange={e => this.setState({password: e.target.value})}/>
                        </OuterContainer>
                        <OuterContainer>
                            <Text color={'red'}>{this.state.error!==''?this.state.error:''}</Text>
                        </OuterContainer>
                        <SepSection />
                        <OuterContainer>
                            <Link to="signin"><Button>Signin</Button></Link>
                            <Button onClick={() => this.handleSubmit()}>Signup</Button>
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
export default connect(null, { signUp })(SignupPage)