import React from 'react';

const ButtonLink = ({ url, text, padding }) => {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      href={url}
      target='_blank'
      className={`transition ease-in-out duration-300 ${padding} rounded-md text-white border-2 hover:bg-white hover:text-black hover:scale-110 hover:-translate-y-1 cursor-pointer`}
    >
      {text}
    </a>
  );
}

export default ButtonLink;