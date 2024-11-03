import { useState } from 'react';
import { FaPenSquare } from 'react-icons/fa';

const Home = () => {
  const [formData, setFormData] = useState({
    position: '',
    name: '',
    birthday: '',
    no_ktp: undefined,
    gender: '',
    religion: '',
    blood_type: '',
    status: '',
    address_ktp: '',
    current_address: '',
    email_address: '',
    phone_number: '',
    emergency_phone_number: '',
    skill: '',
    trainings: [],
    educations: [],
    works: [],
  });

  const handleCreate = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full p-4 container mx-auto">
      <div className="space-y-1 p-2">
        <div className="flex items-center mt-2">
          <FaPenSquare className="w-7 h-7 mr-2" size={20} />
          <h1 className="text-2xl font-bold">Formulir Biodata</h1>
        </div>
        <form onSubmit={handleCreate} className="border rounded-md p-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-2 md:col-span-1 ml-4 pr-3">
              <h1 className="text-xl font-bold">Data Pribadi Pelamar</h1>
              <hr className="w-full h-1 bg-black border-0 rounded md:my-3" />
              <div className="container mx-auto pt-3 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="position" className="text-gray-400 text-sm">
                    Masukan posisi yang di lamar
                  </label>
                  <input id="position" type="text" placeholder="Masukan posisi" value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-400 text-sm">
                    Nama anda
                  </label>
                  <input id="name" type="text" placeholder="Masukan posisi" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="birthday" className="text-gray-400 text-sm">
                    Tempat, Tanggal lahir
                  </label>
                  <input id="birthday" type="text" placeholder="Masukan tanggal lahir anda" value={formData.birthday} onChange={(e) => setFormData({ ...formData, birthday: e.target.value })} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="noktp" className="text-gray-400 text-sm">
                    No. KTP anda
                  </label>
                  <input id="noktp" type="text" placeholder="Masukan no ktp" value={formData.no_ktp} onChange={(e) => setFormData({ ...formData, no_ktp: e.target.value })} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="gender" className="text-gray-400 text-sm">
                    Jenis kelamin
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="border border-gray-300 rounded-md p-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="" disabled>
                      Pilih jenis kelamin
                    </option>
                    <option value="male">Laki-laki</option>
                    <option value="female">Perempuan</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="religion" className="text-gray-400 text-sm">
                    Agama
                  </label>
                  <select
                    id="religion"
                    name="religion"
                    value={formData.religion}
                    onChange={(e) => setFormData({ ...formData, religion: e.target.value })}
                    className="border border-gray-300 rounded-md p-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="" disabled>
                      Pilih agama
                    </option>
                    <option value="Islam">Islam</option>
                    <option value="Kristen Protestan">Kristen Protestan</option>
                    <option value="Katolik">Katolik</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Buddha">Buddha</option>
                    <option value="Konghucu">Konghucu</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="blood_type" className="text-gray-400 text-sm">
                    Golongan Darah
                  </label>
                  <select
                    id="blood_type"
                    name="blood_type"
                    value={formData.blood_type}
                    onChange={(e) => setFormData({ ...formData, blood_type: e.target.value })}
                    className="border border-gray-300 rounded-md p-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="" disabled>
                      Pilih golongan darah
                    </option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="AB">AB</option>
                    <option value="O">O</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="status" className="text-gray-400 text-sm">
                    Status pernikahan
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="border border-gray-300 rounded-md p-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="" disabled>
                      Pilih status pernikahan
                    </option>
                    <option value="Nikah">Nikah</option>
                    <option value="Janda/Duda">Janda/Duda</option>
                    <option value="Belum menikah">Belum menikah</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 ml-4 pr-3">
              <h1 className="text-xl font-bold">Informasi Tambahan</h1>
              <hr className="w-full h-1 bg-black border-0 rounded md:my-3" />
              <div className="container mx-auto pt-3 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="adress_ktp" className="text-gray-400 text-sm">
                    Alamat KTP
                  </label>
                  <input id="adress_ktp" type="text" placeholder="Masukan alamat ktp" value={formData.address_ktp} onChange={(e) => setFormData({ ...formData, address_ktp: e.target.value })} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="current_address" className="text-gray-400 text-sm">
                    Alamat Tinggal
                  </label>
                  <input id="current_address" type="text" placeholder="Masukan alamat tinggal sekarang" value={formData.current_address} onChange={(e) => setFormData({ ...formData, current_address: e.target.value })} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email_address" className="text-gray-400 text-sm">
                    Alamat Email
                  </label>
                  <input id="email_address" type="email" placeholder="Masukan alamat email anda" value={formData.email_address} onChange={(e) => setFormData({ ...formData, email_address: e.target.value })} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone_number" className="text-gray-400 text-sm">
                    No. Telpon
                  </label>
                  <input id="phone_number" type="text" placeholder="Masukan no telpon anda" value={formData.phone_number} onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="emergency_phone_number" className="text-gray-400 text-sm">
                    No. Telpon Darurat (Orang Terdekat)
                  </label>
                  <input id="emergency_phone_number" type="text" placeholder="Masukan no telpon anda" value={formData.emergency_phone_number} onChange={(e) => setFormData({ ...formData, emergency_phone_number: e.target.value })} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="skill" className="text-gray-400 text-sm">
                    Skill
                  </label>
                  <input id="skill" type="text" placeholder="Masukan skill anda" value={formData.skill} onChange={(e) => setFormData({ ...formData, skill: e.target.value })} />
                </div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 ml-4 pr-3">
              <h1 className="text-xl font-bold">Informasi Tambahan</h1>
              <hr className="w-full h-1 bg-black border-0 rounded md:my-3" />
              <div className="container mx-auto pt-3 gap-4"> </div>
            </div>
          </div>
          <div className='flex justify-center items-center mt-4'>

          <button type='submit' className='bg-blue-500 text-white p-3 text-sm rounded-lg hover:bg-blue-500/80'>Simpan</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
