import { setupAPIServer } from "@/services/api";

export default async function App() {
  const api = await setupAPIServer();
  const response = await api('http://localhost:3000/api/user/');

  return (
    <div className="text-white">
      This is my app page
      <pre>{JSON.stringify(response.data, null, 2)}</pre>
    </div>
  );
};

