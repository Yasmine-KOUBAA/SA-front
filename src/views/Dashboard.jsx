/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from 'axios'
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { WordCard } from "components/StatsCard/WordCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import {
  dataPie,
  legendPie,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";
const port ="http://192.168.1.21:3001";

class Dashboard extends Component {

  
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
  /*componentDidMount() {
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }*/
  //Constructeur + Methode
  constructor(props) {
    let valuestograph ;
    super(props);
    this.state = {
      showDetails: false,
      editItem: false,
      selectedItem: null,
      newItem: null,
      update1 :'',
      word : '',
      joy:'',
      fear : '',
      anger : '',
      sad : '',
      analytical : '',
      tentative : '',
      confident : '',
      positive :'',
      negative:'',
      neutral:'',
      iconUpdate : '',
      iconUpdateNow :"fa fa-refresh",
      iconUpdateago :"fa fa-clock-o",

    };
  }
  myChangeHandler = (event) => {
    this.setState({word: event.target.value});
    
    if(event.target.value != "")
      {
        this.setState({update1: "Updated now"});
        this.setState({iconUpdate : this.state.iconUpdateNow})
      }
    else {

      this.setState({update1: ""});
      this.setState({iconUpdate : this.state.iconUpdateago})
    }
    setTimeout(window.location.reload.bind(this), 5000);

    
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    var body={

      word:this.state.word
    }    
    axios.post(port+'/savefile',body)
    .then(() => {
      console.log(body);
    })


  }
  mySubmitHandler2 = (event) => {
    event.preventDefault();
    
   // var data = "Hello from the Node writeFile method!";      
   // alert("You are submitting " + this.state.word);
    var body={
      word: this.state.word,
      joy: this.state.joy,
      fear: this.state.fear,
      anger: this.state.anger,
      sad: this.state.sad,
      analytical: this.state.analytical,
      tentative: this.state.tentative,
      confident: this.state.confident,
      positive: this.state.positive,
      negative: this.state.negative,
      neutral: this.state.neutral,

    }    
    //console.log("body")
    axios.post(port+'/saveResult',body)
    .then(() => {
      console.log(body);
    })
    window.location.reload();


  }
  
  componentDidMount() {
    axios.get(port+'/getJSON').then(response => {
      console.log(response.data);
      this.setState({word : response.data[0].mot});
      this.setState({joy : response.data[1].score});
      this.setState({fear : response.data[2].score});
      this.setState({anger : response.data[3].score});
      this.setState({tentative : response.data[4].score});
      this.setState({confident : response.data[5].score});
      this.setState({analytical : response.data[6].score});
      this.setState({sad : response.data[7].score});
      this.setState({positive : response.data[8].score});
      this.setState({negative : response.data[9].score});
      this.setState({neutral : response.data[10].score});
    })  
  }
  render() {

    let header = '';
    if (this.state.word) {
      header = '';
    } else {
      header = '';
    }
    var optionsSales = {
      low: 0,
      high: 20,
      showArea: false,
      height: "245px",
      axisX: {
        showGrid: false
      }
    };
    var dataBar = {
      labels: [
        "Sadness",
        "Joy",
        "Anger",
        "Fear",
        "Analytical",
        "Confident",
        "Tentative"
      ],
      series: [
        [this.state.joy, this.state.fear, this.state.anger, this.state.tentative, this.state.confident,this.state.analytical,this.state.sad]
      ]
    };
    var dataPie = {
      labels: [
        "Positive",
        "Negative",
        "Neutral",
      ],
      series: [
       
          this.state.positive, 
          this.state.negative, 
          this.state.neutral
        
      ]
    };
    return (
      <div className="content">

       
         <form  onSubmit={this.mySubmitHandler.bind()} method="POST">
         <div class="form-row">
         
          <div class="form-group col-md-3">
              <input   type='text'  placeholder='word to Analyse'  onChange={this.myChangeHandler.bind(this)} />
          </div>
          <div class="form-group col-md-3">
          <button type="submit" class="btn btn-primary mb-2">Submit</button>
          </div></div>
      </form>
      <br></br>  
      <br></br>
           <form onSubmit={this.mySubmitHandler2.bind()} method="POST">
           <div class="col-md">
          <button type='submit' value='Save Analysis' class=" btn  btn-primary pull-right"><i class="pe-7s-diskette"></i></button> 
         </div>
          </form> 
          <br></br> 
          <hr></hr>
        <Grid fluid>
       
          <Row>
          <Col lg={6} sm={8}>
              <WordCard
                bigIcon={<i className="pe-7s-ribbon text-danger" />}
                statsText="Word"
                statsValue={this.state.word}
                statsIcon={<i className={this.state.iconUpdate} />}
                statsIconText={this.state.update1}
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Tweets"
                statsValue="+50"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6} >
              <StatsCard
                bigIcon={<i className="fa fa-facebook-square text-primary" />}
                color="facebook"
                statsText="Posts"
                statsValue="+50"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
           {/* <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-google-plus-square text-danger" />}
                statsText="Revenue"
                statsValue={this.state.joy}
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />
            </Col>
    */}
          </Row>
          <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Emotion Analysis"
                category="  "
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={this.optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
               // statsIcon="fa fa-clock-o"
                title="Sentiment Analysis"
                //category="Last Campaign Performance"
                //stats="Now"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph 
                      data={dataPie} 
                      type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>

          <Row>
           

            <Col md={11}>
              <Card
                title="Tweets"
                //category="Backend development"
                stats="Updated Now"
                statsIcon="fa fa-refresh"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
    
  }
}

export default Dashboard;
