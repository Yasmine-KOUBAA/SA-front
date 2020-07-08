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
import { Grid, Row, Col } from "react-bootstrap";
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from 'axios'
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { HistoryTable } from "components/Tasks/HistoryTable.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
export class History extends Component {
    
  handleCheckbox = event => {
    const target = event.target;
    console.log(event.target);
    this.setState({
      [target.name]: target.checked
    });
  };
  render() {
  
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col  md={10}>
              <Card
                title="Analysis History"
                //category="Backend development"
                //stats="Updated Now"
                //statsIcon="fa fa-refresh"
                content={
                  <div className="table-full-width">
                    <table className="table">
                    <tr>
                      
                      <th>    Words</th>
                      <th stule ="align =">date</th>
                      <th className="td-actions text-right">
                       
                      </th>
                    </tr>
                      <HistoryTable />
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
export default History;
