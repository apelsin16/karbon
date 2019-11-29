import React, { Component } from 'react';
import Title from './components/title';
import Device from './components/device';
import { Accordion, Card } from "react-bootstrap";
import './App.css';
import json from './api/api.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const getNodeForEdit = obj2 => {
  const arr = [];
  Object.keys(obj2).map(levelOne => {
    obj2[levelOne].map(el => {
      Object.keys(el).map(levelTwo => {
        el[levelTwo].map(i => {
          if (Object.entries(i).flat()[1] === 'number') {
            const levelTree = Object.entries(i).flat()[0];
            arr.push({levelOne, levelTwo, levelTree})
          }
        })
      })
    })
  })
  return arr
}

export default class App extends Component {

  state = {
    deviceTree: {},
    deviceTreeTypeMap: {},
    editableItems: []
  }

  componentDidMount() {
    this.setState({
      deviceTree: json.api.deviceTree,
      deviceTreeTypeMap: json.api.deviceTreeTypeMap,
      editableItems: getNodeForEdit(json.api.deviceTreeTypeMap)
    })
  }
  render () {
    const { deviceTree, deviceTreeTypeMap, editableItems } = this.state;
    return (
      <div className="container">
        {console.log(this.state)}
        <h1>Mapping</h1>
        <h2>deviceTree</h2>
        <Accordion defaultActiveKey='0'>
          {Object.keys(deviceTree).map((device, idx) => (
            <Card key={idx}>
              <Title text={device} idx={idx}/>
              <Device device={deviceTree[device]} idx={idx} editableItems={editableItems} />           
            </Card>
          ))}
        </Accordion>
        {/* <h2>deviceTreeTypeMap</h2>
        <Accordion defaultActiveKey='0'>
          {Object.keys(deviceTreeTypeMap).map((device, idx) => (
            <Card key={idx}>
              <Title text={device} idx={idx}/>
              <Device device={deviceTreeTypeMap[device]} idx={idx} />           
            </Card>
          ))}
        </Accordion> */}
      </div>
  );
}
  
}

