import { useEffect, useState } from "react";
import NameCard from "../components/NameCard";;
import Donations from "../components/Donations";
import RewardsCard from "../components/RewardsCard";

export default function Dashboard() {
  const [userData, setUserData] = useState(null); // Step 1: useState to hold data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://intern-demo-xi.vercel.app/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Needed if using cookies
        });

        const data = await res.json();
        setUserData(data); // Step 2: Save response to state
        console.log("Fetched data:", data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex gap-3 justify-start flex-wrap  items-center w-1/2 m-6 mb-50">
        {userData && <NameCard name={userData.user} code={userData.code} />}
        {userData && <Donations price={userData.randomNumber} />}
      </div>

      <div className="h-90 rounded-lg py-3 px-10 flex justify-center items-center gap-20 ">
        <RewardsCard
          image="https://images.unsplash.com/photo-1675022991921-dcc9a8f52a06?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          tittle="Digital Certificate"
          price="₹1000"
        />
        <RewardsCard
          image="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          tittle="Branded T-shirt"
          price="₹3000"
        />
        <RewardsCard
          image="https://plus.unsplash.com/premium_photo-1683492749168-ee69f4d90193?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          tittle="Social Media Shoutout"
          price="₹5000"
        />
        <RewardsCard
          image="https://images.unsplash.com/photo-1605699717632-0b9b657ff3b5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          tittle="Priority Certificate"
          price="₹8000"
        />
        <RewardsCard
          image="https://images.unsplash.com/photo-1589900759128-ec089c2cb976?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          tittle="Special Mention"
          price="₹10000"
        />
      </div>
    </>
  );
}
