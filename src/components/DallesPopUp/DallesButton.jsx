import React, { Component } from 'react'
import './dallesButton.css'
import Dalles1 from '../../dalles/dalles1.jpeg'
import DallesModal from './DallesModal'

export default class DallesButton extends Component {

    state ={
        visible: false
    }

    montre = () => {
        this.setState({
            visible: true
        })
    }

    montre = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <div>
                <button className="button" onClick={this.montre}><img src={Dalles1} alt="" className="Dalles1"/></button>
                <DallesModal />
            </div>
        )
    }
}
