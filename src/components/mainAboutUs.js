import React from 'react';
import "../styles/mainAboutUs.scss"
import {Link} from "react-router-dom";

const MainAboutUs = () => {
    return (
        <div className="my-12">
            <div className="container mx-auto">
                <h1 className="text-black text-2xl uppercase font-bold text-center my-10">BIZ HAQIMIZDA</h1>
                <div className="w-full flex">
                    <div className="w-1/2 mr-10">
                        <p className='text-black text-base font-semibold text-justify'>
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            industry's standard dummy text ever since the,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially.
                        </p>
                        <p className="text-black text-base font-semibold text-justify">
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            industry's standard dummy text ever since the,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially.
                        </p>
                        <p className="text-black text-base font-semibold text-justify">
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            industry's standard dummy text ever since the,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially.
                        </p>
                        <p className="text-black text-base font-semibold text-justify">
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            industry's standard dummy text ever since the,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially.
                        </p>
                        <p className="text-black text-base font-semibold text-justify">
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            industry's standard dummy text ever since the,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially.
                        </p>
                    </div>
                    <div className="w-1/2 ml-10 aboutUsImage rounded-xl">
                        <div className="btn flex items-center justify-center h-full">
                            <Link to="/about" type='button' className="link bg-white text-blue-500 text-xl font-semibold rounded-lg shadow-lg uppercase py-3 px-5">batafsil</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainAboutUs;