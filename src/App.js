import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
import Lifecyclemount from './components/Lifecyclemount';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import RefsClassesParent from './components/RefsClassesParent';
import ForwardRefParent from './components/ForwardRefParent';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import Counter2 from './components/Counter2';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import GetRequest from './components/GetRequest';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Anurag" heroName="batman">
        <p>This is the children </p>
      </Greet>
      <Greet name="Satyam" heroName="superman">
        <button>Action</button>
      </Greet>
      <Greet name="Manish" heroName="spiderman" /> */}
      {/* <Welcome name="Anurag" heroName="batman">This is welcome file Children</Welcome>        
       <Welcome name="Satyam" heroName="superman"/>        
       <Welcome name="Manish" heroName="spiderman"/>         */}
      {/* <Message/> */}
      {/* <Hello/> */}
      {/* <Greet name ="Anurag" heroName = "Batman"></Greet> */}
      {/* <Welcome name = "Satyam" heroName="Superman"></Welcome> */}

      {/* <Counter/> */}

      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <Form/> */}
      {/* <Lifecyclemount/> */}
      {/* <PureComp/> */}
      {/* <ParentComp/> */}
      {/* <RefsDemo/> */}
      {/* <RefsClassesParent /> */}
      {/* <ForwardRefParent/> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
        <Hero heroName="Spiderman" />
        <Hero heroName="Joker" />

      </ErrorBoundary> */}
{/* 
<ClickCounter name = "Bakode"/>
<HoverCounter /> */}

{/* <ClickCounter2/>
<HoverCounter2/>

<User render = {(isLoggedIn) => isLoggedIn ?'Bakode':"Guest"}/> */}
{/* <Counter2 render = {(count , incrementCount)=><ClickCounter2 count = {count} incrementCount = {incrementCount}/>}  />

<Counter2 render = {(count , incrementCount)=><HoverCounter2 count = {count} incrementCount = {incrementCount}/>}  /> */}
{/* <UserProvider value = "Satyam"><ComponentC/></UserProvider> */}

{/* <GetRequest/> */}
<PostForm/>

    </div>
  );
}

export default App;
