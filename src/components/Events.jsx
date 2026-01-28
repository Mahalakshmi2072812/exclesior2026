import { Link } from 'react-router-dom';

const Event = () => {
  const events = [
    {
      title: "TECHARTIX",
      image: "./Images/techartix.png", 
    },
    {
      title: "FIXORA",
      image: "./Images/fixora.png", 
    },
    {
      title: "BRANDIFY",
      image: "/Images/brandify.png", 
    },
    {
      title: "TECH TRADE",
      image: "/Images/techtrade.png", 
    },
    {
      title: "TREND TECH",
      image: "Images/trendtech.png", 
  
    },
     {
      title: "TRIVIA",
      image: "/Images/trivia.png", 
  
    },
     {
      title: "INNOVEX",
      image: "/Images/innovex.png", 
  
    },
     {
      title: "EUREKA",
      image: "/Images/eureka.png", 
  
    },
  ];

  return (
    <div className="event mt-5 pt-5">
      <div className="container ">
        <div className="row">
          {events.map((event, index) => (
            <div className="col-md-4 mb-4 my-4" key={index}>
              <div className="card h-100 cards">
                <img src={event.image} className="card-img-top" alt={event.title} />
                <div className="card-body">
                  <h5 className="card-title text-light text-center">{event.title}</h5>
                  <Link to={`/rules`} className="btn btn-primary">View Rules</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
