import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h3>How React js works ?</h3>
      <p>
        React is most popular javascript libery . Which develop and maintain by
        facebook. React works in unidiraction way . It passes data parent to
        child . It can't pass data child to parent directly.
      </p>
      <h3>Props vs state ?</h3>
      <p>
        Props is read only it can't change . State can change it is changable.
        Props are immutable on the other hand state is mutable.Props can be
        access by the child component . State can't be accessed by child
        Component.Props use for sending data one component to other. State store
        data from component.
      </p>
    </div>
  );
};

export default Footer;