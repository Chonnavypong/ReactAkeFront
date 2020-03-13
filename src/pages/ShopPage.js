import React, { Component } from "react";
import axios from "axios";

export default class ShopPage extends Component {
  state = {
    menus: [],
    shop: {},
    isLoading: true
  };
  async getData(id) {
    try {
      let res = await axios.get(
        `https://foodtt-delivery-api.herokuapp.com/api/shop/${id}`
      );
      // console.log(res.data.data.photo);
      this.setState({
        menus: res.data.data.menus,
        shop: res.data.data,
        isLoading: false
      });
    } catch (err) {
      console.log(err);
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      this.getData(id);
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-8">
              <>
                {this.state.shop.photo && (
                  <img
                    // src={"https://foodtt-delivery-api.herokuapp.com/images/" + this.state.shop.photo}
                    src={`https://foodtt-delivery-api.herokuapp.com/images/${this.state.shop.photo}`}
                    alt={this.state.shop.name}
                    height="100"
                    className="img-fluid"
                  />
                )}
              </>
              <div>
                {this.state.isLoading && (
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                )}
              </div>
              <h1> {this.state.shop.name} </h1>
            </div>
            <div className="col-md-4">
              {this.state.menus.map(menu => (
                <div className="card my-2" key={menu._id}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h5>{menu.name}</h5>
                      <p>ราคา {menu.price} บาท</p>
                      <a className="btn btn-success">ซื้อเลย</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
