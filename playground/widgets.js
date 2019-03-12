import React from 'react';

export const EhBanner = (props) => {
    const { options } = props;
    const { title, text } = options;
  
    return (
      <div className="alert bg-orange-lightest" role="alert">
        <h4 className="alert__title h4">{title}</h4>
        <p className="alert__text bodyLarge mx-md">{text}</p>
        <svg className="alert__close-icon ml-auto" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 100 100">
          <path fill="currentColor" d="M56.5 47.5L78.9 25c1.2-1.2 1.2-3.1 0-4.2-1.2-1.2-3.1-1.2-4.2 0L52.3 43.3 29.8 20.8c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2L48 47.5 25.6 70c-1.2 1.2-1.2 3.1 0 4.2.6.6 1.4.9 2.1.9s1.5-.3 2.1-.9l22.5-22.5 22.5 22.5c.6.6 1.4.9 2.1.9s1.5-.3 2.1-.9c1.2-1.2 1.2-3.1 0-4.2L56.5 47.5z"/>
        </svg>
      </div>
    );
}

export const widgets = {
    ehBanner: EhBanner
}