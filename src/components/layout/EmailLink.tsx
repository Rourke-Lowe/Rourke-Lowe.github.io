'use client';

import React from 'react';
import { Mail } from 'lucide-react';
import { iconLinkClass } from './iconLinkClass';

// The address is stored reversed and base64-encoded so it never appears in the
// page source. It's only decoded when someone clicks the link.
const ENCODED = 'bW9jLmxpYW1nQGVrcnVvci5ld29s';

const decode = () => Array.from(atob(ENCODED)).reverse().join('');

const EmailLink = () => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.href = `mailto:${decode()}`;
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      aria-label="Email"
      className={iconLinkClass}
    >
      <Mail size={24} />
    </a>
  );
};

export default EmailLink;
