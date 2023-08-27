import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from '@material-tailwind/react';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
  
    console.log("Called");
  
    try {
      const url = "http://localhost:8080/api/auth"; // Use the correct API URL
      const response = await axios.post(url, { email, password }); // Use the correct variable names (email and password)
  
      localStorage.setItem("token", JSON.stringify(response.data));
      console.log("res:", response.data); // Print the response data
      navigate("/dashboard"); // Use the correct navigation function if it's available
  
      // Assuming `dispatch` and `authActions` are defined somewhere in your code
      dispatch(authActions.login());
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className='flex items-center justify-center'>
      <Navbar/>
      <div className=' pt-16'>
        <Card className=' w-80'>
          <div className='mb-4 grid place-items-center'
          >
            <Typography variant='h3'>
              Log In
            </Typography>
          </div>
          <CardBody>
            <form className='flex flex-col gap-4 mt-5' onSubmit={onSubmitForm}>
              <Input
                className='form-control'
                type='email'
                label='Email Address'
                name='email'
                onChange={onChange}
                value={email}
                required
              />
              <Input
                className='form-control'
                type='password'
                label='Password'
                name='password'
                onChange={onChange}
                value={password}
                required
              />
              <div className='-ml-2.5'>
                <Checkbox label='Remember Me' />
              </div>
              <CardFooter className='pt-0'>
                <Button variant='filled' type='submit' className=' bg-emerald'>
                  Log In
                </Button>
                <Typography variant='small' className='mt-6 flex justify-center'>
                  Don't have an account?
                </Typography>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='ml-1 font-bold'
                  >
                    <Link to='/register'>
                      Sign up
                    </Link>
                  
                  
                </Typography>
              </CardFooter>
            </form>
          </CardBody>
        </Card>

      </div>
    </div>
  );
};

export default Login;
