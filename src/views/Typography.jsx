/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 yasmine (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by yasmine

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
import { WordCard } from "components/StatsCard/WordCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";

import Button from "components/CustomButton/CustomButton.jsx";
import {
 
  legendPie,
  responsiveSales,
  legendSales,
  
} from "variables/Variables.jsx";
const port ="http://192.168.1.21:3001";
class Typography extends Component {
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
      word1 : '',
      word2 : '',
      word11 : '',
      word21 : '',
      words:'',
      joy1:'',
      fear1 : '',
      anger1 : '',
      sad1 : '',
      analytical1 : '',
      tentative1 : '',
      confident1 : '',

      joy2:'',
      fear2 : '',
      anger2 : '',
      sad2 : '',
      analytical2 : '',
      tentative2 : '',
      confident2 : '',
      positive1 :'',
      negative1:'',
      neutral1:'',
      positive2 :'',
      negative2:'',
      neutral2:'',
      iconUpdate : '',
      iconUpdateNow :"fa fa-refresh",
      iconUpdateago :"fa fa-clock-o",
      words:'',

    };
  }
  myChangeHandler = (event) => {
    this.setState({words: event.target.value});
    this.setState({word11: event.target.value});
    this.setState({iconUpdate : this.state.iconUpdateNow})
    this.setState({update1: "Updated now"});
    
  }
  myChangeHandler1 = (event) => {
    
    this.setState({word21: event.target.value});
    this.setState({words: this.state.word11 +"  Vs  "+event.target.value});
    this.setState({iconUpdate : this.state.iconUpdateNow})
    this.setState({update1: "Updated now"});
    
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    this.setState({word1: this.state.word11});
    this.setState({word2: this.state.word21});
    //window.location.reload();
   // var data = "Hello from the Node writeFile method!";      
   // alert("You are submitting " + this.state.word);
    var body={

      word1:this.state.word11,
      word2:this.state.word21,
    }
    //alert(this.state.word2+" "+this.state.word1);
    //console.log("body")
    axios.post(port+'/savefile2',body)
    .then(() => {
      console.log(body);
    })

  }
  componentDidMount() {
    axios.get(port+'/getJSON2').then(response => {
      console.log(response.data);
      this.setState({word1 : response.data[0].mot});
      this.setState({joy1 : response.data[1].score});
      this.setState({fear1 : response.data[2].score});
      this.setState({anger1 : response.data[3].score});
      this.setState({tentative1 : response.data[4].score});
      this.setState({confident1 : response.data[5].score});
      this.setState({analytical1 : response.data[6].score});
      this.setState({sad1 : response.data[7].score});
      this.setState({positive1 : response.data[8].score});
      this.setState({negative1 : response.data[9].score});
      this.setState({neutral1 : response.data[10].score});
      

    })  
    axios.get(port+'/getJSON3').then(response => {
      console.log(response.data);
      this.setState({word2 : response.data[0].mot});
      this.setState({joy2 : response.data[1].score});
      this.setState({fear2 : response.data[2].score});
      this.setState({anger2 : response.data[3].score});
      this.setState({tentative2 : response.data[4].score});
      this.setState({confident2 : response.data[5].score});
      this.setState({analytical2 : response.data[6].score});
      this.setState({sad2 : response.data[7].score});
      this.setState({positive2 : response.data[8].score});
      this.setState({negative2 : response.data[9].score});
      this.setState({neutral2 : response.data[10].score});
      this.setState({words : this.state.word1 +" Vs "+ this.state.word2});
      /*
      for(var i=1;i<response.data.length;i++){
      
      this.state.dataPie.labels.push(response.data[i].tone_name);
      this.state.dataPie.series.push(response.data[i].score);
      console.log(response.data[i].score)
      } 
      */


    })  
  }
  render() {
    var dataPie1 = {
      labels: [
        "Positive",
        "Negative",
        "Neutral",
      ],
      series: [
       
          this.state.positive1, 
          this.state.negative1, 
          this.state.neutral1
        
      ]
    };
    var dataPie2 = {
      labels: [
        "Positive",
        "Negative",
        "Neutral",
      ],
      series: [
       
          this.state.positive2, 
          this.state.negative2, 
          this.state.neutral2
        
      ]
    };
    let dataBar = {
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
        [this.state.sad1,  this.state.joy1, this.state.anger1, this.state.fear1, this.state.analytical1, this.state.confident1, this.state.tentative1],
        [this.state.sad2,  this.state.joy2, this.state.anger2, this.state.fear2, this.state.analytical2, this.state.confident2, this.state.tentative2]
      ]
    };
    var legendBar = {
      names: [this.state.word1, this.state.word2],
      types: ["info", "danger"]
    };
    var optionsBar = {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: "245px"
    };
    var responsiveBar = [
      [
        "screen and (max-width: 640px)",
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value[0];
            }
          }
        }
      ]
    ];
    
    return (
      <div className="content">
         <form onSubmit={this.mySubmitHandler.bind()} method="POST">
         <div class="form-row">
         
         <div class="form-group col-md-3">
             <input   type='text' value={this.state.word11}  placeholder='word to Analyse'  onChange={this.myChangeHandler.bind(this)} />
         </div>
         <div class="form-group col-md-3">
             <input   type='text'  placeholder='word to Analyse' value={this.state.word21} onChange={this.myChangeHandler1.bind(this)} />
         </div>
         <div class="form-group col-md-3">
         <button type="submit" class="btn btn-primary mb-2">Submit</button>
         </div></div>

         
      </form>
      <br></br>
      <br></br>
      <hr></hr>
        <Grid fluid>
          <Row>
          <Col lg={6} sm={8}>
              <WordCard
                bigIcon={<i className="pe-7s-ribbon text-danger" />}
                statsText="Word"
                statsValue={this.state.words}
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
            
          </Row>
          <Row>
            <Col md={12}>
              <Card
                //statsIcon="fa fa-history"
                id="chartHours"
                title="Emotion Analysis"
                category="  "
               // stats="Updated 3 minutes ago"
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
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>
            </Row>
            <Row>
            <Col md={6}>
              <Card
                //
                title={this.state.word1}
                category="Sentiment Analysis"
                //stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph 
                      data={dataPie1} 
                      type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
            <Col md={6}>
              <Card
               // statsIcon="fa fa-clock-o"
                title={this.state.word2}
                category="Sentiment Analysis"
                //stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph 
                      data={dataPie2} 
                      type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          
          </Row>
          
        </Grid>
      </div>
    );
  }
}

export default Typography;
