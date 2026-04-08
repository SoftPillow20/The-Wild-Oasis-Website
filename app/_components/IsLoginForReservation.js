"use client";

import { useAuthContext } from "./authContext";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

function IsLoginForReservation({ cabin }) {
  const { session } = useAuthContext();

  return (
    <>
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </>
  );
}

export default IsLoginForReservation;
