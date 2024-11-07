"use client"

import { Container } from "@mui/material";
import UsersList from "../UsersList";

const MainPage = () => {
  return (
    <Container>
      <main>
        <UsersList />
      </main>
    </Container>
  );
};

export default MainPage;
