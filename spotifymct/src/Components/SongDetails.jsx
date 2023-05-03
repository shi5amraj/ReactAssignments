
import { BsChevronLeft, BsChevronRight, BsSearch } from "react-icons/bs"

import { AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai"
import { FaFacebook } from "react-icons/fa"


import "./SongDetails.css"
import { useState } from "react"
import { useEffect } from "react"


function SongDetails() {

   const [artist,setArtist]= useState([]);
   const [time,setTime]=useState();

   useEffect(()=>{
    artistlistfun();

   },[])

    const artistlistfun=async ()=>
    {
        const url = 'https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'ca249f6bf4msh46e5c5c5cec93cdp1a3896jsncbb78ffd8098',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setArtist(result.episodes.items)
            console.log(result.episodes.items);
        } catch (error) {
            console.error(error);
        }


    }

    const gettime=(miliseconds)=>
    {
        const date = new Date(miliseconds);
        return(`${date.getMinutes()}:${date.getSeconds()}`);

    }

    return (
        <div className="song-details-container-div">

            <div className="search-container-top-bar-container">
                <div className="search-container-top-bar-left">
                    <BsChevronLeft color={"white"} className="leftarrow" />
                    <BsChevronRight color={"white"} className="rightarrow" />

                </div>

                <div className="search-container-top-bar-right">
                    <span>Sign Up</span>
                    <button>Login</button>

                </div>


            </div>

            <div className="songdetails-top-container-div">
                 <div className="songdetails-top-div">
                <span className="span1">Playlist</span>
                <span className="span2 ">Today's Top Hits</span>
                <span className="span3">Rema & Selena Gomez are on top of the Hottest 50!</span>
                </div>

            </div>
            <div className="songdetails-mid-container-div">

                
                <div className="songdetails-mid-container-song-list-div">
                    <div className="title">Title</div>
                    <div className="album">Album</div>
                    <div className="date">Date Added</div>
                    <div className="duration">Duration</div>
                    
                </div>
                <hr style={{backgroundColor:"white",height:"2px"}}></hr>

                {
                 artist.map((elem)=>{

                  

                    return(
                        <div className="songdetails-mid-container-song-list-div-data">
                    <div className="title">
                        <img src={elem.data.coverArt.sources[0].url} alt="" width={50} height={50} />
                        <p>{elem.data.name}</p>
                        </div>
                    <div className="album">{elem.data.name}</div>
                    <div className="date">{elem.data.releaseDate.isoString}</div>
                    <div className="duration">{gettime(elem.data.duration.totalMilliseconds)}</div>
                    

                 

                </div>
                        
                    )
                 })
              

                }
                
              

            </div>
            <div className="search-container-footer-container">

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

                        <AiOutlineInstagram size={30} />
                        <AiFillTwitterCircle size={30} />
                        <FaFacebook size={30} />
                    </div>

                </div>
                <div className="footer-bottom">
                    <hr style={{ backgroundColor: "white", height: "2px" }} />

                    <div ><span>© 2023 Spotify AB</span></div>

                </div>

            </div>



        </div>


    )

}

export default SongDetails;