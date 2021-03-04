import React from 'react';

import ReactMarkdown from 'react-markdown';

import { Styles } from './styles';

const StyledMarkdown = ({ source }) => (
  <Styles>
    <ReactMarkdown source={source} escapeHtml={false} />
  </Styles>
);

export default StyledMarkdown;
