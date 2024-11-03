import { useContext, useState } from 'react';
import { FaPenSquare } from 'react-icons/fa';
import { AppContext } from '../Context/AppContext';
import toast from 'react-hot-toast';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {token} = useContext(AppContext)  
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
    trainings: [{ name_course: '', certificated: false, year_certificate: '' }],
    educations: [{ level: '', institution: '', major: '', year_graduation: '', ipk: undefined }],
    works: [{ name_work: '', position: '', income: undefined, year_work: '' }],
  });

  const handleCreate = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
        const res = await fetch('/api/biodata_users', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        });

        

        const data = await res.json();
        
        if (data.errors) { 
            toast.error("Tolong isi semua fields") 
        } else {
            toast.success("Data berhasil ditambahkan");
            console.log(data);
        }
    } catch (error) {
        console.error(error);
        toast.error("Terjadi kesalahan");
    } finally {
        setIsLoading(false);
    }
  };

  const handleAddTraining = () => {
    setFormData({
      ...formData,
      trainings: [...formData.trainings, { name_course: '', certificated: '', year_certificate: '' }],
    });
  };
  const handleAddWorks = () => {
    setFormData({
      ...formData,
      works: [...formData.works, { name_work: '', position: '', income: '', year_work: '' }],
    });
  };
  const handleAddEducation = () => {
    setFormData({
      ...formData,
      educations: [...formData.educations, { level: '', institution: '', major: '', year_graduation: '', ipk: '' }],
    });
  };

  const handleTrainingChange = (index, field, value) => {
    const updatedTrainings = formData.trainings.map((training, i) => (i === index ? { ...training, [field]: value } : training));
    setFormData({ ...formData, trainings: updatedTrainings });
  };

  const handleWorkChange = (index, field, value) => {
    const updatedWorks = formData.works.map((work, i) => (i === index ? { ...work, [field]: value } : work));
    setFormData({ ...formData, works: updatedWorks });
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducations = formData.educations.map((education, i) => (i === index ? { ...education, [field]: value } : education));
    setFormData({ ...formData, educations: updatedEducations });
  };

  const handleRemoveTraining = (index) => {
    const updatedTrainings = formData.trainings.filter((_, i) => i !== index);
    setFormData({ ...formData, trainings: updatedTrainings });
  };
  const handleRemoveEducation = (index) => {
    const updatedEducations = formData.educations.filter((_, i) => i !== index);
    setFormData({ ...formData, educations: updatedEducations });
  };
  const handleRemoveWork = (index) => {
    const updatedWorks = formData.works.filter((_, i) => i !== index);
    setFormData({ ...formData, works: updatedWorks });
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
                  <input id="position" type="text" disabled={isLoading} placeholder="Masukan posisi" value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-400 text-sm">
                    Nama anda
                  </label>
                  <input id="name" type="text" placeholder="Masukan nama" disabled={isLoading} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="birthday" className="text-gray-400 text-sm">
                    Tempat, Tanggal lahir
                  </label>
                  <input disabled={isLoading} id="birthday" type="text" placeholder="Masukan tanggal lahir anda" value={formData.birthday}  onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="noktp" className="text-gray-400 text-sm">
                    No. KTP anda
                  </label>
                  <input id="noktp" type="text" placeholder="Masukan no ktp" value={formData.no_ktp} onChange={(e) => setFormData({ ...formData, no_ktp: e.target.value })}  disabled={isLoading}/>
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
                    disabled={isLoading}
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
                    disabled={isLoading}
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
                    disabled={isLoading}
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
                    disabled={isLoading}
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
                  <input id="adress_ktp" type="text" placeholder="Masukan alamat ktp" value={formData.address_ktp} onChange={(e) => setFormData({ ...formData, address_ktp: e.target.value })} disabled={isLoading} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="current_address" className="text-gray-400 text-sm">
                    Alamat Tinggal
                  </label>
                  <input id="current_address" type="text" placeholder="Masukan alamat tinggal sekarang" value={formData.current_address} onChange={(e) => setFormData({ ...formData, current_address: e.target.value })} disabled={isLoading}/>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email_address" className="text-gray-400 text-sm">
                    Alamat Email
                  </label>
                  <input id="email_address" type="email" placeholder="Masukan alamat email anda" value={formData.email_address} onChange={(e) => setFormData({ ...formData, email_address: e.target.value })} disabled={isLoading}/>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone_number" className="text-gray-400 text-sm">
                    No. Telpon
                  </label>
                  <input id="phone_number" type="text" placeholder="Masukan no telpon anda" value={formData.phone_number} onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })} disabled={isLoading}/>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="emergency_phone_number" className="text-gray-400 text-sm">
                    No. Telpon Darurat (Orang Terdekat)
                  </label>
                  <input id="emergency_phone_number" type="text" placeholder="Masukan no telpon anda" value={formData.emergency_phone_number} onChange={(e) => setFormData({ ...formData, emergency_phone_number: e.target.value })} disabled={isLoading}/>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="skill" className="text-gray-400 text-sm">
                    Skill
                  </label>
                  <input id="skill" type="text" placeholder="Masukan skill anda" value={formData.skill} onChange={(e) => setFormData({ ...formData, skill: e.target.value })} disabled={isLoading}/>
                </div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 ml-4 pr-3 mt-4">
              <h2 className="text-xl font-bold">Riwayat Pelatihan</h2>
              <hr className="w-full h-1 bg-black border-0 rounded md:my-3" />
              <div className="container mx-auto pt-3 gap-4">
                <div className="flex flex-col">
                  <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                      <tr>
                        <th className="border p-2">Nama Pelatihan</th>
                        <th className="border p-2">Bersertifikat</th>
                        <th className="border p-2">Tahun</th>
                        <th className="border p-2">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.trainings.map((training, index) => (
                        <tr key={index}>
                          <td className="border p-2">
                            <input type="text" placeholder="Nama Pelatihan" value={training.name_course} onChange={(e) => handleTrainingChange(index, 'name_course', e.target.value)} className="border p-2 rounded w-full" />
                          </td>
                          <td className="border p-2 text-center">
                            <input type="checkbox" checked={training.certificated} onChange={(e) => handleTrainingChange(index, 'certificated', e.target.checked)} />
                          </td>
                          <td className="border p-2">
                            <input type="text" placeholder="Tahun" value={training.year_certificate} onChange={(e) => handleTrainingChange(index, 'year_certificate', e.target.value)} className="border p-2 rounded w-full" />
                          </td>
                          <td className="border p-2 text-center">
                            <button type="button" onClick={() => handleRemoveTraining(index)} className="bg-red-500 text-white p-2 rounded">
                              Hapus
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button type="button" onClick={handleAddTraining} className="bg-blue-500 text-white p-2 rounded mt-4">
                    Tambah Pelatihan
                  </button>
                </div>{' '}
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 ml-4 pr-3 mt-4">
              <h2 className="text-xl font-bold">Riwayat Pendidikan</h2>
              <hr className="w-full h-1 bg-black border-0 rounded md:my-3" />
              <div className="container mx-auto pt-3 gap-4">
                <div className="flex flex-col">
                  <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                      <tr>
                        <th className="border p-2">Jenjang Pendidikan</th>
                        <th className="border p-2">Institusi</th>
                        <th className="border p-2">Jurusan</th>
                        <th className="border p-2">Tahun Lulus</th>
                        <th className="border p-2">IPK</th>
                        <th className="border p-2">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.educations.map((education, index) => (
                        <tr key={index}>
                          <td className="border p-2">
                            <input type="text" placeholder="Jenjang" value={education.level} onChange={(e) => handleEducationChange(index, 'level', e.target.value)} className="border p-2 rounded w-full" />
                          </td>
                          <td className="border p-2 text-center">
                            <input type="text" placeholder="Institusi" value={education.institution} onChange={(e) => handleEducationChange(index, 'institution', e.target.value)} className="border p-2 rounded w-full" />
                          </td>
                          <td className="border p-2">
                            <input type="text" placeholder="Jurusan" value={education.major} onChange={(e) => handleEducationChange(index, 'major', e.target.value)} className="border p-2 rounded w-full" />
                          </td>
                          <td className="border p-2">
                            <input type="text" placeholder="tahun" value={education.year_graduation} onChange={(e) => handleEducationChange(index, 'year_graduation', e.target.value)} className="border p-2 rounded w-full" />
                          </td>
                          <td className="border p-2">
                            <input type="number" placeholder="IPK" value={education.ipk} onChange={(e) => handleEducationChange(index, 'ipk', e.target.value)} className="border p-2 rounded w-full" />
                          </td>
                          <td className="border p-2 text-center">
                            <button type="button" onClick={() => handleRemoveEducation(index)} className="bg-red-500 text-white p-2 rounded">
                              Hapus
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button type="button" onClick={handleAddEducation} className="bg-blue-500 text-white p-2 rounded mt-4">
                    Tambah Pendidikan
                  </button>
                </div>{' '}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">Riwayat Kerja</h2>
            <hr className="w-full h-1 bg-black border-0 rounded md:my-3" />

            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border p-2">Nama Perusahaan</th>
                  <th className="border p-2">Posisi terakhir</th>
                  <th className="border p-2">Pendapatan Terakhir</th>
                  <th className="border p-2">Tahun </th>
                  <th className="border p-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {formData.works.map((work, index) => (
                  <tr key={index}>
                    <td className="border p-2">
                      <input type="text" placeholder="Masukan nama perusahaan" value={work.name_work} onChange={(e) => handleWorkChange(index, 'name_work', e.target.value)} className="border p-2 rounded w-full" />
                    </td>
                    <td className="border p-2 text-center">
                      <input type="text" placeholder="Masukan posisi" value={work.position} onChange={(e) => handleWorkChange(index, 'position', e.target.value)} className="border p-2 rounded w-full" />
                    </td>
                    <td className="border p-2">
                      <input type="number" placeholder="Masukan pendapatan terakhir" value={work.income} onChange={(e) => handleWorkChange(index, 'income', e.target.value)} className="border p-2 rounded w-full" />
                    </td>
                    <td className="border p-2">
                      <input type="text" placeholder="tahun" value={work.year_work} onChange={(e) => handleWorkChange(index, 'year_work', e.target.value)} className="border p-2 rounded w-full" />
                    </td>

                    <td className="border p-2 text-center">
                      <button type="button" onClick={() => handleRemoveWork(index)} className="bg-red-500 text-white p-2 rounded">
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" onClick={handleAddWorks} className="bg-blue-500 text-white p-2 rounded mt-4">
              Tambah Pekerjaan
            </button>
          </div>
          <div className="flex justify-center items-center mt-4">
            <button type="submit" className="bg-blue-500 text-white p-3 text-sm rounded-lg hover:bg-blue-500/80">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
