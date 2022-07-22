import type { NextPage } from 'next';
import NameBar from '../components/NameBar';
import TaskMenu from '../components/TaskMenu';

const Home: NextPage = () => {
  return (
    <div className='container'>
      <NameBar />
      <TaskMenu />
    </div>
  );
};

export default Home;
