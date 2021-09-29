import "./Clients.css";
import { useEffect, useState } from "react";
import { clients } from "../../data/clients";

const Clients = (props) => {
  const [clientsData, setClientsData] = useState([]);

  // Mock http request to show getting asynchronous data
  const mockHttp = (success, timeout) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve(clients);
        } else {
          reject({ message: "Error" });
        }
      }, timeout);
    });
  };

  useEffect(() => {
    async function getClients() {
      try {
        const clients = await mockHttp(true, 1000);
        setClientsData(clients);
      } catch (e) {
        //Show error notification in real application
        console.log(e.message);
      }
    }
    getClients();
  }, []);

  return (
    <section className="clients">
      <h2 className="clients__title">Clients</h2>
      <p className="clients__copy">
        We value a great working relationship with our clients above all else.
        It's why they often come to our parties. It's also why we're able to
        challenge and inspire them to reach for the stars
      </p>
      {clientsData.length > 0 && (
        <div className="clients__logos-wrapper">
          {clientsData.map((logo) => {
            return <img src={logo.image} alt={logo.name} key={logo.name}/>;
          })}
        </div>
      )}
    </section>
  );
};

export default Clients;
