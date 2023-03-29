import React, { useEffect, useState } from 'react';
//axoi
import axios from 'axios';
//mui 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Divider, Grid } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';



const Email = () => {
  const [data, setData] = useState([]);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwMDIxNDQ0LCJpYXQiOjE2Nzk5MzUwNDMsImp0aSI6IjA2ZDNkZTQ4ZTg5NTQ5ZmJhYWEzMjQ0NzU3NzIyN2NiIiwidXNlcl9pZCI6IjZjN2IzY2ExLThjMzItNDc4Ny04MTc5LTBjMDYzNWQ2NzQyMiJ9.oVWfFhQ-xJ3Kk7TZNNSuMKy3Sb9cGKTHFin4aA7-dVg'
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }

  function stringAvatar(name) {
    return {
      // sx: {
      //   bgcolor: stringToColor(name),
      // },
      children: `${name.split(' ')[0][0]}`,
    };
  }
  const handleClick = () => {
    console.log("click")
  }
  useEffect(() => {
    axios.get(`https://sandbox.notification.pullstream.com/api/`, header).then((res) => {
      console.log("ResDATA", res.data.results);
      setData(res.data.results)
    }).catch((error) => {
      console.log("Error", error);
    })
  }, [])

  return (

    <div className='emails'>
      <Checkbox {...label} />
      <Divider />


      {data &&
        data.map((item, index) => (
          < Card hoverable sx={{ minWidth: 275 }} sm={12} lg={12} onClick={handleClick} key={index} className="email-card">
            <CardContent>
              <Grid lg={12} container>

                <Grid lg={4}>
                  <Stack direction="row" spacing={2}>
                    <Avatar {...stringAvatar(`${item.details.from_email.name}`)} sx={{ bgcolor: deepOrange[500] }} />
                  </Stack>
                </Grid>
                <Grid lg={4}>
                  <Stack direction="row" spacing={2}>
                    <Typography variant="h6" component="div">
                      {item.details.from_email.name}
                    </Typography>
                  </Stack>
                  <Typography variant="body2">
                    {item.subject}
                  </Typography>
                </Grid>
                <Grid lg={4}>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.sent_date_time}
                  </Typography></Grid>
              </Grid>
            </CardContent>

            {/* <Divider /> */}
          </Card>
        ))
      }

    </div >
  )
};

export default Email;
