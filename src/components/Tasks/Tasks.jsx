/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Yasmine(https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Yasmine

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from 'axios';

const port ="http://192.168.1.21:3001";
export class Tasks extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  constructor(props) {
    let valuestograph ;
    super(props);
    this.state = {
      tweetsTable : [],
      tweetTable: [],

    };
  }
  handleCheckbox = event => {
    const target = event.target;
    console.log(event.target);
    this.setState({
      [target.name]: target.checked
    });
  };
  componentDidMount() {
    axios.get(port+'/gettweets').then(response => {
      for( var i=0;i<response.data.length;i++){
      //console.log(response.data);
        this.state.tweetTable.push(response.data[i]);   
        
      }
      this.setState({tweetsTable : this.state.tweetTable});
    })  
  }
  renderTableData() {
    return this.state.tweetsTable.map((AnalyseO, index) => {
       const { user_name, image, tweet } = AnalyseO //destructuring
       return (
          <tr  key={user_name}>
            <td width="10%">
            <img 
                src={image} 
                
            />       
              </td>
            <td width="10%">{user_name}</td>
            <td>{tweet}</td>
            
          </tr>
       )
    })
 }
  render() {
  
    return <tbody>{this.renderTableData()}</tbody>;
  }
}

export default Tasks;
