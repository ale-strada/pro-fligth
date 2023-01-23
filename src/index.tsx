 import React from "react"
 import ReactDOM from "react-dom/client"
 import { ProFligth } from "./pro-fligth-component";

 class Home extends React.Component<any,any> {
  constructor(props) {
    super(props);
  }
  render() {
    return <ProFligth></ProFligth>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);

