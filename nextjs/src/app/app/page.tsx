import api from '@/services/api-back-end';

export default async function App() {

  const data = await api('http://localhost:3000/api/user/')
  return (
    <div className="text-white">
      This is my app
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

