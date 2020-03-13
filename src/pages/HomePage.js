import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { getDefaultNormalizer } from "@testing-library/react";

export default class HomePage extends Component {
  state = {
    shops: [],
    isLoading: true
  };

  async getData() {
    try {
      let res = await axios.get(
        "https://foodtt-delivery-api.herokuapp.com/api/shop"
      );
      // console.log(res.data.data[0].photo)
      this.setState({
        shops: res.data.data,
        isLoading: false
      });
    } catch (err) {
      console.log(err);
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <>
        <div>
          <section className="jumbotron text-center">
            <div className="container">
              <h1>Album example</h1>
              <p className="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
              <p>
                <a href="#foo" className="btn btn-primary my-2">
                  Main call to action
                </a>
                <a href="#foo" className="btn btn-secondary my-2">
                  Secondary action
                </a>
              </p>
            </div>
            <div>
              {this.state.isLoading && (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
            </div>
          </section>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                {this.state.shops.map((shop, index) => {
                  return (
                    <div className="col-md-4" key={shop.id}>
                      <div className="card mb-4 shadow-sm">
                        {/* {console.log(shop.photo)} */}
                        <img src={shop.photo} height="225" alt={shop.name} />
                        <div className="card-body">
                          <h5>{shop.name}</h5>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              {/* <button
                                type="button"
                                className="btn btn-sm btn-outline-secondary"
                              >
                                Menu
                              </button> */}
                              <Link
                                className="btn btn-sm btn-outline-secondary"
                                to={{
                                  pathname: `/shop/${shop.id}`
                                }}
                              >
                                Menu
                              </Link>
                            </div>
                            <small className="text-muted">{shop.id}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
