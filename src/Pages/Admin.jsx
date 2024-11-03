import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import toast from 'react-hot-toast';

const Admin = () => {
  const {token} = useContext(AppContext)  
  const [biodata, setBiodata] = useState([]);
  const getBiodata = async () => {
    const res = await fetch('/api/biodata_users');
    const data = await res.json();

    if (res.ok) {
      setBiodata(data);
    }
  };

  const handleDelete = async (id) => {
    const res = await fetch(`/api/biodata_users/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      toast.success('Data berhasil di hapus')
      setBiodata(biodata.filter((bio) => bio.id !== id));
    }
  };

  useEffect(() => {
    getBiodata();
  }, []);

  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold">Semua Data</h2>
      <hr className="w-full h-1 bg-black border-0 rounded md:my-3" />

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Nama Pelamar</th>
            <th className="border p-2">Tempat, Tanggal lahir</th>
            <th className="border p-2">Posisi yang di lamar</th>
            <th className="border p-2">Detail</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {biodata.map((bio) => (
            <tr key={bio.id}>
              <td className="border p-2">{bio.name}</td>
              <td className="border p-2">{bio.birthday}</td>
              <td className="border p-2">{bio.position}</td>
              <td className="border p-2">
                <Link className="bg-blue-500 hover:bg-blue-500/80 text-white p-2 rounded-lg" to={`/admin/${bio.id}`}>
                  Detail
                </Link>
              </td>

              <td className="border p-2">
                <div className="space-x-4 flex items-center">
                 

                  <button type="buton" onClick={() => handleDelete(bio.id)} className="bg-red-500 hover:bg-red-500/80 text-white p-2 rounded-lg">
                    Hapus
                  </button>
                  
                  <Link to={`/admin/update/${bio.id}`} className="bg-emerald-500 hover:bg-emerald-500/80 text-white p-2 rounded-lg">
                    Update
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
