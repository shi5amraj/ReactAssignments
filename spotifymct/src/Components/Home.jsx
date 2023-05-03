
import "./Home.css"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { AiOutlineInstagram,AiFillTwitterCircle } from "react-icons/ai"
import { FaFacebook } from "react-icons/fa"
import {useEffect} from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {

   const [playlist,setPlayList]=useState([]);
   const [podcasts,setPodcasts]=useState([]);

    const url = 'https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=5&numberOfTopResults=5';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ca249f6bf4msh46e5c5c5cec93cdp1a3896jsncbb78ffd8098',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    const myasyncfun= async ()=>
    {
       try {
           
           const response = await fetch(url, options);
           const result = await response.json();
           setPlayList(result.playlists.items)
           setPodcasts(result.podcasts.items)
          
           console.log(result.podcasts.items)

       } catch (error) {
           console.error(error);
       }

    }

    useEffect( ()=>
    {   
       
         myasyncfun();

    },[])
    
    const clickCard=()=>
    {
         
       <Link  to="/songdetails"></Link>


    }



    return (
        <div className="home-container">
            <div className="home-container-top-bar-container">
                <div className="home-container-top-bar-left">
                    <BsChevronLeft color={"white"} className="leftarrow" />
                    <BsChevronRight color={"white"} className="rightarrow" />

                </div>
                <div className="home-container-top-bar-right">
                    <span>Sign Up</span>
                    <button>Login</button>

                </div>


            </div>
            <div className="home-container-focus-div">

               
                <div className="card-heading-div">
                    <span>Focus</span>
                    <span className="span2">show all</span>

                </div>
                <div className="card-div">


                {
                    playlist.map((elem)=>{
                    return(
                        <Link to="/songdetails">
                        <div className="card">
                        <img src={elem.data.images.items[0].sources[0].url} alt="" />
                        <h6>{elem.data.name}</h6>
                        <span>{elem.data.owner.name}</span>
                    </div>
                    </Link>
                    )

                    })
                }
                    
                    
                </div>



            </div>
            <div className="home-container-spotify-playlist-div">

            <div className="card-heading-div">
                    <span>Spotify PlayList</span>
                    <span className="span2">show all</span>

                </div>
                <div className="card-div">
               {
                playlist.map((elem)=>{

                    return(
                        <Link to="/songdetails">
                  <div className="card">
                       <img src={elem.data.images.items[0].sources[0].url} alt="" />
                        <h6>{elem.data.name}</h6>
                        <span>{elem.data.owner.name}</span>
                    </div>
                    </Link>

                    )

                })
               }
   
                </div>


            </div>
            <div className="home-container-sound-of-india-div">
            <div className="card-heading-div">
                    <span>Sound of India</span>
                    <span className="span2">show all</span>

                </div>
                <div className="card-div">
                {
                    podcasts.map((elem)=>{
                    return(
                        <Link to="/songdetails">
                        <div className="card" >
                        <img src={elem.data.coverArt.sources[0].url} alt="" />
                        <h6>{elem.data.publisher.name}</h6>
                        <span>{elem.data.name}</span>
                        </div>
                    </Link>

                    )

                    })
                }



                    


                   

                   


                    
                </div>

            </div>

            <div className="home-container-footer-div">
                <div className="footer-top">
                  <div className="footer-top-left">
                    <h5>Company</h5>
                    <span>About</span>
                    <span>Jobs</span>
                    <span>For the Record</span>

                  </div>
                  <div className="footer-top-mid1">
                  <h5>Communities</h5>
                    <span>For Artist</span>
                    <span>Developers</span>
                    <span>Advertising</span>
                    <span>Investort</span>
                    <span>Vendors</span>
                    <span>Spotify For Work</span>
                    
                  </div>
                  <div className="footer-top-mid2">
                  <h5>Useful Links</h5>
                    <span>Support</span>
                    <span>Free Mobile App</span>
                  </div>
                  <div className="footer-top-right">

                   <AiOutlineInstagram size={30}/>
                    <AiFillTwitterCircle size={30}/>
                    <FaFacebook size={30}/>
                  </div>

                </div>
                <div className="footer-bottom">
                 <hr style={{backgroundColor:"white",height:"2px"}}/>

                 <div ><span>© 2023 Spotify AB</span></div>

                </div>




            </div>






        </div>


    )

}

export default Home;