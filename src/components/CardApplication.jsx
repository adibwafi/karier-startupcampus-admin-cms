import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchApplications } from "../store/action/application";
import { useEffect } from "react";

export default function CardApplication() {
  const dispatch = useDispatch();
  const { applications } = useSelector((state) => {
    return state.applicationReducer;
  });

  useEffect(() => {
    dispatch(fetchApplications());
  }, []);

  let data = applications.length;

  return (
    <Card sx={{ width: 220, height: "auto" }} className="rounded-3">
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          Application
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
