import Sidebar from '../../components/Sidebar/Sidebar';
import SinglePost from '../../components/SinglePost/SinglePost';
import './SingleStyles';

export default function Single() {
  return (
    <SingleContainer>
      <SinglePost />
      <Sidebar />
    </SingleContainer>
  );
}
