import * as React from "react";
import {
deleteJob, jobDetailById, updateActiveJob, updateCloseJob
} from "../store/action/job";
import ToggleSwitch from "./ToggleSwitch";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Hidden } from "@mui/material";
import { Ellipsis } from "react-bootstrap/esm/PageItem";

export default function RowsJob(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { no, job } = props;
  const { _id, title, description, requirement, jobType, is_active } =
  job;

  // console.log(job, "job!");

  const handleClickEdit = (event, id) => {
    event.preventDefault();
    dispatch(jobDetailById(_id));
    navigate(`/admin/edit-job/${id}`);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteJob(_id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const handleClickUpdateActive = (status) => {
      dispatch(updateActiveJob(_id, status));
  };


  return (
    <tr className="align-items-center pb-3">
      <th className="align-top px-2 py-2">
        {no + 1}
      </th>
      <td className="align-top fw-bold px-2 py-2" style={{ maxWidth: "800px" }}>{title}</td>
      <td className="align-top py-2" style={{ maxWidth: "600px", whiteSpace: "pre-wrap", overflow: Hidden, textOverflow: Ellipsis, WebkitLineClamp: 3 }}>{description}</td>
      <td className="align-top py-2" style={{ maxWidth: "600px", whiteSpace: "pre-wrap" }}>{requirement}</td>
      <td className="align-top fw-semibold py-2" style={{ minWidth: "120px" }}>{jobType}</td>
      <td className="align-top py-2" style={{ minWidth: "120px" }}>
        <ToggleSwitch status={is_active} onChange={handleClickUpdateActive} />
      </td>
      <td className="align-top py-2">
        <button
          onClick={(event) => handleClickEdit(event, _id)}
          className="btn btn-warning me-2"
        >
          Edit
        </button>
        <button 
        onClick={handleDelete} 
        className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}
