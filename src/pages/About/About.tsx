import React, { FC } from "react";
import Header from "../../components/Header/Header";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { translate } from "../../i18n";

import aboutImg from '../../assets/about.jpg';

const About: FC = () => {
    const { language } = useTypedSelector(state => state.language);

    return (
        <>
            <Header />
            <section className="about">
                <div className="container">
                    <h1>{translate('about', language)}</h1>
                    <img src={aboutImg} alt="" />
                    <p>{translate('aboutUsText', language)}</p>
                </div>
            </section>
        </>
    );
};

export default About;