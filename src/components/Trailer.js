import React, { useEffect, useState } from 'react';
import ModalVideo from 'react-modal-video';
import { useParams } from 'react-router';
import '../utilities/CSS/onemoviespage.css'
import { base_URL } from '../utilities/constant';

const Trailer = () => {
    const [TrailerMovie, setTrailerMovie] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    let { id } = useParams(null);
    useEffect(() => {
        const fetchTrailerMovies = async () => {
            try {
                const response = await fetch(`${base_URL}${id}/videos?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`);
                const data = await response.json();
                setTrailerMovie(data);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        };
        fetchTrailerMovies();
    }, []);

    console.log("Trailer Movie:", TrailerMovie);

    const handleOpenModal = () => {
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };
    return (
        <>
            <div>
                {TrailerMovie?.results?.length > 0 && (
                    <ModalVideo
                        channel="youtube"
                        autoplay
                        isOpen={modalIsOpen}
                        videoId={TrailerMovie.results[0].key}
                        onClose={handleCloseModal}
                        classNames="container"
                    />
                )}
            </div>
            <div
                onClick={handleOpenModal}
            >
              {/* <i class="fa-solid fa-play"></i>
              <p>Play Trailer</p> */}
            </div>
        </>
    );
}

export default Trailer;
