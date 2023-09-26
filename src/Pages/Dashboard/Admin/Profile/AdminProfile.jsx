import React from 'react';
import { useGetUserProfileQuery, useGetUserQuery } from '../../../../redux/api/api';
import { Box, Container, Typography } from '@mui/material';

const AdminProfile = () => {
     const { data, isLoading, isError } = useGetUserQuery(); const {
       data: userProfile,
       isLoading: profileLoading,
       isError: profileError,
       error,
     } = useGetUserProfileQuery();
    return (
      <div style={{ minHeight: "80vh" }}>
        <Container>
          <Box>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                            alignItems: "center",
                paddingTop:"20vh"
              }}
            >
              <img src="/assets/user-profile-icon.png" width={"200px"} alt="" />
            </div>
            <Typography
              variant="h4"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "Roboto",
              }}
            >
              {" "}
              {userProfile?.first_name} {userProfile?.last_name}{" "}
            </Typography>
            <Typography
              variant="h6"
              style={{ textAlign: "center", fontFamily: "Poppins" }}
            >
              {" "}
              {userProfile?.email}
            </Typography>
          </Box>
        </Container>
      </div>
    );
};

export default AdminProfile;