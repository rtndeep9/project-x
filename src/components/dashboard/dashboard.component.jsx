import React, { useState } from "react";

import AddItems from "../addItems/addItems.components";

import "./dashboard.styles.css";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

function Dashboard() {
  const [state, setState] = useState({ show: false });

  function showModal() {
    return setState({ show: true });
  }

  function hideModal() {
    return setState({ show: false });
  }

  return (
    <main>
      <h1>Add new product</h1>
      <Modal show={state.show} handleClose={hideModal}>
        <AddItems />
      </Modal>
      <button type="button" onClick={showModal}>
        Add new product
      </button>
    </main>
  );
}

export default Dashboard;
