"use client";

import { useOptimistic } from "react";
import { deleteBooking } from "../_lib/actions";
import ReservationCard from "./ReservationCard";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    },
  );

  useGSAP(() => {
    optimisticBookings.forEach((_, i) => {
      const card = `.card${i + 1}`;
      gsap.set(card, { opacity: 0, x: -80 });

      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.25,
      });
    });
  }, []);

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteBooking(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking, i) => (
        <div
          key={booking.id}
          className={`card${i + 1} flex border flex-col lg:flex-row border-primary-800`}
        >
          <ReservationCard booking={booking} onDelete={handleDelete} />
        </div>
      ))}
    </ul>
  );
}

export default ReservationList;
