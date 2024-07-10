import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import '../App.css'; // Ensure this CSS file exists
import image1 from "./Images/image1.png";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    pwdOption: '',
    nationalId: '',
    dobCertNumber: '',
    mobileNumber: '',
    guardianMobileNumber: '',
    motherNationalId: '',
    email: '',
    ward: '',
    location: '',
    subLocation: '',
    institutionName: '',
    admissionNo: '',
    levelOfStudy: '',
    modeOfStudy: '',
    yearOfStudy: '',
    semester: '',
    courseDuration: '',
    familyStatus: '',
    fathersIncome: '',
    mothersIncome: '',
    idFront: null,
    idBack: null,
    selfie: null
  });

  const [selfiePreview, setSelfiePreview] = useState(null);
  const [popup, setPopup] = useState({ show: false, success: false });
  const [error, setError] = useState('');

  const wardOptions = [
    'TABAKA', 'BOGETENGA', "BOIKANG'A", "MOTICHO", "GETENGA", "BORABU-CHITAGO"
  ];
  const locationOptions = [
    'CHITAGO', 'KABIERO', 'S.M.BORABU', 'GETENGA', 'OTENDO', 'NYANSAKIA', 'GETONO', 'MUGIRANGO C. S.',
    'NYAKEMBENE', 'MARONGO', 'S.M CHACHE', 'BOSINANGE', 'BOMONYARA'
  ];
  const subLocationOptions = [
    "AMAKARA", "BOIGE", "KIAGWARE", "BOTABORI", "MONIANKU", "NYAMONDO", "NYARAMBA", "MUMA", "BOSAGA",
    "NYABERA", "NDONYO", "EBURI", "NYATARO", "NYANSORE", "BOGETENGA", "NDURU", "BOMONYAMA", "BOIKANG'A",
    "EMESA", "IKORO", "NYAKORERE", "BOKIMAI", "BOMWARE/BOTA", "BONYAGWANGA", "BOMBURE", "IRINGA", "NYATIKE"
  ];

  const institutions = [
    "Adventist University of Africa",
    "Africa International University",
    "Africa Nazarene University",
    "African Institute of Research and Development Studies",
    "Air Travel and Related Studies Centre",
    "Alphax College",
    "Amani Counselling Centre and Training Institute",
    "Amboseli Institute of Hospitality and Technology",
    "Australian Studies Institute",
    "Beam International Training Centre",
    "Bungoma Technical Training",
    "Century Park College",
    "Chuka University",
    "Ciavina School of Dressmaking",
    "Coast Institute of Technology",
    "College of Human Resource Management",
    "Computer Pride Training Centre",
    "Cooperative University College of Kenya",
    "Daystar University",
    "Dedan Kimathi University of Technology",
    "Dima College",
    "East Africa School of Management",
    "East Africa School of Theology",
    "East Africa Vision Institute",
    "East African Institute of Certified Studies",
    "East African School of Aviation",
    "Egerton University",
    "Eldoret Aviation Training Institute",
    "Elite Commercial Institute",
    "Embu University College",
    "Emma Daniel Arts Training Institute",
    "Esmart College",
    "Excel Global College",
    "Genco University",
    "Graffins College",
    "Great Lakes University of Kisumu",
    "Gretsa University",
    "Gusii Institute of Technology",
    "Hekima University College",
    "Hemland College",
    "Highlands State College",
    "ICT Fire and Rescue",
    "Institute of Advanced Technology",
    "International Centre of Technology",
    "International Hotel and Tourism Institute",
    "International Leadership University",
    "International University of Professional Studies",
    "Intraglobal Training Institute",
    "Jaramogi Oginga Odinga University of Science and Technology",
    "Jodan College of Technology",
    "Jomo Kenyatta University of Agriculture and Technology",
    "Kabarak University",
    "KAG East University",
    "Kaiboi Technical Training Institute",
    "Karatina University",
    "KCA University",
    "Kenya Aeronautical College",
    "Kenya Christian Industrial Training Institute",
    "Kenya Highlands Evangelical University",
    "Kenya Industrial Training Institute",
    "Kenya Institute of Applied Sciences",
    "Kenya Institute of Business and Counselling Studies",
    "Kenya Institute of Development Studies",
    "Kenya Institute of Management",
    "Kenya Institute of Professional Studies",
    "Kenya Institute of Social Work and Community Development",
    "Kenya Institute of Software Engineering",
    "Kenya Institute of Special Education",
    "Kenya Medical Training College",
    "Kenya Methodist University",
    "Kenya School of Government",
    "Kenya School of Monetary Studies",
    "Kenya School of Professional Counsellors",
    "Kenya Technical Teachers College",
    "Kenya Utalii College",
    "Kenya Water Institute",
    "Kenya Wildlife Service Training Institute",
    "Kenyatta University",
    "Kiambu Institute of Science and Technology",
    "Kibabii University College",
    "Kirinyaga University College",
    "Kiriri Womens University of Science And Technology",
    "Kisii University",
    "Kisumu Polytechnic",
    "Kitale Technical Training Institute",
    "Laikipia University",
    "Lukenya University",
    "Maasai Mara University",
    "Machakos Institute of Technology",
    "Machakos University College",
    "Marist International University College",
    "Marketing Society of Kenya",
    "Maseno University",
    "Masinde Muliro University of Science and Technology",
    "Matongo Lutheran Teachers Training College",
    "Meru Technical Training Institute",
    "Meru University of Science and Technology",
    "Migori Teachers College",
    "Moi University",
    "Mombasa Aviation Training Institute",
    "Mount Kenya University",
    "Multimedia University of Kenya",
    "Muranga University College",
    "Nairobi Aviation College",
    "Nairobi Institute of Business Studies",
    "Nairobi Institute of Technology",
    "Nairobi Technical Training Institute",
    "Nakuru Training Institute",
    "Ninety Nines",
    "Nkabune Technical Training Institute",
    "North Coast Medical Training College",
    "Oshwal College",
    "Pan Africa Christian University",
    "PC Kinyanjui Technical Training Institute",
    "Pioneer International University",
    "Pioneers Training Institute",
    "Pwani University",
    "Railway Training Institute",
    "Ramogi Institute of Advanced Technology",
    "Regina Pacis University College",
    "Regional Center of Management",
    "Regional Institute of Business Management",
    "Riara University",
    "Riccatti Business College of East Africa",
    "Rift Valley Institute of Science and Technology",
    "Rift Valley Technical Training Institute",
    "Rongo University College",
    "Royal College of Science and Technology",
    "Sacred Lake Institute of Technology",
    "Sacred Training Institute",
    "Sagana Training Technical Institute",
    "Scott Christian University",
    "Sensei Institute of Technology",
    "Shalom Information Technology Center",
    "Shanzu Teachers Training College",
    "Skylink Flying School",
    "Skynet Business College",
    "Skypath Aviation College",
    "South Eastern Kenya University",
    "St. John Teachers Training College",
    "St. Pauls University",
    "Standards Aviation Flying School",
    "Star College of Management Studies",
    "Starnet College",
    "Strathmore University",
    "Summit Institute of Professionals",
    "Taita Taveta University College",
    "Tangaza University College",
    "Technical University of Kenya",
    "Technical University of Mombasa",
    "The Catholic University of Eastern Africa",
    "The East African University",
    "The Management University of Africa",
    "The Presbyterian University of East Africa",
    "The University of Nairobi",
    "Thika College of Banking and Accountancy",
    "Thika Institute of Business Studies",
    "Thika School of Medical and Health Sciences",
    "Times Training College",
    "Tom Mboya Labour College",
    "Transafric Accountancy and Management College",
    "Umma University",
    "United Africa College",
    "United States International University",
    "Unity College of Professional Studies",
    "University of Eastern Africa Baraton",
    "University of Eldoret",
    "University of Kabianga",
    "Uzima University College",
    "Vision Institute of Professionals",
    "Vision Stars Training Institute",
    "Wright Flyers Aviation Institute",
    "Zetech University"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });

    if (name === 'selfie' && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelfiePreview(reader.result);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const performOCR = async (imageFile) => {
    try {
      const result = await Tesseract.recognize(imageFile, 'eng');
      return result.data.text;
    } catch (error) {
      console.error('OCR Error:', error);
      return null;
    }
  };

  const validateID = async () => {
    if (formData.idFront && formData.idBack) {
      const idFrontText = await performOCR(formData.idFront);
      const idBackText = await performOCR(formData.idBack);

      if (idFrontText && idBackText) {
        const { nationalId } = formData;

        if (!idFrontText.includes(nationalId)) {
          setError('ID number does not match the one on the front ID image.');
          return false;
        }

        const locationMatch = locationOptions.some(location => idBackText.includes(location));
        const subLocationMatch = subLocationOptions.some(subLocation => idBackText.includes(subLocation));

        if (!locationMatch && !subLocationMatch) {
          setError('Location or sub-location on the back ID image does not match any of the entered options.');
          return false;
        }

        return true;
      }
    }
    setError('Failed to perform OCR on ID images.');
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidID = await validateID();

    if (isValidID) {
      setPopup({ show: true, success: true });
      setFormData({
        fullName: '',
        gender: '',
        pwdOption: '',
        nationalId: '',
        dobCertNumber: '',
        mobileNumber: '',
        guardianMobileNumber: '',
        motherNationalId: '',
        email: '',
        ward: '',
        location: '',
        subLocation: '',
        institutionName: '',
        admissionNo: '',
        levelOfStudy: '',
        modeOfStudy: '',
        yearOfStudy: '',
        semester: '',
        courseDuration: '',
        familyStatus: '',
        fathersIncome: '',
        mothersIncome: '',
        idFront: null,
        idBack: null,
        selfie: null
      });
      setSelfiePreview(null);
    } else {
      setPopup({ show: true, success: false });
    }

    setTimeout(() => {
      setPopup({ show: false, success: false });
    }, 3000);
  };

  return (
    <div className='bg-slate-600 mt-28'>
      <div className="register-form text-start">
        <div className="header">
          <div className="md:flex block md:justify-between bg-white">
            <img src={image1} alt="Logo" className="h-32 w-32" />
            <div className="text-center max-w-full text-black font-bold text-3xl my-4">
              SOUTH MUGIRANGO CONSTITUENCY STUDENT PORTAL
            </div>
          </div>
          <div className="header-text">
            <h3 className='font-bold text-2xl'>Tertiary Bursary Application Form</h3>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="section">
            <h3 className='font-bold text-xl text-white text-center bg-slate-800 rounded-lg pt-4'>Personal Details</h3>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>Full Name:</label>
              <input type="text" placeholder='Enter your name' name="fullName" value={formData.fullName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>Gender:</label>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>Person With Disability:</label>
              <select name="pwdOption" value={formData.pwdOption} onChange={handleChange}>
                <option value="">Select PWD Option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>National ID:</label>
              <input type="text" placeholder='Enter your ID/Birth Cert Number' name="nationalId" value={formData.nationalId} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>Mobile Number:</label>
              <input type="text" placeholder='Enter your Mobile Number' name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>Guardian's Mobile No:</label>
              <input type="text" placeholder='Enter your Guardian Mobile Number ' name="guardianMobileNumber" value={formData.guardianMobileNumber} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>Parent's National ID:</label>
              <input type="text" placeholder='Enter your Mother National ID' name="motherNationalId" value={formData.motherNationalId} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>Email:</label>
              <input type="email" placeholder='Enter your Email' name="email" value={formData.email} onChange={handleChange} />
            </div>
          </div>
          <div className="section">
            <h3 className='font-bold text-xl text-white text-center bg-slate-800 rounded-lg pt-4'>Residence</h3>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>Ward:</label>
              <select name="ward" value={formData.ward} onChange={handleChange}>
                <option value="">Select Ward</option>
                {wardOptions.map((ward, index) => (
                  <option key={index} value={ward}>{ward}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>Location:</label>
              <select name="location" value={formData.location} onChange={handleChange}>
                <option value="">Select Location</option>
                {locationOptions.map((location, index) => (
                  <option key={index} value={location}>{location}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>Sub-Location:</label>
              <select name="subLocation" value={formData.subLocation} onChange={handleChange}>
                <option value="">Select Sub-Location</option>
                {subLocationOptions.map((subLocation, index) => (
                  <option key={index} value={subLocation}>{subLocation}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="section">
            <h3 className='font-bold text-xl text-white text-center bg-slate-800 rounded-lg pt-4'>Institution Details</h3>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>Institution Name:</label>
              <select name="institutionName" value={formData.institutionName} onChange={handleChange}>
                <option value="">Select Institution</option>
                {institutions.map((institution, index) => (
                  <option key={index} value={institution}>{institution}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>Admission Number:</label>
              <input type="text" placeholder='Enter your Admission Number' name="admissionNo" value={formData.admissionNo} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>Level of Study:</label>
              <select type="text" placeholder='Enter your Level of Study' name="levelOfStudy" value={formData.levelOfStudy} onChange={handleChange} >
                <option>Enter your Level of Study</option>
                <option>Postgraduate</option>
                <option>Undergraduate</option>
                <option>Diploma</option>
                <option>Certificate</option>
              </select>
            </div>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>Mode of Study:</label>
              <select type="text" placeholder='Enter your Mode of Study' name="modeOfStudy" value={formData.modeOfStudy} onChange={handleChange} >
              <option>Enter your Mode of Study</option>
              <option>Full Time</option>
              <option>Bad Time</option>
              </select>
            </div>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>Year of Study:</label>
              <select type="text" placeholder='Enter your Year of Study' name="yearOfStudy" value={formData.yearOfStudy} onChange={handleChange} >
                 <option>1</option>
                 <option>2</option>
                 <option>3</option>
                 <option>4</option>
                 <option>5</option>
                 <option>6</option>
               </select>
            </div>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>Semester:</label>
              <select type="text" placeholder='Enter your Semester' name="semester" value={formData.semester} onChange={handleChange} >
                <option>1</option>
                <option>2</option>
                <option>3</option>
             
              </select>
            </div>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>Course Duration:</label>
              <select type="text" placeholder='Enter your Course Duration' name="courseDuration" value={formData.courseDuration} onChange={handleChange} >
               <option>Enter your Course Duration</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
               </select>
            </div>
          </div>
          <div className="section">
            <h3 className='font-bold text-xl text-white text-center bg-slate-800 rounded-lg pt-4'>Family Details</h3>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>Family Status:</label>
              <select type="text" placeholder='Enter your Family Status' name="familyStatus" value={formData.familyStatus} onChange={handleChange} >
                <option>Enter your Family Status</option>
                <option>Both Parents alive</option>
                <option>Single Parent</option>
                <option>Orphan</option>
              </select>
            </div>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>Father's Income:</label>
              <select type="text" placeholder='Enter your Fathers Income' name="fathersIncome" value={formData.fathersIncome} onChange={handleChange} >
                <option>Earns over kshs. 50,000 a month</option>
                <option>Earns less than kshs. 50,000 a month</option>
                <option>No specific source of Income</option>
                <option>Not Applicable</option>
               </select>
            </div>
            <div className="form-group">
              <label className='md:bg-yellow-700 md:w-8 md:-ml-4 md:p-3 md:rounded-lg'>Mother's Income:</label>
              <select type="text" name="mothersIncome" value={formData.mothersIncome} onChange={handleChange} >
                <option>Earns over kshs. 50,000 a month</option>
                <option>Earns less than kshs. 50,000 a month</option>
                <option>No specific source of Income</option>
                <option>Not Applicable</option>
                </select>           
             </div>
          </div>
          <div className="section">
            <h3 className='font-bold text-xl text-white text-center bg-slate-800 rounded-lg pt-4'>Uploads</h3>
            <div className="form-group">
              <label>ID Front:</label>
              <input type="file" name="idFront" onChange={handleFileChange} />
            </div>
            <div className="form-group">
              <label>ID Back:</label>
              <input type="file" name="idBack" onChange={handleFileChange} />
            </div>
            <div className="form-group">
              <label>Selfie:</label>
              <input type="file" name="selfie" onChange={handleFileChange} />
              {selfiePreview && <img src={selfiePreview} alt="Selfie Preview" className="selfie-preview" />}
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className='bg-green-700 text-white p-2 rounded-lg'>Register</button>
          </div>
        </form>
        {popup.show && (
          <div className={`popup ${popup.success ? 'popup-success' : 'popup-error'}`}>
            {popup.success ? 'Registration Successful!' : `Registration Failed: ${error}`}
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
