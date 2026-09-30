import './styles/App.css';
import GameWindow from './gameWindow';
export default function App() {
  return (
    <>
      <Header />
      <h1>Memory</h1>
      <GameWindow />
    </>
  );
}
function Header() {
  return (
    <header>
      <div className="headerLeft">
        <p>Memory by ZK11</p>
      </div>
      <div className="headerRight">
        <p>Contact me via: </p>
        <a href="https://github.com/Z-K11">Github</a>
        <a href="https://www.linkedin.com/in/zk11/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3ByZVxsb67SO6pJKntsYwbIQ%3D%3D">
          LinkedIn
        </a>
        <a href="https://www.facebook.com/profile.php?id=100089228738451">
          Facebook
        </a>
      </div>
    </header>
  );
}
