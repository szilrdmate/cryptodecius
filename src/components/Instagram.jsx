// src/components/Instagram.jsx
import React, { useEffect } from 'react';

const InstagramFeed = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
    }, []);

    const iframeHtml = `<iframe src="//lightwidget.com/widgets/bc28f68188ee551d80f9dc44ce96ad81.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>`;

    return (
        <div className="max-w-5xl mx-auto py-16">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-8">
            Check out our <span className="text-light-blue">Extensive Educational </span>Library!
          </h1>
            <div dangerouslySetInnerHTML={{ __html: iframeHtml }} />
        </div>
    );
};

export default InstagramFeed;
