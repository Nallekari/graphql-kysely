import logo from './logo.svg';
import './App.css';
import { useQuery, gql, } from "@apollo/client";

function App() {

  
  //const GET_JOBS = gql`  query GetCompanies {    companies {      name      websiteUrl      logoUrl}  }`;
  const GET_CITIES = gql`  query GetCitiesAndCompanies {    cities {      name      country{name}}  companies{  name  websiteUrl logoUrl}}`;

  const { loading, error, data } = useQuery(GET_CITIES);


  if (loading) return <p>Loading...</p>;
  else if (error) return <p>Error...</p>
  else {
    return (
      <div className="App" style={{ display: "flex", justifyContent: "center"}}>
        <div>
        <table>
          <b>Companies</b>
              <tbody>
                {data.companies.map((company, index) =>
                  <tr key={index}>
                    <td>{company.name}</td>
                    <td style={{}}><a href={company.websiteUrl}>{company.websiteUrl}</a></td>
                    <img src={company.logoUrl} width={60}></img>
                  </tr >
                )}
              </tbody >
          </table >
          </div>
        <div>
        <table>
          <b>Cities</b>
          <tbody>
            {data.cities.map((city, index) =>
              <tr key={index}>
                <td>{city.name}</td>
                <td>{city.country.name}</td>
              </tr >
            )}
          </tbody >
        </table>
          </div>
      </div >
    );
} 
}

export default App;
