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

import Dashboard from "views/Dashboard";
const port ="http://192.168.1.21:3001";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Analysis",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  }
];
export class HistoryTable extends Component {
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
      showDetails: false,
      editItem: false,
      selectedItem: null,
      newItem: null,
      word: [],
      tableWords: [],
      date: [],
      tableDates: [],
      ids:[],
      id:[],
      analyseObject: [],
      analysesObject: [],
    };
  }
  myClick = (event) => {
    
    alert("hhh");
    
  }
  componentDidMount() {
    axios.get(port+'/getAllResults').then(response => {
      // console.log(response.data);
       //this.setState({word : response.data[0].word});
       var table1= [];
       for( var i=0;i<response.data.length;i++){
            this.state.word.push(response.data[i].word);
            this.state.id.push(response.data[i].id);
            this.state.date.push(response.data[i].created);   
            this.state.analyseObject.push(response.data[i]);   
          }            
            this.setState({tableWords : this.state.word});
            this.setState({tableDates : this.state.date});
            this.setState({ids : this.state.id});
            this.setState({analysesObject : this.state.analyseObject});
            
     });
   

  }

  handleCheckbox = event => {
    const target = event.target;
    console.log(event.target);
    this.setState({
      [target.name]: target.checked
    });
  };
  
  remove1(i){
    
    axios.get(port+'/removeResult/'+i)
    .then(() => {
      console.log("ok");
      window.location.reload();
     //('#elementreload').reload();
     //document.getElementById('elementreload').reload()
    })
  
  };
  
   handleProfile = (event) => {
    window.location = 'dashboard';
  };
  renderTableData() {
    return this.state.analysesObject.map((AnalyseO, index) => {
       const { id, word, created } = AnalyseO //destructuring
       return (
          <tr  id="elementreload"key={id}>
            
            <td width="50%">{word}</td>
            <td>{created}</td>
            <td className="td-actions text-right">
            
              <button class="btn-simple btn btn-sm btn-info "   type="button" onClick={this.handleProfile}  ><i class="fa pe-7s-look"></i></button>
            
              <button class="btn-simple btn btn-sm btn-info "   type="button" onClick={(e) => this.remove1(id, e)}  ><i class="pe-7s-trash text-danger"></i></button>
            
          </td>
          </tr>
       )
    })
 }
 
 
  render() {
    
    
    var analysesTable = this.state.analysesObject;   
    var tableword =this.state.tableWords;
    var tableIds = this.state.ids;
    var dates = this.state.tableDates; 
    const view = <Tooltip id="view_tooltip">View Analysis</Tooltip>;
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
    var tasks = [];
    var number;

   
/*
    for (var i = 0; i < tableword.length; i++) {
      //number = "checkbox" + i;
      tasks.push(
        <tr key={i}>
          <td>
          <td > {tableIds[i]}</td>
          </td>
          <td>{tableword[i]}</td>
          <td>{dates[i]}</td>
          <td className="td-actions text-right">
            <OverlayTrigger placement="top" overlay={view}>
            <button class="btn-simple btn btn-sm btn-info "   type="button" onClick={handleProfile}  ><i class="fa pe-7s-look"></i></button>
              
             
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={remove}>
              <button class="btn-simple btn btn-sm btn-info "   type="button" onClick={(e) => this.remove1(i, e)}  ><i class="pe-7s-trash text-danger"></i></button>
              
            </OverlayTrigger>
          </td>
        </tr>
      );
    }
    */
   
    return (
      
            <tbody>
              
                  {this.renderTableData()}
            </tbody>
        
   )
  }
}

export default HistoryTable;
