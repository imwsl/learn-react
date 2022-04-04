import './App.css';
import GithubUser from './GithubUser';
import {ListPeaks, ShortListPeaks} from './ListPeaks';

import faker from '@faker-js/faker'

import AvatarListApp from './AvatarListApp';

import { NewGithubUser001 } from './NewGithubUser';

import SearchPanel from './SearchPanel';

const renderItem = (item, i) => (
  <div style={{display: "flex"}} key={i}>
    <img src={item.avatar} alt={item.name} width={50}/>
    <p>{item.name} - {item.email}</p>
  </div>
)

function App() {

  const data = [
    {name: "Freel Peak", elevation: 10891},
    {name: "Monument Peak", elevation: 10067},
    {name: "Pyramid Peak", elevation: 9983},
    {name: "Mt. Tallac", elevation: 9735}
  ]

  // generate 5000 fake names, emails, avatars
  // 
  const bigList = [...Array(5)].map(()=>({
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar()
  }))

  return (
    <div className="App">
      <GithubUser login="moonhighway"/>
      <ListPeaks data={data} renderEmpty="no peaks!!"/>
      <ShortListPeaks data={data} renderEmpty="no peaks!!"/>

      <AvatarListApp data={bigList} renderItemFunc={renderItem}/>

      <NewGithubUser001 login="moontahoe"/>

      <SearchPanel />
    </div>
  );
}

export default App;
