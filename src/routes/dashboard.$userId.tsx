import { useParams } from "react-router-dom";

export default function DashboardUser() {
  const { userId } = useParams<"userId">();
  return <h2>User Dashboard: {userId}</h2>;
}
