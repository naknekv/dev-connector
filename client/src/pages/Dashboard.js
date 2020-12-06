import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Spinner from '../components/layout/Spinner';
import { getProfileStart } from '../redux/profile/profileActions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const loading = useSelector(({ profile }) => profile.loading);
  const profile = useSelector(({ profile }) => profile.userProfile);

  useEffect(() => dispatch(getProfileStart()), [dispatch]);

  if (loading) return <Spinner />;

  if (profile?.type === 'no-profile')
    return (
      <section className='container'>
        <div>
          <p>You have yet to create your profile! Please add some info</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </div>
      </section>
    );

  return (
    <section className='container'>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome John Doe
      </p>
      <div className='dash-buttons'>
        <Link to='/edit-profile' className='btn btn-light'>
          <i className='fas fa-user-circle text-primary'></i> Edit Profile
        </Link>

        <a href='add-experience.html' className='btn btn-light'>
          <i className='fab fa-black-tie text-primary'></i> Add Experience
        </a>
        <a href='add-education.html' className='btn btn-light'>
          <i className='fas fa-graduation-cap text-primary'></i> Add Education
        </a>
      </div>

      <h2 className='my-2'>Experience Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th className='hide-sm'>Title</th>
            <th className='hide-sm'>Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tech Guy Web Solutions</td>
            <td className='hide-sm'>Senior Developer</td>
            <td className='hide-sm'>02-03-2009 - 01-02-2014</td>
            <td>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Traversy Media</td>
            <td className='hide-sm'>Instructor & Developer</td>
            <td className='hide-sm'>02-03-2015 - Now</td>
            <td>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className='my-2'>Education Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Degree</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Northern Essex</td>
            <td className='hide-sm'>Associates</td>
            <td className='hide-sm'>02-03-2007 - 01-02-2009</td>
            <td>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className='my-2'>
        <button className='btn btn-danger'>
          <i className='fas fa-user-minus'></i>
          Delete My Account
        </button>
      </div>
    </section>
  );
};

export default Dashboard;