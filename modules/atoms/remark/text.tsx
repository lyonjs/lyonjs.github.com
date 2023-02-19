import exp from 'constants';
import React from 'react';

export const Ul: React.FC = (props) => <ul className="my-4 list-disc pl-6" {...props} />;

export const Li: React.FC = (props) => <li {...props} />;

export const P: React.FC = (props) => <p className="my-4" {...props} />;

export const A: React.FC = (props) => <a style={{ color: 'var(--main-color)' }} {...props} />;
