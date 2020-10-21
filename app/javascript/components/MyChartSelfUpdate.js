import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPageUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status : "new",
      dataLine: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
        datasets: [
          {
            label: "My First dataset",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(225, 204,230, .3)",
            borderColor: "rgb(205, 130, 158)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(205, 130,1 58)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 120]
          },
          {
            label: "My Second dataset",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(184, 185, 210, .3)",
            borderColor: "rgb(35, 26, 136)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(35, 26, 136)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220, 1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [28, 48, 40, 19, 86, 27, 90, 115]
          }
        ]
      }
    }
  }
  
  componentDidMount() {
    this.interval = setInterval(() => this.autoupdate(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }  
  //setInterval(this.state.dataLine);

  autoupdate() {

    let labels = [...this.state.dataLine.labels];
    labels.push( "new Label" && Math.random() * 100);

    let ds1 = [...this.state.dataLine.datasets[0].data]
    ds1.push( parseInt(Math.random() * 100) );
    let ds2 = [...this.state.dataLine.datasets[1].data]
    ds2.push( parseInt(Math.random() * 100) );

    //alert(ds1 && "<br>" && ds2);

    this.setState ({dataLine: {
                      labels: labels, 
                      datasets: [{ label: ["sample1"], 
                                  fill: true,
                                  lineTension: 0.3,
                                  backgroundColor: "rgba(225, 204,230, .3)",
                                  borderColor: "rgb(205, 130, 158)",
                                  borderCapStyle: "butt",
                                  borderDash: [],
                                  borderDashOffset: 0.0,
                                  borderJoinStyle: "miter",
                                  pointBorderColor: "rgb(205, 130,1 58)",
                                  pointBackgroundColor: "rgb(255, 255, 255)",
                                  pointBorderWidth: 10,
                                  pointHoverRadius: 5,
                                  pointHoverBackgroundColor: "rgb(0, 0, 0)",
                                  pointHoverBorderColor: "rgba(220, 220, 220,1)",
                                  pointHoverBorderWidth: 2,
                                  pointRadius: 1,
                                  pointHitRadius: 10,
                                  data: ds1
                                },
                                {
                                  label: ["sample2"], 
                                  fill: true,
                                  lineTension: 0.3,
                                  backgroundColor: "rgba(184, 185, 210, .3)",
                                  borderColor: "rgb(35, 26, 136)",
                                  borderCapStyle: "butt",
                                  borderDash: [],
                                  borderDashOffset: 0.0,
                                  borderJoinStyle: "miter",
                                  pointBorderColor: "rgb(35, 26, 136)",
                                  pointBackgroundColor: "rgb(255, 255, 255)",
                                  pointBorderWidth: 10,
                                  pointHoverRadius: 5,
                                  pointHoverBackgroundColor: "rgb(0, 0, 0)",
                                  pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                                  pointHoverBorderWidth: 2,
                                  pointRadius: 1,
                                  pointHitRadius: 10,
                                  data: ds2
                                }
                            ]
                      } 
                  });

    //alert(labels);
    //let ds1 = this.state.dataLine.datasets[0].data
    //ds1.push( parseInt(Math.random() * 100) );
    //let ds2 = this.state.dataLine.datasets[1].data
    //ds2.push( parseInt(Math.random() * 100) );
    //alert(ds1);
    //param.datasets[0].data.setState({data: ds1});
    //param.datasets[0].data.setState({data: ds1});
    this.setState({status: "old"});
    //alert( this.state.dataLine.datasets[0].data );
    //this.setState({dataLine.datasets.data : [ds1, ds2] })
  }
  
  render() {
    return (
      <MDBContainer>
        <h3> {this.state.status} </h3>
        <h3 className="mt-5">Line chart</h3>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default ChartsPageUp;