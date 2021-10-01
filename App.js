// import './App.css';
import React,{useState,useEffect} from 'react'
// import HotelDash from './Components/DashBoardCompo/HotelDash'
import Menu from './Components/MenuCompo/Menu'
// import Feedback from './Components/Forms/Feedback';






const MenuDish = [
  {
    ItemName: 'Peri-Peri Cheesy Fries',
    Available: 'Available',
    Price: '340',
    Image: "https://image.shutterstock.com/image-photo/paneer-tikka-kabab-red-sauce-260nw-423351916.jpg"
  },
  {
    ItemName: 'Butter Sauce Nachos',
    Available: 'Available',
    Price: '290',
  },
  {
    ItemName: 'Veg. Crispy',
    Available: 'Available',
    Price: '340',
    },
  {
    ItemName: 'Paneer Patiala',
    Available: 'Available',
    Price: '240',
  },
  {
    ItemName: 'Matka Paneer',
    Available: 'Available',
    Price: '300'
  },
  {
    ItemName: 'Cheese Paneer Paratha',
    Available: 'Available',
    Price: '290',
  },
 
]

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("isUserLoggedIn");

    if (storedData === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isUserLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      
      {/* <HotelDash/> */}
      {/* 
      
      
      <SignUp/>  */}
      {/* <Test name="Mikita"/>
      <Test name="Sonika"/>
      <Test name="Sheetal"/>
      */}
      
      {MenuDish.map((d, index) => (
          <Menu
            ItemName={d.ItemName}
            Available={d.Available}
            Price={d.Price}
            Image={d.Image}
           

          ></Menu>
      ))}
      
 
      {/* <Feedback/> */}
      
      
      {/* <Login/>  */}
      {/* <Counter/>
      <MessageChange/>  */}







    </div>
  );
}

export default App;
