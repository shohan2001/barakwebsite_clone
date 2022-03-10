import achieve from "./achieve.module.css";

import image1 from "./image 41.png";
import image2 from "./image 42.png";
import image3 from "./image 47.png";

const Achievements = () => {
    return (
        <div className={achieve.content}>
            <h1>Achievements</h1>

            <div className={achieve.gridContainer}>
                <div className={achieve.wrapper}>
                    <img src={image1} alt="" />
                    <div className={achieve.text}>
                        <div className={achieve.heading}>
                            Winners of Interhostel Tournament
                        </div>

                        <div className={achieve.des}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            do.
                        </div>
                    </div>
                </div>

                <div className={achieve.wrapper}>
                    <img src={image2} alt="" />

                    <div className={achieve.heading}>
                        Winners of Interhostel Tournament
                    </div>
                    <div className={achieve.des}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et do.
                    </div>
                </div>
                <div className={achieve.wrapper}>
                    <img src={image3} alt="" />
                    <div className={achieve.heading}>
                        Winners of Interhostel Tournament
                    </div>
                    <div className={achieve.des}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et do.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
