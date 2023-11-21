import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

interface FormData {
  email: string;
  name: string;
  password: string;
}

const Companysettings: React.FC = () => {
  const [cookies] = useCookies(['formData']);
  const [persistedFormData, setPersistedFormData] = useState<FormData | null>(null);

  useEffect(() => {
    const storedFormData = cookies.formData;
    if (storedFormData) {
      setPersistedFormData(storedFormData);
    }
  }, [cookies.formData]);

  return (
    <div className='mt-[10%] ml-[20%]'>
      <h2>Persisted Form Data</h2>
      {persistedFormData ? (
        <ul>
          <li>
            <strong>Name:</strong> {persistedFormData.name}
          </li>
          <li>
            <strong>Email:</strong> {persistedFormData.email}
          </li>
          <li>
            <strong>Password:</strong> {persistedFormData.password}
          </li>
        </ul>
      ) : (
        <p>No form data found.</p>
      )}
    </div>
  );
};

export default Companysettings;
