import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { translate } from "../../i18n";

const Page404: FC = () => {
    const { language } = useTypedSelector(state => state.language);

    return (
        <div className="page-404">
            <div className="container">
                <h1>404</h1>
                <p>{translate('pageDoesNotExist', language)}</p>
                <p><Link to="/">{translate('returnToHomepage', language)}</Link></p>
            </div>
        </div>
    );
};

export default Page404;