import React from "react";

export const Main = (props) => {
    const { currentListing } = props;
    return (
        <main>
            {Object.keys(currentListing).map((article, index) => {
                let url;
                if (currentListing[article].data.media) {
                    url = currentListing[article].data.media.oembed.thumbnail_url;
                }
                return (
                    <div key={index}>
                        <h3>{currentListing[article].data.title}</h3>
                        {url ? (
                            <img src={url} alt={currentListing[article].data.title} />
                        ) : ""}
                    </div>
                )
            })}
        </main>
    )
}