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

const Login = () => {
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

  const onSubmitForm = async e => {
    e.preventDefault();

	console.log("Called")

    try {
		const url = "http://localhost:8080/api/auth";
		const {formData: res}= await axios.post(url, {email, password});
		localStorage.setItem("token", JSON.stringify(formData));
		console.log(`res: formData`)
		navigate("/dashboard");
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
    <div className='flex items-center justify-center h-screen'>
      <Card className='w-96'>
        <CardHeader
          variant='gradient'
          color='gray'
          className='mb-4 grid h-28 place-items-center'
        >
          <Typography variant='h3' color='white'>
            Log In
          </Typography>
        </CardHeader>
        <CardBody className='flex flex-col gap-4'>
          <form className='mt-5' onSubmit={onSubmitForm}>
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
              <Button variant='gradient' fullWidth type='submit'>
                Log In
              </Button>
              <Typography variant='small' className='mt-6 flex justify-center'>
                Don't have an account?
                <Typography
                  as='a'
                  href='/register'
                  variant='small'
                  color='blue-gray'
                  className='ml-1 font-bold'
                >
                  Sign up
                </Typography>
              </Typography>
            </CardFooter>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
