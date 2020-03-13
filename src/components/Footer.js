import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      // eslint-disable-next-line
      <footer className="text-muted">
        <div className="container">
          <p className="float-right">
            <a href='#foo'>Back to top</a>
          </p>
          <p>
            Album example is © Bootstrap, but please download and customize it
            for yourself!
          </p>
          <p>
            New to Bootstrap?{" "}
            <a href="https://getbootstrap.com/">Visit the homepage</a> or read
            our
            <a href="/docs/4.4/getting-started/introduction/">
              getting started guide
            </a>
            .
          </p>
        </div>
      </footer>
    );
  }
}
