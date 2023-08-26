import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/Header/Header';
import Account from '../components/Account/Account';
import dummyData from '../dummyData.json';
// import RegisterForm from '../components/Form/RegisterForm';
// import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { Input, alert } from '@material-tailwind/react';
import axios from 'axios';

const Register = () => {
  const [page, setPage] = useState(0);
  const [showAccount, setShowAccount] = useState(true);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate()


  const [formData, setFormData] = useState({
    user_type: '',
    full_name: '',
    email: '',
    password: '',
  });

  const {user_type, full_name, email, password} = formData;

  const onChangeForm = (fieldName, value) => {
    setFormData({...formData, [fieldName]: value});
    console.log(formData);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
  
    const updatedFormData = {
      ...formData,
      user_type: selectedCardType, // Set user_type here
    };

    // axios.post('http://localhost:8000/register', {user_type: selectedCardType, full_name, email, password})
    // .then(res => {
    //   alert('Created')
    // }).catch(err => console.log(err))


    try {
			const url = "http://localhost:8080/api/users";
			const res = await axios.post(url, {user_type: selectedCardType, full_name, email, password});
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}

    console.log(updatedFormData)
  
  }


  // if (registered) return <Navigate to='/login' />;

  // End of New features


  const FormTitles = ["Type of Account", "Personal Details"];

  const handleCardSelect = (index) => {
    setSelectedCardIndex(index);
  };

  const handleContinueClick = () => {
    if (selectedCardIndex !== null) {
      const selectedCard = dummyData[selectedCardIndex];
      console.log('Continue button clicked. Selected card:', selectedCard);
      if (page === 0) {
        setPage(page + 1);
        setShowAccount(false);
      }
    } else {
      alert('Please select a card before continuing.');
    }
  };

  const handleBackClick = () => {
    if (page > 0) {
      setPage(page - 1);
      setShowAccount(true);
    }
  };

  const selectedCardType = selectedCardIndex !== null ? dummyData[selectedCardIndex].type : null;

  return (
    <div className='pt-16'>
      <Navbar button="login" />
      <Header />
      <div className=''>
        <h1>{FormTitles[page]}</h1>
      </div>
        {page === 0 && showAccount && (
          <Account
            selectedCardIndex={selectedCardIndex}
            handleCardSelect={handleCardSelect}
            handleContinueClick={handleContinueClick}
          />
        )}
        {page === 1 && !showAccount && (
          // <RegisterForm 
          //     selectedCardType={selectedCardType} 
          //     formData={formData} 
          //     onChangeForm={onChangeForm}  
          //     onSubmitForm={onSubmitForm}
          //     loading={loading}
          // />
          <div className="mx-auto mb-10 md:w-1/2">
            <form className="flex flex-col gap-4" onSubmit={onSubmitForm}>
              <input type="hidden" name="user_type" value={selectedCardType}/>
              <Input
                type='text'
                label='Full Name'
                onChange={e => onChangeForm('full_name', e.target.value)}
                value={full_name}
                required
              />
              {/* <p className="text-red-600">{errors.full_name?.message}</p> */}

              <Input
                type='email'
                label='Email Address'
                onChange={e => onChangeForm('email', e.target.value)}
                value={email}
                required
              />
              {/* <p className="text-red-600">{errors.email?.message}</p> */}

              <Input
                type='password'
                label='Password'
                onChange={e => onChangeForm('password', e.target.value)}
                value={password}
                required
              />

              {error &&  <p className="text-red-600">{error}</p>}
             

              {/* <p>{data}</p> */}

                
                  <button
                    className="px-4 py-2 mt-4 text-white bg-blue-500 rounded cursor-pointer"
                    type="submit"
                    
                  >
                    Register
                  </button>
                

                {/* <input
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded cursor-pointer"
                /> */}
              </form>
            </div>
        )}
        {page > 0 && (
          <button
            className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
            onClick={handleBackClick}
          >
            Back
          </button>
        )}
      </div>
  );
};

export default Register;