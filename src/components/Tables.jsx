import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../store/action/job";
import { fetchApplications } from "../store/action/application";
import RowsJob from "./RowsJob";
import RowsApplication from "./RowsApplication";

export default function Tables(props) {
  const dispatch = useDispatch();
  const { status, head } = props;
  const { jobs } = useSelector((state) => {
    return state.jobReducer;
  });
  
  const { applications } = useSelector((state) => {
    return state.applicationReducer;
  });
  // console.log(jobs, "<<<<<<")

  useEffect(() => {
    dispatch(fetchJobs());
    dispatch(fetchApplications());
  }, []);

  let tBody;
  const tHead = head.map((e, i) => {
    return <th key={i + "x"}>{e}</th>;
  });
  if (status === "job") {
    tBody = jobs.map((e, i) => <RowsJob key={e.id} job={e} no={i} />);
  } 
  else {
    tBody = applications.map((e, i) => {
      return <RowsApplication key={e.id} application={e} no={i} />;
    });
  }

  return (
    <div>
      <br />
      <Paper sx={{ width: "100%" }} className="p-4 rounded-3 mb-3">
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table stickyHeader aria-label="sticky table" style={{overflowX: "auto", whiteSpace: "nowrap"}} >
            <TableHead>
              <TableRow>{tHead}</TableRow>
            </TableHead>
            <TableBody>{tBody}</TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
