/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Yasmine 
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Yasmine

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-1.jpg";
import axios from 'axios'
const port ="http://192.168.1.21:3001";
class UserProfile extends Component {
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
      name :'',
      email : '',
      
      last_name : '',
      company : '',
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    this.setState({word1: this.state.word11});
    this.setState({word2: this.state.word21});
    var body={

      word1:this.state.word1,
      word2:this.state.word2,
    }
    axios.post(port+'/savefile2',body)
    .then(() => {
      console.log(body);
    })

  }
  componentDidMount() {
    axios.get(port+'/getuserById/22').then(response => {
      console.log(response.data);
      this.setState({name : response.data[0].first_name});
      this.setState({last_name : response.data[0].last_name});
      this.setState({email : response.data[0].email});
      this.setState({company: response.data[0].company});
    }) 
  } 
  render() {
    var first_name1= this.state.name;
    var last_name1= this.state.last_name;
    var email= this.state.email;
    var company= this.state.company;
    
    return (
      
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "First name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "First name",
                          ///////////////
                          defaultValue: first_name1
                          //onChange: {myChangeHandler1}
                        },
                        {
                          label: "Last name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Last name",
                          ///////////////////
                          defaultValue: last_name1,
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-7", "col-md-5"]}
                      properties={[
                        {
                          label: "Email address",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email",
                          ////////////////
                          defaultValue: email
                        },
                        {
                          label: "Phone number",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Phone",
                          /////////////////
                          defaultValue: "+21622443355",
                        }
                      ]}
                    />
                     <FormInputs
                      ncols={["col-md-7.5"]}
                      properties={[
                        {
                          label: "Company ",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Company name",
                          
                          defaultValue: company,
                        }
                      ]}
                    />
    
                    <Button bsStyle="info" pullRight fill type="submit" >
                      Update Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name= {this.state.name +" "+this.state.last_name}
                userName= {this.state.email}
                description={
                  <span>
                    {this.state.company}
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <a href="https://www.facebook.com/profile.php?id=100000199582071">
                      <i className="fa fa-facebook-square" /></a>
                    </Button>
                    <Button simple>
                    <a href="https://twitter.com/yasmine_koubaa">
                      <i className="fa fa-twitter" /></a>
                    </Button>
                    <Button simple>
                    <a href="https://www.linkedin.com/in/yasmine-koubaa-53b86b138/">
                      <i className="fa fa-linkedin" /></a>
                    </Button>
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

export default UserProfile;
