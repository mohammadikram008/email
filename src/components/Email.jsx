import React from "react";
//mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Divider, Grid } from "@mui/material";
import { indigo } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
const Email = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwMDIxNDQ0LCJpYXQiOjE2Nzk5MzUwNDMsImp0aSI6IjA2ZDNkZTQ4ZTg5NTQ5ZmJhYWEzMjQ0NzU3NzIyN2NiIiwidXNlcl9pZCI6IjZjN2IzY2ExLThjMzItNDc4Ny04MTc5LTBjMDYzNWQ2NzQyMiJ9.oVWfFhQ-xJ3Kk7TZNNSuMKy3Sb9cGKTHFin4aA7-dVg";
  // const header = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  function stringAvatar(name) {
    return {
      children: `${name.split(" ")[0][0]}`,
    };
  }
  const handleClick = () => {
    console.log("click");
  };
  // useEffect(() => {
  //   axios
  //     .get(`https://sandbox.notification.pullstream.com/api/`, header)
  //     .then((res) => {
  //       console.log("ResDATA", res.data.results);
  //       setData(res.data.results);
  //     })
  //     .catch((error) => {
  //       console.log("Error", error);
  //     });
  // }, []);
  const alldata = [
    {
      name: "ikram",
      subject: "developer",
      contain: "i am reatjs developer...",
      date: "02/02/2023",
    },
    {
      name: "ALi",
      subject: "developer",
      contain: "i am reatjs developer...",
      date: "02/02/2023",
    },
    {
      name: "kmran",
      subject: "developer",
      contain: "i am reatjs developer...",
      date: "02/02/2023",
    },
    {
      name: "Zuhaib",
      subject: "developer",
      contain: "i am reatjs developer...",
      date: "02/02/2023",
    },
  ];
  return (
    <Box mt={1} sx={{
      "--Grid-borderWidth": "1px",
      borderRadius: "4px",
      borderTop: "var(--Grid-borderWidth) solid",
      borderLeft: "var(--Grid-borderWidth) solid",
      borderRight: "var(--Grid-borderWidth) solid",
      borderBottom: "var(--Grid-borderWidth) solid",
      borderColor: "divider",
      "& > div": {
        borderRight: "var(--Grid-borderWidth) solid",
        borderBottom: "var(--Grid-borderWidth) solid",
        borderColor: "divider",
      },
    }}
      style={{ height: "90vh" }}
    >
      <Checkbox {...label} />
      <Divider />
      <Grid
        container
        lg={12}
        md={12}
        sm={12}
        xs={12}
      >
        {alldata &&
          alldata.map((item, index) => (
            <Card
              sx={{
                ':hover': {
                  bgcolor: indigo[100],
                },
              }}
              style={{ width: "100%" }}
              sm={12}
              lg={12}
              onClick={handleClick}
              key={index}
              className="email-card"
            >
              <CardContent>
                <Grid lg={12} container>
                  <Grid lg={2}>
                    <Stack direction="row" >
                      <Avatar
                        // {...stringAvatar(`${item.details.from_email.name}`)}
                        {...stringAvatar(`${item.name}`)}
                        sx={{ bgcolor: indigo[500] }}
                      />
                    </Stack>
                  </Grid>
                  <Grid lg={10}>
                    <Stack direction="column" >
                      <Typography variant="h6" component="div">
                        {/* {item.details.from_email.name} */}
                        {item.name}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={4} sx={{ color: indigo[500] }}>
                      <Typography variant="body2">
                        {item.subject}
                      </Typography>
                      <Typography sx={{ mb: 1.5, color: indigo[500] }} color="text.secondary">
                        {/* {item.sent_date_time} */}
                        {item.date}
                      </Typography>
                    </Stack>
                    <Typography variant="h8" component="div">
                      {item.contain}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
      </Grid>
    </Box >
  );
};

export default Email;
