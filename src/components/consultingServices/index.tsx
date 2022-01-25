import React from 'react';
import './index.css';


const ConsultingServices = () => (
    <section id="whatwedo" className="main-container">
    <article className="row">
        <article className="col-sm-12">
            <h2 className="special">Consulting</h2>
        </article>
        <article className="col-md-3 col-sm-6 do-angular">
            {/* TODO: Update link after implement this page */}
            <a href="https://www.ssw.com.au/ssw/Consulting/Web-Applications.aspx">
                <h2>Web / Angular / React</h2>
                <p>
                    Ever since SSW developed the very first .NET
                    Website in Australia, we've been known as
                    leaders in Web Development.
                </p>
            </a>
        </article>
        <article className="col-md-3 col-sm-6 do-cloud">
            {/* TODO: Update link after implement this page */}
            <a href="https://www.ssw.com.au/ssw/Consulting/Azure.aspx">
                <h2>DevOps {'&'} Cloud</h2>
                <p>
                    Making your software ships by using SSW
                    developers' best practices in Azure, DevOps
                    and Docker Containers.
                </p>
            </a>
        </article>
        <article className="col-md-3 col-sm-6 do-mobile">
            {/* TODO: Update link after implement this page */}
            <a href="https://www.ssw.com.au/ssw/Consulting/Mobile-Application-Development.aspx">
                <h2>Mobile/Bots/AI</h2>
                <p>
                    SSW software developers are experts at
                    building cross platform mobile and chat apps
                    using the power of AI with Machine Learning.
                </p>
            </a>
        </article>

        <article className="col-md-3 col-sm-6 do-rules">
            {/* TODO: Update link after implement this page */}
            <a href="https://www.ssw.com.au/ssw/Consulting/Microsoft-Dynamics-365.aspx">
                <h2>Dynamics 365</h2>
                <p>
                    Dynamics 365/CRM brings new levels of
                    customer intelligence, providing employees
                    the information they need to truly impress.
                </p>
            </a>
        </article>
    </article>
</section>
);

export default ConsultingServices;
