import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../store/action/job";
import { useEffect } from "react";

export default function CardActiveJob() {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => {
    return state.jobReducer;
  });

  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  let data = jobs.filter((x) => {
    return x.is_active === true;
  });

  data = data.length;

  return (
    <Card sx={{ width: 220, height: "auto" }} className="rounded-3">
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          Active Job
        </Typography>
        <Typography
          sx={{ fontSize: 34 }}
          variant="body2"
          body="theme.typography.fontWeightBold"
        >
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
}
