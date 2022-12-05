import * as React from "react";
import { Hidden } from "@mui/material";
import { Ellipsis } from "react-bootstrap/esm/PageItem";

export default function RowsApplication(props) {
  const { no, application } = props;
  const { id, fullName, email, phoneNumber, fileURL, jobId } =
  application;

  return (
    <tr className="align-items-center pb-3">
      <th className="align-top px-2 py-2">
        {no + 1}
      </th>
      <td className="align-top fw-bold py-2" style={{ maxWidth: "140px", whiteSpace: "pre-wrap", overflow:"hidden", textOverflow: Ellipsis, WebkitLineClamp: 3 }}>{fullName}</td>
      <td className="align-top py-2" style={{ maxWidth: "150px", whiteSpace: "pre-wrap", overflow:"hidden", textOverflow: Ellipsis, WebkitLineClamp: 3 }}>{email}</td>
      <td className="align-top py-2" style={{ maxWidth: "90px" }}>{phoneNumber}</td>
      <td className="align-top py-2" style={{ maxWidth: "150px" }}>{jobId.title}</td>
      
      <td className="align-top py-2" style={{ maxWidth: "100px"}}>
      <div style={{maxWidth: "200px", whiteSpace: "pre-wrap", overflow:"hidden", textOverflow: Ellipsis, WebkitLineClamp: 3 }}>
      <a href={fileURL}>View Resume</a>
      </div>
        </td>
    </tr>
  );
}
