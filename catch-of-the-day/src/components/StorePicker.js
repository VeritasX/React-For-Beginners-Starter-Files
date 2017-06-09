import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event) {
    event.preventDefault();
    //first grab the text form the box
    const storeId = this.storeInput.value;
    //Second were going to transistion from / to /store:storeid
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  render() {
    return (
      <form className="store-selector" onSubmit={e => this.goToStore(e)}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={input => {
            this.storeInput = input;
          }}
        />
        <button type="submit">Visit Store -&gt; </button>
      </form>
    );
  }
}
StorePicker.contextTypes = {
  router: React.PropTypes.object
};

export default StorePicker;
