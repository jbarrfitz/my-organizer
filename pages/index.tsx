import type { NextPage } from 'next';
import Calendar from '../components/Calendar';
import NameBar from '../components/NameBar';
import TaskMenu from '../components/TaskMenu';

const Home: NextPage = () => {
  return (
    <div className='container'>
      <NameBar />
      <TaskMenu />
      <Calendar />
    </div>
  );
};

export default Home;
