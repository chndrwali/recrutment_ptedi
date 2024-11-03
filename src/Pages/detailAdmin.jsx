import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailAdmin = () => {
  const { id } = useParams();
  const [biodata, setBiodata] = useState(null);
  const getBiodata = async () => {
    const res = await fetch(`/api/biodata_users/${id}`);
    const data = await res.json();

    if (res.ok) {
      setBiodata(data.biodata);
    }
  };

  useEffect(() => {
    getBiodata();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold leading-tight mb-4">Biodata Detail</h1>

      {biodata ? (
        <div className="bg-white border rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <span className="font-semibold">Nama Pelamar:</span>
              <span>{biodata.name || '-'}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Posisi yang Dilamar:</span>
              <span>{biodata.position || '-'}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Tanggal Lahir:</span>
              <span>{biodata.birthday || '-'}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">No KTP:</span>
              <span>{biodata.no_ktp || '-'}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Jenis Kelamin:</span>
              <span>{biodata.gender || '-'}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Agama:</span>
              <span>{biodata.religion || '-'}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Golongan Darah:</span>
              <span>{biodata.blood_type || '-'}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Status:</span>
              <span>{biodata.status || '-'}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Alamat KTP:</span>
              <span>{biodata.address_ktp || '-'}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Alamat Sekarang:</span>
              <span>{biodata.current_address || '-'}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Alamat Email:</span>
              <span>{biodata.email_address || '-'}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">No Telepon:</span>
              <span>{biodata.phone_number || '-'}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">No Telepon Darurat:</span>
              <span>{biodata.emergency_phone_number || '-'}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Keahlian:</span>
              <span>{biodata.skill || '-'}</span>
            </div>
          </div>
        </div>
      ) : (
        <p>Data biodata tidak tersedia!</p>
      )}
    </div>
  );
};

export default DetailAdmin;
