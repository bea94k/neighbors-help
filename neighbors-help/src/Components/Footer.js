import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column1 */}
          <div className="col">
            <h5>Grocery Neighbors</h5>
          </div>
          {/* column2 */}
          <div className="col">
            <h4>DEVELOPERS</h4>
            Joseph Boadi, Paljakka Jonne, Kusnierz Beata, Rönkkö Makiyo,
            Odusanya Olabisi
          </div>
          {/* column3 */}
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Grocery Neighbors | All rights
            reserved | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
