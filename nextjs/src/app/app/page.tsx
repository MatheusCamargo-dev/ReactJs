import apiServer from '@/services/api-back-end';

export default async function App() {
  const data = await apiServer('http://127.0.0.1:3000/api/user/')
  
  return (
    <div className="text-dark bg-white">
      This is my app
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

