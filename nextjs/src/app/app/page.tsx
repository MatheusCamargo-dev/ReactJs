import Header from "@/components/Header";
import axios from 'axios';
export default async function Home() {
  const response = await axios('http://localhost:3000/api/user/');
  // await fetch('http://localhost:3000/api/user/', cache: 'no-store'); SSR
  return (
    <div className="text-white">
      This is my app page
      <pre>{JSON.stringify(response.data, null, 2)}</pre>
    </div>
  );
};

