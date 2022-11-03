import React from "react";


export function Inputs(){


    return(
        <div
          style={{
            // width: "60%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: "1rem",
          }}
        >
          <input
            value={"inupt small primary filled"}
            className="input small primary filled "
            type="text"
          />
          <input
            value="input medium primary filled"
            className="input medium primary filled "
            type="text"
          />
          <input
            value="input large primary filled"
            className="input large primary filled "
            type="text"
          />

          <input
            value="input small primary outlined"
            className="input small primary outlined "
            type="text"
          />
          <input
            value="input medium primary outlined"
            className="input medium primary outlined "
            type="text"
          />
          <input
            value="input large primary outlined"
            className="input large primary outlined "
            type="text"
          />

          <input
            value="input small secondary filled"
            className="input small secondary filled "
            type="text"
          />
          <input
            value="input medium secondary filled"
            className="input medium secondary filled "
            type="text"
          />
          <input
            value="input large secondary filled"
            className="input large secondary filled "
            type="text"
          />

          <input
            value="input small secondary outlined"
            className="input small secondary outlined "
            type="text"
          />
          <input
            value="input medium secondary outlined"
            className="input medium secondary outlined "
            type="text"
          />
          <input
            value="input large secondary outlined"
            className="input large secondary outlined "
            type="text"
          />
        </div>

    )
}