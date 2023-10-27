import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fachingproduct } from "../Redux/productRedux/Action";
import "./home.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Cameradrones = () => {
  const { data } = useSelector((store) => store.Prodreducer);
  console.log(data.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Fachingproduct);
  }, []);
  return (
    <div>
        <div className="p-navbar">
            <div className="p-nav">
                <Link>
                    <img src="https://dji-official-fe.djicdn.com/dps/3b7953435e791d6a56253d87584e34cf.png" alt="" className="p-nav-img"/>
                    <p>Dji Mavic</p>
                </Link>
                <Link>
                    <img src="https://dji-official-fe.djicdn.com/dps/77738ff32f7a228fc58b4f401261e481.png" alt="" className='p-nav-img'/>
                    <p>Dji Mavic</p>
                </Link>
                <Link>
                    <img src="https://dji-official-fe.djicdn.com/dps/5698cb42a9a1fdce69e22f30550d9767.png" alt="" className='p-nav-img'/>
                    <p>Dji Mavic</p>
                </Link>
                <Link>
                    <img src="	https://dji-official-fe.djicdn.com/dps/0937a9739b844ce6d58ea6363d67b259.png" alt="" className='p-nav-img'/>
                    <p>Dji Mavic</p>
                </Link>
                <Link>
                    <img src="https://dji-official-fe.djicdn.com/dps/d13ba498aecd93533f69bcd1500458af.png" alt="" className='p-nav-img'/>
                    <p>Dji Mavic</p>
                </Link>
                <Link>
                    <img src="https://dji-official-fe.djicdn.com/dps/445acaa272ac55184d736f9518c50b3c.png" alt="" className='p-nav-img'/>
                    <p>Dji Mavic</p>
                </Link>
            </div>
        </div>
    <div className="p-div">
        {data.map((e) => (
          <div className="main-prod-div" key={e.id}>
            <div className="prod-div">
              <img src={e.image} alt="" className="p-image" />
             <div className="p-text">
             <h2 className="p-title">
                <span>Title:</span>
                {e.name}
              </h2>
              <h4 className="p-price">
                <span>Price:</span>
                {e.price}
              </h4>
              <h5 className="p-category">
                <span>Category:</span>
                {e.category}
              </h5>
              <Link to={`./${e.id}`}>
              <button className="p-btn">
                Learn More
                <i className="p-icon">
                       <IoIosArrowForward/>        
                </i>
              </button>
              </Link>
             </div>
            </div>
          </div>
        ))}
      </div>
      </div>
  );
};

export default Cameradrones;
