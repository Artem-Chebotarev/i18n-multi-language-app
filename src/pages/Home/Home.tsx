import React, { FC } from "react";
import Header from "../../components/Header/Header";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { translate } from "../../i18n";

const Home: FC = () => {
    const { language } = useTypedSelector(state => state.language);

    return (
        <>
            <Header fixed transparent />
            <section className="intro">
                <div className="intro__overlay"></div>
                <div className="intro__body">
                    <h1>React</h1>
                    <p>{translate('introText', language)}</p>
                </div>
            </section>
        </>
    );
};

export default Home;