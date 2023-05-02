
import "./Home.css"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { AiOutlineInstagram,AiFillTwitterCircle } from "react-icons/ai"
import { FaFacebook } from "react-icons/fa"
import {useEffect} from "react";

function Home() {
    const url = 'https://spotify23.p.rapidapi.com/search/?type=playlists&offset=0&limit=10&numberOfTopResults=5';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ca249f6bf4msh46e5c5c5cec93cdp1a3896jsncbb78ffd8098',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    useEffect( ()=>
    {   
         const myasyncfun= async ()=>
         {
            try {
                
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error(error);
            }

         }
         myasyncfun();

       



    },[])
    




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
                    <div className="card">
                        <img src="https://media.istockphoto.com/id/1180357593/photo/his-mind-always-wanders-to-success.jpg?b=1&s=170667a&w=0&k=20&c=7cmlHm5_50geYH93xIE3_kIFHfFW_9LPC_euJA0w1Go=" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>



                    <div className="card">
                        <img src="https://media.istockphoto.com/id/1180357593/photo/his-mind-always-wanders-to-success.jpg?b=1&s=170667a&w=0&k=20&c=7cmlHm5_50geYH93xIE3_kIFHfFW_9LPC_euJA0w1Go=" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>


                    <div className="card">
                        <img src="https://media.istockphoto.com/id/1180357593/photo/his-mind-always-wanders-to-success.jpg?b=1&s=170667a&w=0&k=20&c=7cmlHm5_50geYH93xIE3_kIFHfFW_9LPC_euJA0w1Go=" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>


                    <div className="card">
                        <img src="https://media.istockphoto.com/id/1180357593/photo/his-mind-always-wanders-to-success.jpg?b=1&s=170667a&w=0&k=20&c=7cmlHm5_50geYH93xIE3_kIFHfFW_9LPC_euJA0w1Go=" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>


                    <div className="card">
                        <img src="https://media.istockphoto.com/id/1180357593/photo/his-mind-always-wanders-to-success.jpg?b=1&s=170667a&w=0&k=20&c=7cmlHm5_50geYH93xIE3_kIFHfFW_9LPC_euJA0w1Go=" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>

                </div>










            </div>
            <div className="home-container-spotify-playlist-div">

            <div className="card-heading-div">
                    <span>Spotify PlayList</span>
                    <span className="span2">show all</span>

                </div>
                <div className="card-div">
                    <div className="card">
                        <img src="https://media.istockphoto.com/id/1180357593/photo/his-mind-always-wanders-to-success.jpg?b=1&s=170667a&w=0&k=20&c=7cmlHm5_50geYH93xIE3_kIFHfFW_9LPC_euJA0w1Go=" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>



                    <div className="card">
                        <img src="https://media.istockphoto.com/id/1180357593/photo/his-mind-always-wanders-to-success.jpg?b=1&s=170667a&w=0&k=20&c=7cmlHm5_50geYH93xIE3_kIFHfFW_9LPC_euJA0w1Go=" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>


                    <div className="card">
                        <img src="https://media.istockphoto.com/id/1180357593/photo/his-mind-always-wanders-to-success.jpg?b=1&s=170667a&w=0&k=20&c=7cmlHm5_50geYH93xIE3_kIFHfFW_9LPC_euJA0w1Go=" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>


                    <div className="card">
                        <img src="https://media.istockphoto.com/id/1180357593/photo/his-mind-always-wanders-to-success.jpg?b=1&s=170667a&w=0&k=20&c=7cmlHm5_50geYH93xIE3_kIFHfFW_9LPC_euJA0w1Go=" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>


                    <div className="card">
                        <img src="https://media.istockphoto.com/id/1180357593/photo/his-mind-always-wanders-to-success.jpg?b=1&s=170667a&w=0&k=20&c=7cmlHm5_50geYH93xIE3_kIFHfFW_9LPC_euJA0w1Go=" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>

                </div>


            </div>
            <div className="home-container-sound-of-india-div">
            <div className="card-heading-div">
                    <span>Sound of India</span>
                    <span className="span2">show all</span>

                </div>
                <div className="card-div">
                    <div className="card">
                        <img src="https://media.istockphoto.com/id/1180357593/photo/his-mind-always-wanders-to-success.jpg?b=1&s=170667a&w=0&k=20&c=7cmlHm5_50geYH93xIE3_kIFHfFW_9LPC_euJA0w1Go=" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>



                    <div className="card">
                        <img src="https://media.istockphoto.com/id/1180357593/photo/his-mind-always-wanders-to-success.jpg?b=1&s=170667a&w=0&k=20&c=7cmlHm5_50geYH93xIE3_kIFHfFW_9LPC_euJA0w1Go=" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>


                    <div className="card">
                        <img src="https://media.istockphoto.com/id/1180357593/photo/his-mind-always-wanders-to-success.jpg?b=1&s=170667a&w=0&k=20&c=7cmlHm5_50geYH93xIE3_kIFHfFW_9LPC_euJA0w1Go=" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>


                    <div className="card">
                        <img src="https://media.istockphoto.com/id/1180357593/photo/his-mind-always-wanders-to-success.jpg?b=1&s=170667a&w=0&k=20&c=7cmlHm5_50geYH93xIE3_kIFHfFW_9LPC_euJA0w1Go=" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>


                    <div className="card">
                        <img src="https://media.istockphoto.com/id/1180357593/photo/his-mind-always-wanders-to-success.jpg?b=1&s=170667a&w=0&k=20&c=7cmlHm5_50geYH93xIE3_kIFHfFW_9LPC_euJA0w1Go=" alt="" />
                        <h6>Peaceful Piano</h6>
                        <span>Relax and indulge with beautiful piano pieces</span>
                    </div>

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