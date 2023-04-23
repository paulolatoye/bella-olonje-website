import React from "react";
import "./download.css";

function Download() {
  return (
    <div className="row mt-5">
      <div className="second-header">
        <div className="downl-elements">
          <h2 className="downl-desc">Download the App now.</h2>
          <h4 className="downl-inst">
            Available on your favorite store. Start your premium experience now.
          </h4>
        </div>

        <div className="downl-btns">
          <button type="button" className="btn play-Store">
            Playstore
          </button>
          <button type="button" className="btn app-Store">
            Appstore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Download;
