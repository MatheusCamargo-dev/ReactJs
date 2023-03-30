import api from '@/services/api-back-end';
import { redirect } from 'next/navigation';

export default async function App() {
  const data = await api('http://localhost:3000/api/user/')
  console.log('app');
  console.log(data);
  if(data.status === 0) redirect('/');

  return (
    <div className="text-dark bg-white">
      This is my app
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

