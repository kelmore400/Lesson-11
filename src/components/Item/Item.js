import React from "react";

class Item extends React.Component {
  render() {
    console.log('render List1');
    return (
      <li>
        {this.props.value}
      </li>
    )
  }
}

export default Item;